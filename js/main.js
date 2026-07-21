(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  // ── Language toggle ────────────────────────────────────────────────
  const langToggle = document.getElementById("langToggle");
  const savedLang = localStorage.getItem("site_lang") || "uk";
  applyLanguage(savedLang);

  langToggle.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "uk";
    applyLanguage(current === "uk" ? "en" : "uk");
  });

  // ── Mobile nav ──────────────────────────────────────────────────────
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  function closeNav() {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (!nav.contains(e.target) && !burger.contains(e.target)) closeNav();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  // ── Header shadow on scroll ─────────────────────────────────────────
  const header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ── Scroll-reveal ───────────────────────────────────────────────────
  const revealEls = document.querySelectorAll(".reveal:not(.is-visible)");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ── Active nav link on scroll ───────────────────────────────────────
  const sections = ["sci", "services", "about", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll(".nav-link[href^='#']"));

  function updateActiveLink() {
    const scrollPos = window.scrollY + 140;
    let current = null;
    for (const section of sections) {
      if (section.offsetTop <= scrollPos) current = section.id;
    }
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
    });
  }
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();

  // ── Animated counters — count up once when a stat enters view ───────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1100;
    const start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out-cubic
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const counters = document.querySelectorAll(".js-counter");
  if ("IntersectionObserver" in window && counters.length) {
    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => counterIo.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = (el.dataset.target || "0") + (el.dataset.suffix || "")));
  }

  // ── Magnetic buttons — subtle cursor-follow offset + glow position ──
  const magnets = document.querySelectorAll(".btn--magnetic");
  magnets.forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      const relX = (x / r.width - 0.5) * 10;
      const relY = (y / r.height - 0.5) * 10;
      el.style.setProperty("--tx", `${relX}px`);
      el.style.setProperty("--ty", `${relY}px`);
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--tx", "0px");
      el.style.setProperty("--ty", "0px");
    });
  });

  // ── Card cursor-glow (services + panels) — CSS radial-gradient follows pointer ──
  document.querySelectorAll(".service-card, .panel").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--gx", `${e.clientX - r.left}px`);
      card.style.setProperty("--gy", `${e.clientY - r.top}px`);
    });
  });
})();
