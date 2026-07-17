/* Interactive course widgets (PERF-1): progress tracker + completion
   certificate, per-page feedback, audience wizard, and scored quiz.
   Extracted from the inline head include so the browser can cache it once and
   the RU/EN copies stay in sync. No dependencies, no backend — all state lives
   in localStorage. Language-aware at runtime via location.pathname.
   Loaded with `defer`, so DOMContentLoaded listeners still fire. */

/* Course progress tracker + completion certificate (localStorage, no deps).
   Shared across RU/EN, language-aware. Hardened against tampered storage. */
(function () {
  var MODULES = ["module-00-preparation", "module-01-introduction", "module-02-stock-market",
    "module-03-instruments", "module-04-brokers-taxes", "module-05-strategies",
    "module-06-etf-index", "module-07-risk-psychology", "module-08-practice"];
  var KEY = "ic-completed-modules", NAMEKEY = "ic-cert-name", DATEKEY = "ic-cert-date";
  var isRU = location.pathname.indexOf("/ru/") !== -1;
  var L = isRU ? {
    done: "Модуль пройден", mark: "Отметить модуль пройденным", progress: "Прогресс курса",
    of: "из", complete: "пройдено", viewCert: "🎓 Открыть сертификат →",
    certTitle: "Сертификат о прохождении", certBody: "Настоящим подтверждается, что",
    namePlaceholder: "Ваше имя", certLine: "прошёл(а) курс «Инвестирование в США»",
    dateLabel: "Дата", print: "Печать / Сохранить PDF",
    locked: "Завершите все 9 модулей курса, чтобы разблокировать сертификат.",
    resume: "Продолжить", moduleWord: "Модуль", shareLinkedIn: "Поделиться в LinkedIn",
    streakTitle: "Дней подряд с занятиями по курсу"
  } : {
    done: "Module complete", mark: "Mark module complete", progress: "Course progress",
    of: "of", complete: "complete", viewCert: "🎓 View your certificate →",
    certTitle: "Certificate of Completion", certBody: "This certifies that",
    namePlaceholder: "Your name", certLine: "completed the “Investing in the US” course",
    dateLabel: "Date", print: "Print / Save as PDF",
    locked: "Complete all 9 course modules to unlock your certificate.",
    resume: "Continue", moduleWord: "Module", shareLinkedIn: "Share on LinkedIn",
    streakTitle: "Day streak studying the course"
  };
  /* A11Y-4: honour prefers-reduced-motion — drop the bar's width animation. */
  var TRANS = (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) ? "" : "transition:width .3s;";
  function load() { try { var x = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(x) ? x : []; } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }
  function get(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function doneSet() { var s = {}, a = load(); for (var i = 0; i < a.length; i++) { if (MODULES.indexOf(a[i]) !== -1) s[a[i]] = 1; } return s; }
  function doneCount() { return Object.keys(doneSet()).length; }
  function allDone() { return doneCount() === MODULES.length; }
  function currentSlug() {
    for (var i = 0; i < MODULES.length; i++) { if (location.pathname.indexOf("/" + MODULES[i] + "/") !== -1) return MODULES[i]; }
    return null;
  }
  function certUrl() { return (isRU ? "/investing-course/ru" : "/investing-course/en") + "/CERTIFICATE/"; }
  function shareUrl() {
    var home = location.origin + (isRU ? "/investing-course/ru/" : "/investing-course/en/");
    return "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(home);
  }
  function localDate(d) { function p(n) { return (n < 10 ? "0" : "") + n; } return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()); }
  function today() { return localDate(new Date()); }
  function yesterday() { var d = new Date(); d.setDate(d.getDate() - 1); return localDate(d); }
  function safeDate() { var d = get(DATEKEY); if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) { d = today(); set(DATEKEY, d); } return d; }
  /* ENG-6: light day-streak nudge. Updates once per calendar day of activity. */
  function updateStreak() {
    var d = get("ic-streak-date"), n = parseInt(get("ic-streak"), 10);
    if (isNaN(n) || n < 0) n = 0;
    var t = today();
    if (d === t) { if (n < 1) { n = 1; set("ic-streak", "1"); } return n; }
    n = (d === yesterday()) ? n + 1 : 1;
    set("ic-streak", String(n)); set("ic-streak-date", t);
    return n;
  }
  function streakBadge(n) {
    if (!n || n < 2) return "";
    return ' <span title="' + L.streakTitle + '" style="white-space:nowrap;">🔥 ' + n + '</span>';
  }
  function bar(n) {
    var pct = Math.round(n / MODULES.length * 100);
    return '<div role="progressbar" aria-label="' + L.progress + '" aria-valuemin="0" aria-valuemax="' + MODULES.length +
      '" aria-valuenow="' + n + '" style="height:8px;background:#e0e0e0;border-radius:4px;overflow:hidden;"><div style="height:100%;width:' + pct + '%;background:#2e7d32;' + TRANS + '"></div></div>';
  }
  function addPrintStyle() {
    if (document.getElementById("ic-print-style")) return;
    var st = document.createElement("style");
    st.id = "ic-print-style";
    st.textContent = "@media print{.side-bar,.main-header,.site-footer,.aux-nav,#ic-cert-print,#ic-cert-share,.ic-progress,.skip-to-main{display:none!important}.main,.main-content-wrap,.main-content{margin:0!important;max-width:none!important}#ic-cert-name{border:none!important}}";
    document.head.appendChild(st);
  }

  function renderCertificate(root) {
    if (!allDone()) {
      root.innerHTML = '<div style="padding:1rem;border:1px dashed #bbb;border-radius:8px;background:#fafafa;">' +
        '<p style="margin-bottom:0.6rem;">' + L.locked + '</p>' +
        '<div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;font-size:0.9rem;"><span>' + L.progress +
        '</span><span aria-live="polite"><strong>' + doneCount() + '</strong> ' + L.of + ' ' + MODULES.length + ' ' + L.complete + '</span></div>' +
        bar(doneCount()) + '</div>';
      return;
    }
    addPrintStyle();
    var date = safeDate();
    root.innerHTML =
      '<div id="ic-cert-card" style="text-align:center;padding:2.5rem 1.5rem;border:3px double #2e7d32;border-radius:12px;background:#fff;max-width:640px;margin:1rem auto;">' +
      '<div style="font-size:2.5rem;" aria-hidden="true">🎓</div>' +
      '<h2 style="border:none;margin:0.5rem 0;">' + L.certTitle + '</h2>' +
      '<p style="margin:1rem 0 0.3rem;color:#555;">' + L.certBody + '</p>' +
      '<input id="ic-cert-name" type="text" aria-label="' + L.namePlaceholder + '" placeholder="' + L.namePlaceholder + '" ' +
      'style="font-size:1.4rem;font-weight:600;text-align:center;border:none;border-bottom:2px solid #2e7d32;padding:0.2rem 0.5rem;max-width:90%;">' +
      '<p style="margin:0.8rem 0;">' + L.certLine + '</p>' +
      '<p style="color:#777;font-size:0.9rem;">' + L.dateLabel + ': ' + date + '</p>' +
      '</div>' +
      '<div style="text-align:center;margin-top:0.5rem;display:flex;gap:0.6rem;justify-content:center;flex-wrap:wrap;">' +
      '<button id="ic-cert-print" type="button" ' +
      'style="padding:0.4rem 1rem;border:1px solid #2e7d32;border-radius:6px;background:#2e7d32;color:#fff;cursor:pointer;">' + L.print + '</button>' +
      '<a id="ic-cert-share" href="' + shareUrl() + '" target="_blank" rel="noopener" ' +
      'style="padding:0.4rem 1rem;border:1px solid #2e7d32;border-radius:6px;background:#fff;color:#2e7d32;font-weight:600;text-decoration:none;">' + L.shareLinkedIn + '</a>' +
      '</div>';
    var nameEl = root.querySelector("#ic-cert-name");
    nameEl.value = get(NAMEKEY);
    nameEl.addEventListener("input", function () { set(NAMEKEY, nameEl.value); });
    root.querySelector("#ic-cert-print").addEventListener("click", function () { window.print(); });
  }

  function firstIncomplete() {
    var ds = doneSet();
    for (var i = 0; i < MODULES.length; i++) { if (!ds[MODULES[i]]) return MODULES[i]; }
    return null;
  }
  function moduleNum(slug) { var m = slug.match(/module-0*(\d+)/); return m ? m[1] : ""; }
  /* ENG-2: on the home page, offer returning learners a one-click jump back to
     their first unfinished module (or the certificate once everything is done).
     First-time visitors (nothing completed) see nothing — they use the normal
     "Start the course" button. */
  function renderResume(main) {
    var done = doneCount();
    if (done === 0) return;
    var streak = updateStreak();
    var target = firstIncomplete();
    var card = document.createElement("div");
    card.className = "ic-progress ic-resume";
    card.style.cssText = "margin:0 0 1.5rem;padding:0.9rem 1.1rem;border:1px solid #e0e0e0;border-radius:8px;background:#f1f8f2;font-size:0.95rem;";
    var html = '<div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;font-size:0.9rem;"><span>' + L.progress + streakBadge(streak) +
      '</span><span aria-live="polite"><strong>' + done + '</strong> ' + L.of + ' ' + MODULES.length + ' ' + L.complete + '</span></div>' + bar(done);
    if (target) {
      var href = (isRU ? "/investing-course/ru" : "/investing-course/en") + "/" + target + "/";
      html += '<div style="margin-top:0.7rem;"><a href="' + href + '" style="display:inline-block;padding:0.5rem 1.1rem;border-radius:6px;background:#2e7d32;color:#fff;font-weight:600;text-decoration:none;">' +
        L.resume + " → " + L.moduleWord + " " + moduleNum(target) + '</a></div>';
    } else {
      html += '<div style="margin-top:0.7rem;"><a href="' + certUrl() + '" style="display:inline-block;padding:0.5rem 1.1rem;border-radius:6px;background:#2e7d32;color:#fff;font-weight:600;text-decoration:none;">' + L.viewCert + '</a></div>';
    }
    card.innerHTML = html;
    main.insertBefore(card, main.firstChild);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var main = document.getElementById("main-content");
    if (!main) return;
    if (main.querySelector(".ic-progress") || main.querySelector("#ic-cert-card")) return;
    var certRoot = document.getElementById("ic-cert-root");
    if (certRoot) { renderCertificate(certRoot); return; }
    if (/\/investing-course\/(ru|en)\/$/.test(location.pathname)) { renderResume(main); return; }
    var slug = currentSlug();
    var isHub = /\/modules\/?$/.test(location.pathname);
    if (!slug && !isHub) return;
    var n = doneCount();
    var streak = updateStreak();
    var wrap = document.createElement("div");
    wrap.className = "ic-progress";
    wrap.style.cssText = "margin:0 0 1.5rem;padding:0.75rem 1rem;border:1px solid #e0e0e0;border-radius:8px;background:#fafafa;font-size:0.9rem;";
    wrap.innerHTML =
      '<div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;"><span>' + L.progress + streakBadge(streak) +
      '</span><span aria-live="polite"><strong id="ic-count">' + n + '</strong> ' + L.of + ' ' + MODULES.length + ' ' + L.complete + '</span></div>' +
      '<div id="ic-bar-wrap" role="progressbar" aria-label="' + L.progress + '" aria-valuemin="0" aria-valuemax="' + MODULES.length +
      '" aria-valuenow="' + n + '" style="height:8px;background:#e0e0e0;border-radius:4px;overflow:hidden;"><div id="ic-bar" style="height:100%;width:' + Math.round(n / MODULES.length * 100) + '%;background:#2e7d32;' + TRANS + '"></div></div>' +
      '<div id="ic-cert-link" style="margin-top:0.5rem;' + (allDone() ? '' : 'display:none;') + '"><a href="' + certUrl() + '" style="color:#2e7d32;font-weight:600;">' + L.viewCert + '</a></div>';
    if (slug) {
      var btn = document.createElement("button");
      btn.type = "button"; btn.id = "ic-toggle";
      btn.style.cssText = "margin-top:0.6rem;padding:0.35rem 0.8rem;border:1px solid #2e7d32;border-radius:6px;cursor:pointer;font-size:0.85rem;";
      function paint(done) {
        btn.textContent = done ? "✓ " + L.done : L.mark;
        btn.style.background = done ? "#2e7d32" : "#fff";
        btn.style.color = done ? "#fff" : "#2e7d32";
        btn.setAttribute("aria-pressed", done ? "true" : "false");
      }
      paint(!!doneSet()[slug]);
      btn.addEventListener("click", function () {
        var arr = load(), idx = arr.indexOf(slug);
        if (idx === -1) arr.push(slug); else arr.splice(idx, 1);
        save(arr);
        var c = doneCount();
        paint(!!doneSet()[slug]);
        document.getElementById("ic-count").textContent = c;
        document.getElementById("ic-bar").style.width = Math.round(c / MODULES.length * 100) + "%";
        document.getElementById("ic-bar-wrap").setAttribute("aria-valuenow", c);
        document.getElementById("ic-cert-link").style.display = allDone() ? "" : "none";
      });
      wrap.appendChild(btn);
    }
    main.insertBefore(wrap, main.firstChild);
  });
})();

