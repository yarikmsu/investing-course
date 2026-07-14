#!/usr/bin/env bash
# Проверка собранного сайта (_site) на регрессии рендеринга, которые
# markdown-гейт (check-parity.py) увидеть не может, потому что они
# возникают только после прохода через kramdown/Jekyll.
#
#   1. Экранированные теги <details>/<summary> в тексте — признак того,
#      что квизы сломаны (ответы видны всегда, в тексте мусор).
#   2. Невалидный search-data.json — поиск по сайту молча не работает.
#
# Использование: scripts/check-built-html.sh <каталог _site>
set -euo pipefail
SITE="${1:-_site}"
fail=0

echo "→ Проверка на экранированные теги <details>/<summary>…"
if grep -rl '&lt;/summary&gt;\|&lt;/details&gt;\|&lt;summary&gt;&lt;' "$SITE" 2>/dev/null; then
  echo "❌ Найдены экранированные теги квизов — рендеринг <details> сломан (нужен <summary markdown=\"span\">)."
  fail=1
else
  echo "✅ Экранированных тегов квизов нет."
fi

echo "→ Проверка search-data.json на валидность JSON…"
for j in $(find "$SITE" -name search-data.json); do
  if ! head -c 1 "$j" | grep -q '{'; then
    echo "❌ $j не является JSON (вероятно, обёрнут в HTML-layout) — поиск по сайту не работает."
    fail=1
  fi
done
[ "$fail" = 0 ] && echo "✅ search-data.json валиден." || true

exit "$fail"
