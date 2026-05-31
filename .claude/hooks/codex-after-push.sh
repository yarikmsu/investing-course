#!/usr/bin/env bash
# PostToolUse(Bash) hook — after a SUCCESSFUL `git push`, request a Codex review
# on the current branch's open PR and remind the agent to process the comments.
# Scope: investing-course repo only (wired in .claude/settings.local.json).
# Set CODEX_HOOK_DRYRUN=1 to test without actually posting a comment.

input="$(cat)"
cmd="$(printf '%s' "$input" | jq -r '.tool_input.command // ""' 2>/dev/null)"

# 1. Only act on `git push` commands.
printf '%s' "$cmd" | grep -Eq '(^|[^[:alnum:]_])git[[:space:]]+push' || exit 0

# 2. Must be inside a git repo.
root="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0
cd "$root" 2>/dev/null || exit 0

# 3. Confirm the push actually landed: HEAD must not be ahead of its upstream.
up="$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null)"
[ -z "$up" ] && exit 0
ahead="$(git rev-list "${up}..HEAD" 2>/dev/null | wc -l | tr -d ' ')"
[ "$ahead" != "0" ] && exit 0

# 4. Find the OPEN PR for the current branch (none → quietly skip).
pr="$(gh pr view --json number,state -q 'select(.state=="OPEN").number' 2>/dev/null)"
[ -z "$pr" ] && exit 0

# 5. Request a fresh Codex review.
if [ -n "${CODEX_HOOK_DRYRUN:-}" ]; then
  echo "[dryrun] would post '@codex review' to PR #$pr" >&2
else
  gh pr comment "$pr" --body "@codex review" >/dev/null 2>&1 || exit 0
fi

# 6. Remind the agent (this turn) to wait for and process the review.
ctx="A git push just landed and \"@codex review\" was posted to PR #${pr}. Per the user's standing instruction (\"ask Codex for review after every push and process comments\"): wait ~1-3 minutes, then fetch the new Codex review via 'gh api repos/{owner}/{repo}/pulls/${pr}/comments' and 'gh pr view ${pr} --json reviews', and PROCESS each comment — verify it against primary sources before acting, apply valid fixes (mirroring RU/EN where applicable), reply on each thread, and re-push (which will trigger another review). Stop only when Codex's latest review has no actionable comments. Do not declare the work complete until then."
jq -cn --arg pr "$pr" --arg ctx "$ctx" \
  '{systemMessage:("🤖 Requested Codex review on PR #"+$pr+" — will process its comments."),hookSpecificOutput:{hookEventName:"PostToolUse",additionalContext:$ctx}}'
exit 0