/* Per-page "Was this page helpful?" feedback (BL-607). Client-side only, no
   backend: stores the vote in localStorage and, on a thumbs-down, offers a
   one-click pre-filled GitHub issue for details. Language-aware. */
(function () {
  var isRU = location.pathname.indexOf("/ru/") !== -1;
  var L = isRU ? {
    q: "Была ли эта страница полезной?", yes: "👍 Да", no: "👎 Нет",
    thanks: "Спасибо за ваш отзыв!", report: "Что можно улучшить? →",
    title: "Отзыв о странице: ", pageWord: "Страница: ", rateWord: "Оценка: ",
    askWord: "Что можно улучшить и почему?"
  } : {
    q: "Was this page helpful?", yes: "👍 Yes", no: "👎 No",
    thanks: "Thanks for your feedback!", report: "What could be improved? →",
    title: "Page feedback: ", pageWord: "Page: ", rateWord: "Rating: ",
    askWord: "What could be improved, and why?"
  };
  var REPO = "https://github.com/yarikmsu/investing-course";
  function fget(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function fset(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function issueUrl(vote) {
    var body = L.pageWord + location.href + "\n" + L.rateWord + vote + "\n\n" + L.askWord + "\n";
    return REPO + "/issues/new?labels=page-feedback&title=" +
      encodeURIComponent(L.title + (document.title || location.pathname)) +
      "&body=" + encodeURIComponent(body);
  }
  document.addEventListener("DOMContentLoaded", function () {
    var main = document.getElementById("main-content");
    if (!main) return;
    if (document.getElementById("ic-cert-root")) return;
    if (main.querySelector(".ic-feedback")) return;
    var art = main.querySelector("main") || main;
    var key = "ic-fb:" + location.pathname;
    var box = document.createElement("div");
    box.className = "ic-feedback";
    box.style.cssText = "margin:2.5rem 0 0;padding:1rem 0 0;border-top:1px solid #e0e0e0;font-size:0.9rem;color:#555;";
    function thanks(vote, focus) {
      box.innerHTML = "";
      var span = document.createElement("span");
      span.setAttribute("aria-live", "polite");
      span.setAttribute("tabindex", "-1");
      span.textContent = L.thanks + " ";
      box.appendChild(span);
      if (vote === "down") {
        var a = document.createElement("a");
        a.href = issueUrl(vote); a.target = "_blank"; a.rel = "noopener";
        a.textContent = L.report;
        a.style.cssText = "color:#2e7d32;font-weight:600;";
        box.appendChild(a);
      }
      if (focus) span.focus();
    }
    var prior = fget(key);
    if (prior === "up" || prior === "down") {
      thanks(prior);
    } else {
      var label = document.createElement("span");
      label.textContent = L.q + " ";
      label.style.marginRight = "0.5rem";
      box.appendChild(label);
      var mk = function (text, vote) {
        var b = document.createElement("button");
        b.type = "button"; b.textContent = text;
        b.style.cssText = "margin-right:0.5rem;padding:0.3rem 0.9rem;border:1px solid #2e7d32;border-radius:6px;background:#fff;color:#333;cursor:pointer;font-size:0.9rem;";
        b.addEventListener("click", function () { fset(key, vote); thanks(vote, true); });
        return b;
      };
      box.appendChild(mk(L.yes, "up"));
      box.appendChild(mk(L.no, "down"));
    }
    art.appendChild(box);
  });
})();

/* Audience segmentation wizard (BL-605). Renders into #ic-wizard-root on the
   audiences page: 3 questions route the reader to the right starting point.
   Client-side only, language-aware (RU has a Russia branch; EN does not). */
(function () {
  var isRU = location.pathname.indexOf("/ru/") !== -1;
  var base = isRU ? "/investing-course/ru" : "/investing-course/en";
  var L = isRU ? {
    heading: "Подберите свой маршрут",
    q1: "Вы живёте в США?", q2: "Вы налоговый резидент России?",
    yes: "Да", no: "Нет", restart: "← Начать заново", rec: "Рекомендуем:",
    rUS: "Основной курс", rUSd: "Курс написан для резидентов США — начните с быстрого старта и проходите модули по порядку.",
    rNon: "Раздел «Нерезиденты США»", rNond: "Вы инвестируете из-за пределов США — есть отдельный раздел про брокеров, налоги и форму W-8BEN.",
    rRu: "Раздел «Россияне»", rRud: "Для резидентов России есть отдельный раздел про санкционные ограничения и налоговую отчётность.",
    ctaQuick: "Быстрый старт →", ctaModules: "Все модули", ctaOpen: "Открыть раздел →"
  } : {
    heading: "Find your path",
    q1: "Do you live in the US?", q2: "",
    yes: "Yes", no: "No", restart: "← Start over", rec: "We recommend:",
    rUS: "Main course", rUSd: "The course is written for US residents — start with the quick start and take the modules in order.",
    rNon: "Non-US Residents section", rNond: "You're investing from outside the US — there's a dedicated section on brokers, taxes, and the W-8BEN form.",
    rRu: "", rRud: "",
    ctaQuick: "Quick start →", ctaModules: "All modules", ctaOpen: "Open the section →"
  };
  var STEPS = {
    start: { q: L.q1, opts: [ { t: L.yes, go: "us" }, { t: L.no, go: isRU ? "q2" : "nonres" } ] },
    q2: { q: L.q2, opts: [ { t: L.yes, go: "russia" }, { t: L.no, go: "nonres" } ] }
  };
  var RESULTS = {
    us: { title: L.rUS, desc: L.rUSd, ctas: [ { t: L.ctaQuick, href: base + "/QUICKSTART/", primary: true }, { t: L.ctaModules, href: base + "/modules/" } ] },
    nonres: { title: L.rNon, desc: L.rNond, ctas: [ { t: L.ctaOpen, href: base + "/NON-RESIDENTS/", primary: true } ] },
    russia: { title: L.rRu, desc: L.rRud, ctas: [ { t: L.ctaOpen, href: base + "/RUSSIA/", primary: true } ] }
  };
  function el(tag, css, text) {
    var e = document.createElement(tag);
    if (css) e.style.cssText = css;
    if (text != null) e.textContent = text;
    return e;
  }
  function renderStep(root, key, focus) {
    var step = STEPS[key];
    root.innerHTML = "";
    var card = el("div", "padding:1.25rem 1.5rem;border:1px solid #e0e0e0;border-radius:10px;background:#fafafa;max-width:560px;");
    card.setAttribute("role", "group");
    card.setAttribute("aria-labelledby", "ic-wiz-q");
    var prompt = el("div", "font-weight:600;margin-bottom:0.9rem;font-size:1.05rem;", step.q);
    prompt.id = "ic-wiz-q";
    prompt.setAttribute("tabindex", "-1");
    card.appendChild(prompt);
    var row = el("div", "display:flex;gap:0.6rem;flex-wrap:wrap;");
    for (var i = 0; i < step.opts.length; i++) {
      (function (opt) {
        var b = el("button", "padding:0.45rem 1.4rem;border:1px solid #2e7d32;border-radius:6px;background:#fff;color:#2e7d32;cursor:pointer;font-size:0.95rem;font-weight:600;", opt.t);
        b.type = "button";
        b.addEventListener("click", function () {
          if (RESULTS[opt.go]) renderResult(root, opt.go, true); else renderStep(root, opt.go, true);
        });
        row.appendChild(b);
      })(step.opts[i]);
    }
    card.appendChild(row);
    root.appendChild(card);
    if (focus) prompt.focus();
  }
  function renderResult(root, key, focus) {
    var r = RESULTS[key];
    root.innerHTML = "";
    var card = el("div", "padding:1.25rem 1.5rem;border:2px solid #2e7d32;border-radius:10px;background:#f1f8f2;max-width:560px;");
    card.setAttribute("role", "group");
    card.setAttribute("aria-labelledby", "ic-wiz-q");
    card.appendChild(el("div", "font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;color:#2e7d32;margin-bottom:0.3rem;", L.rec));
    var title = el("div", "font-weight:700;font-size:1.15rem;margin-bottom:0.5rem;", r.title);
    title.id = "ic-wiz-q";
    title.setAttribute("tabindex", "-1");
    card.appendChild(title);
    card.appendChild(el("p", "margin:0 0 1rem;color:#444;", r.desc));
    var row = el("div", "display:flex;gap:0.6rem;flex-wrap:wrap;align-items:center;");
    for (var i = 0; i < r.ctas.length; i++) {
      var c = r.ctas[i];
      var a = el("a", c.primary
        ? "padding:0.5rem 1.2rem;border-radius:6px;background:#2e7d32;color:#fff;font-weight:600;text-decoration:none;"
        : "padding:0.5rem 1.2rem;border:1px solid #2e7d32;border-radius:6px;color:#2e7d32;font-weight:600;text-decoration:none;", c.t);
      a.href = c.href;
      row.appendChild(a);
    }
    card.appendChild(row);
    var again = el("a", "display:inline-block;margin-top:1rem;color:#666;font-size:0.9rem;cursor:pointer;", L.restart);
    again.href = "#";
    again.addEventListener("click", function (ev) { ev.preventDefault(); renderStep(root, "start", true); });
    card.appendChild(again);
    root.appendChild(card);
    if (focus) title.focus();
  }
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("ic-wizard-root");
    if (!root) return;
    root.appendChild(el("h3", "margin:0 0 0.8rem;border:none;", L.heading));
    var host = el("div", null);
    root.appendChild(host);
    renderStep(host, "start", false);
  });
})();

