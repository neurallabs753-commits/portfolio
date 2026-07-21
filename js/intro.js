// One-shot "SCI breaks the chains" intro. Plays once per browser session
// (sessionStorage) so repeat visits during the same visit aren't annoying;
// always skippable; respects prefers-reduced-motion by skipping the whole
// sequence instantly. Runs before main.js so the rest of the page can start
// its own reveal animations right after.
(function () {
  "use strict";

  const overlay = document.getElementById("introOverlay");
  const skipBtn = document.getElementById("introSkip");
  const caption = document.getElementById("introCaption");
  if (!overlay) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const alreadySeen = sessionStorage.getItem("sci_intro_seen") === "1";

  function finish() {
    overlay.classList.add("is-hidden");
    sessionStorage.setItem("sci_intro_seen", "1");
    window.setTimeout(() => overlay.remove(), 650);
  }

  if (reduceMotion || alreadySeen) {
    finish();
    return;
  }

  skipBtn.addEventListener("click", finish);

  const RATTLE_MS = 550;
  const BREAK_MS = 900;

  window.setTimeout(() => {
    overlay.classList.add("is-rattling");
  }, 150);

  window.setTimeout(() => {
    overlay.classList.remove("is-rattling");
    overlay.classList.add("is-breaking");
    if (caption) {
      const lang = localStorage.getItem("site_lang") || "uk";
      caption.textContent = lang === "en" ? "released" : "звільнено";
    }
  }, 150 + RATTLE_MS);

  window.setTimeout(finish, 150 + RATTLE_MS + BREAK_MS);
})();