/* Interactive scored quiz (BL-603). Renders into #ic-quiz-root from a JSON
   block <script id="ic-quiz-data">. Client-side scoring, no backend; stores the
   best score in localStorage. Questions come from the page JSON (already
   localized); only the chrome is language-aware. */
(function () {
  var isRU = location.pathname.indexOf("/ru/") !== -1;
  var L = isRU ? {
    check: "Проверить ответы", retry: "Пройти заново", your: "Ваш результат:",
    of: "из", best: "Лучший результат:", answerAll: "Ответьте на все вопросы.",
    perfect: "Отлично! Основы усвоены. 🎉", good: "Неплохо — повторите отмеченные темы.",
    low: "Стоит вернуться к материалам курса и попробовать снова."
  } : {
    check: "Check answers", retry: "Try again", your: "Your score:",
    of: "of", best: "Best score:", answerAll: "Please answer every question.",
    perfect: "Excellent! You've got the fundamentals. 🎉", good: "Nice — review the flagged topics.",
    low: "Consider revisiting the course materials and trying again."
  };
  function qget(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function qset(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function el(tag, css, text) {
    var e = document.createElement(tag);
    if (css) e.style.cssText = css;
    if (text != null) e.textContent = text;
    return e;
  }
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("ic-quiz-root");
    if (!root) return;
    var dataEl = document.getElementById("ic-quiz-data");
    if (!dataEl) return;
    var data; try { data = JSON.parse(dataEl.textContent || "{}"); } catch (e) { return; }
    var Q = (data && data.questions) || [];
    if (!Q.length) return;
    var BESTKEY = "ic-quiz-best:" + location.pathname;
    function render() {
      root.innerHTML = "";
      var form = el("form", "display:block;");
      var groups = [];
      for (var i = 0; i < Q.length; i++) {
        (function (idx) {
          var item = Q[idx];
          var fs = el("fieldset", "border:1px solid #e0e0e0;border-radius:8px;padding:0.9rem 1.25rem;margin:0 0 1rem;");
          fs.appendChild(el("legend", "font-weight:600;padding:0 0.4rem;", (idx + 1) + ". " + item.q));
          var opts = item.options || [];
          for (var j = 0; j < opts.length; j++) {
            var lab = el("label", "display:block;padding:0.25rem 0;cursor:pointer;");
            var inp = document.createElement("input");
            inp.type = "radio"; inp.name = "q" + idx; inp.value = String(j);
            inp.style.marginRight = "0.5rem";
            lab.appendChild(inp);
            lab.appendChild(document.createTextNode(opts[j]));
            fs.appendChild(lab);
          }
          var fb = el("div", "margin-top:0.5rem;font-size:0.9rem;display:none;");
          fs.appendChild(fb);
          groups.push({ fs: fs, fb: fb, item: item });
          form.appendChild(fs);
        })(i);
      }
      var status = el("div", "margin:0.5rem 0;font-weight:600;");
      status.setAttribute("aria-live", "polite");
      status.setAttribute("tabindex", "-1");
      var bestLine = el("div", "margin-top:0.6rem;color:#666;font-size:0.9rem;display:none;");
      var checkBtn = el("button", "padding:0.5rem 1.3rem;border:1px solid #2e7d32;border-radius:6px;background:#2e7d32;color:#fff;font-weight:600;cursor:pointer;", L.check);
      checkBtn.type = "button";
      var retryBtn = el("button", "padding:0.5rem 1.3rem;border:1px solid #2e7d32;border-radius:6px;background:#fff;color:#2e7d32;font-weight:600;cursor:pointer;display:none;margin-left:0.5rem;", L.retry);
      retryBtn.type = "button";
      retryBtn.addEventListener("click", function () {
        render();
        var first = root.querySelector('input[type="radio"]');
        if (first) first.focus();
      });
      checkBtn.addEventListener("click", function () {
        var answered = 0;
        for (var i = 0; i < groups.length; i++) {
          if (form.querySelector('input[name="q' + i + '"]:checked')) answered++;
        }
        if (answered < groups.length) { status.textContent = L.answerAll; return; }
        var score = 0;
        for (var i = 0; i < groups.length; i++) {
          var g = groups[i];
          var sel = form.querySelector('input[name="q' + i + '"]:checked');
          var chosen = sel ? parseInt(sel.value, 10) : -1;
          var ok = chosen === g.item.correct;
          if (ok) score++;
          g.fs.style.borderColor = ok ? "#2e7d32" : "#e53935";
          g.fs.style.background = ok ? "#f1f8f2" : "#fdecea";
          g.fb.style.display = "block";
          g.fb.innerHTML = "";
          g.fb.appendChild(el("span", "font-weight:600;color:" + (ok ? "#2e7d32" : "#c62828") + ";", ok ? "✓ " : "✗ "));
          if (g.item.explain) g.fb.appendChild(el("span", "color:#444;", g.item.explain));
          var inputs = g.fs.querySelectorAll("input");
          for (var k = 0; k < inputs.length; k++) inputs[k].disabled = true;
        }
        status.textContent = L.your + " " + score + " " + L.of + " " + groups.length + " — " +
          (score === groups.length ? L.perfect : (score >= Math.ceil(groups.length * 0.6) ? L.good : L.low));
        var best = parseInt(qget(BESTKEY), 10); if (isNaN(best)) best = 0;
        if (score > best) { qset(BESTKEY, String(score)); best = score; }
        bestLine.textContent = L.best + " " + best + " " + L.of + " " + groups.length;
        bestLine.style.display = "";
        checkBtn.style.display = "none";
        retryBtn.style.display = "";
        status.focus();
      });
      var bar = el("div", "display:flex;align-items:center;flex-wrap:wrap;");
      bar.appendChild(checkBtn); bar.appendChild(retryBtn);
      form.appendChild(status);
      form.appendChild(bar);
      form.appendChild(bestLine);
      root.appendChild(form);
      var best0 = parseInt(qget(BESTKEY), 10);
      if (!isNaN(best0) && best0 > 0) {
        bestLine.textContent = L.best + " " + best0 + " " + L.of + " " + Q.length;
        bestLine.style.display = "";
      }
    }
    render();
  });
})();

/* Pre-course path diagnostic (ENG-5). Renders into #ic-path-root: two questions
   (experience + time) recommend the Express / Standard / Advanced learning path
   and deep-link it. Client-side, language-aware, keyboard-accessible. */
(function () {
  var isRU = location.pathname.indexOf("/ru/") !== -1;
  var base = isRU ? "/investing-course/ru" : "/investing-course/en";
  var L = isRU ? {
    heading: "Какой маршрут вам подойдёт?",
    q1: "Насколько вы знакомы с инвестированием?",
    a1: ["Совсем новичок", "Кое-что знаю", "Уже инвестирую"],
    q2: "Сколько времени готовы вложить?",
    a2: ["Пара часов", "Выходные", "Основательно, без спешки"],
    rec: "Рекомендуем маршрут:", restart: "← Начать заново",
    express: "Экспресс", expressD: "Только самое важное: суть курса, быстрый старт и ответы на частые вопросы.",
    standard: "Стандартный", standardD: "Полное понимание: пройдите модули по порядку, с самого начала.",
    advanced: "Продвинутый", advancedD: "Вы уже инвестируете — сразу к оптимизации: риски, налоги, разбор ETF.",
    ctaStart: "Начать →", ctaMore: "Ещё"
  } : {
    heading: "Which path fits you?",
    q1: "How familiar are you with investing?",
    a1: ["Complete beginner", "I know a bit", "Already investing"],
    q2: "How much time can you put in?",
    a2: ["A couple of hours", "A weekend", "Thoroughly, no rush"],
    rec: "We recommend the path:", restart: "← Start over",
    express: "Express", expressD: "Just the essentials: the gist of the course, a quick start, and common questions.",
    standard: "Standard", standardD: "Full understanding: take the modules in order, from the beginning.",
    advanced: "Advanced", advancedD: "You already invest — go straight to optimization: risk, taxes, ETF deep-dives.",
    ctaStart: "Start →", ctaMore: "More"
  };
  var RESULTS = {
    express: { title: L.express, desc: L.expressD, ctas: [
      { t: L.ctaStart, href: base + "/QUICKSTART/", primary: true },
      { t: "TLDR", href: base + "/TLDR/" }, { t: "FAQ", href: base + "/FAQ/" } ] },
    standard: { title: L.standard, desc: L.standardD, ctas: [
      { t: L.ctaStart, href: base + "/module-00-preparation/", primary: true },
      { t: L.ctaMore, href: base + "/modules/" } ] },
    advanced: { title: L.advanced, desc: L.advancedD, ctas: [
      { t: L.ctaStart, href: base + "/ADVANCED/", primary: true },
      { t: "ETF", href: base + "/ETF-ANALYSIS/" } ] }
  };
  function recommend(exp, time) {
    if (time === 0) return "express";
    if (exp === 2 && time === 2) return "advanced";
    return "standard";
  }
  function el(tag, css, text) {
    var e = document.createElement(tag);
    if (css) e.style.cssText = css;
    if (text != null) e.textContent = text;
    return e;
  }
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("ic-path-root");
    if (!root) return;
    root.appendChild(el("h3", "margin:0 0 0.8rem;border:none;", L.heading));
    var host = el("div", null);
    root.appendChild(host);
    var answers = { exp: null, time: null };
    function question(prompt, options, onPick, focus) {
      host.innerHTML = "";
      var card = el("div", "padding:1.25rem 1.5rem;border:1px solid #e0e0e0;border-radius:10px;background:#fafafa;max-width:560px;");
      card.setAttribute("role", "group");
      card.setAttribute("aria-labelledby", "ic-path-q");
      var p = el("div", "font-weight:600;margin-bottom:0.9rem;font-size:1.05rem;", prompt);
      p.id = "ic-path-q"; p.setAttribute("tabindex", "-1");
      card.appendChild(p);
      var row = el("div", "display:flex;gap:0.6rem;flex-wrap:wrap;");
      for (var i = 0; i < options.length; i++) {
        (function (idx) {
          var b = el("button", "padding:0.45rem 1.2rem;border:1px solid #2e7d32;border-radius:6px;background:#fff;color:#2e7d32;cursor:pointer;font-size:0.95rem;font-weight:600;", options[idx]);
          b.type = "button";
          b.addEventListener("click", function () { onPick(idx); });
          row.appendChild(b);
        })(i);
      }
      card.appendChild(row);
      host.appendChild(card);
      if (focus) p.focus();
    }
    function result(key) {
      var r = RESULTS[key];
      host.innerHTML = "";
      var card = el("div", "padding:1.25rem 1.5rem;border:2px solid #2e7d32;border-radius:10px;background:#f1f8f2;max-width:560px;");
      card.setAttribute("role", "group");
      card.setAttribute("aria-labelledby", "ic-path-q");
      card.appendChild(el("div", "font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;color:#2e7d32;margin-bottom:0.3rem;", L.rec));
      var title = el("div", "font-weight:700;font-size:1.15rem;margin-bottom:0.5rem;", r.title);
      title.id = "ic-path-q"; title.setAttribute("tabindex", "-1");
      card.appendChild(title);
      card.appendChild(el("p", "margin:0 0 1rem;color:#444;", r.desc));
      var brow = el("div", "display:flex;gap:0.6rem;flex-wrap:wrap;align-items:center;");
      for (var i = 0; i < r.ctas.length; i++) {
        var c = r.ctas[i];
        var a = el("a", c.primary
          ? "padding:0.5rem 1.2rem;border-radius:6px;background:#2e7d32;color:#fff;font-weight:600;text-decoration:none;"
          : "padding:0.5rem 1.2rem;border:1px solid #2e7d32;border-radius:6px;color:#2e7d32;font-weight:600;text-decoration:none;", c.t);
        a.href = c.href;
        brow.appendChild(a);
      }
      card.appendChild(brow);
      var again = el("a", "display:inline-block;margin-top:1rem;color:#666;font-size:0.9rem;cursor:pointer;", L.restart);
      again.href = "#";
      again.addEventListener("click", function (ev) { ev.preventDefault(); step1(true); });
      card.appendChild(again);
      host.appendChild(card);
      title.focus();
    }
    function step1(focus) {
      question(L.q1, L.a1, function (i) { answers.exp = i; step2(true); }, focus);
    }
    function step2(focus) {
      question(L.q2, L.a2, function (i) { answers.time = i; result(recommend(answers.exp, answers.time)); }, focus);
    }
    step1(false);
  });
})();
