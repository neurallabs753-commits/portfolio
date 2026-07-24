// Translation dictionary + tiny apply function. No framework needed for one
// page: every translatable node is marked with data-i18n (text content) or
// data-i18n-aria (aria-label) and looked up by dotted key.
const I18N = {
  uk: {
    "nav.home": "Головна",
    "nav.brand": "Портфоліо",
    "nav.sci": "SCI",
    "nav.services": "Послуги",
    "nav.about": "Про мене",
    "nav.contact": "Зв'язатись",

    "hero.eyebrow": "SCI активний · маршрутизація по 6 AI-провайдерах",
    "hero.title1": "Роблю сайти й ботів,",
    "hero.title2": "що працюють з першого дня",
    "hero.sub": "Лендинг — 24-48 годин. Telegram-бот — 2-3 дні. Не тому що абияк, а тому що розробка автоматизована на власній платформі — рутина не з'їдає час.",
    "hero.ctaPrimary": "Обговорити проєкт",
    "hero.ctaSecondary": "Як працює SCI",
    "hero.stat1n": "24-48г",
    "hero.stat1d": "здача лендингу",
    "hero.stat2d": "рядків коду в основі",
    "hero.stat3d": "автотестів",

    "split.eyebrow": "Хто є хто",
    "split.title": "Інструмент і людина — не одне й те саме",
    "split.sub": "SCI виконує роботу. За результат, спілкування й рішення відповідаю я особисто.",
    "split.sciRole": "AI-платформа автоматизації розробки",
    "split.sciDesc": "Мультиагентна система: планувальник розбиває задачу на кроки, спеціалізовані агенти пишуть код паралельно, маршрутизатор обирає модель під кожен виклик, QA-агент шукає биті посилання й мертві кнопки до того, як їх побачите ви.",
    "split.sciLimit": "✕ не спілкується з клієнтами. ✕ не приймає рішень щодо вашого проєкту.",
    "split.seam": "керує",
    "split.name": "Іван",
    "split.humanRole": "розробник",
    "split.humanTagline": "Постановник задачі, контролер якості, ваш контакт",
    "split.humanDesc": "Я побудував SCI і використовую її щодня, щоб не витрачати ваш час на рутину. Але кожен проєкт я особисто беру в роботу, перевіряю руками перед здачею і відповідаю на повідомлення сам — жодних ботів у листуванні з вами.",
    "split.trust1": "Особисто перевіряю кожен проєкт перед здачею",
    "split.trust2": "Пряме спілкування, без посередників і скриптів",
    "split.trust3": "Відповідаю за результат — не SCI, а я",

    "services.eyebrow": "Послуги",
    "services.title": "Що я роблю",
    "services.from": "від",
    "services.s1title": "Лендинги та сайти",
    "services.s1desc": "Адаптивний сайт під ключ: чистий код, робочі форми, швидке завантаження. Без конструкторів і щомісячних платежів.",
    "services.s1time": "2 дні",
    "services.s2title": "Telegram-боти",
    "services.s2desc": "Прийом замовлень, бронювання, FAQ, адмінка, інтеграція з таблицями та оплатами. Повний вихідний код — ваш.",
    "services.s2time": "2-3 дні",
    "services.s3title": "AI-асистенти",
    "services.s3desc": "Чат-бот, що відповідає клієнтам на основі ваших даних — ціни, послуги, графік. Працює в сайті або Telegram.",
    "services.s3time": "2-4 дні",
    "services.s4title": "Виправлення багів",
    "services.s4desc": "Знайду й виправлю конкретну помилку у вашому сайті чи коді — з поясненням причини. Швидко, без переробки всього проєкту.",
    "services.s4time": "24 години",

    "about.eyebrow": "Про мене",
    "about.title": "Чому саме я",
    "about.p1": "Я — Іван, розробник. Побудував SCI, бо втомився витрачати клієнтський час на рутину, яку можна автоматизувати чесно, без втрати якості.",
    "about.p2": "Платформа бере на себе будівництво, я — точну постановку задачі й фінальну перевірку кожної деталі. Тому лендинг йде 24-48 годин, а не два тижні.",
    "about.f4": "типова здача лендингу",
    "about.f5": "типовий час відповіді на повідомлення",
    "about.f6": "проєктів перевіряю особисто перед здачею",

    "contact.eyebrow": "Контакт",
    "contact.title": "Обговоримо проєкт?",
    "contact.sub": "Опишіть задачу в кілька речень — відповідаю сам, протягом кількох годин.",
    "contact.email": "Email",
    "contact.fiverrView": "Замовити гіг →",
    "contact.githubView": "Код і проєкти →",

    "footer.text": "© <span id=\"year\"></span> Веб-розробка, боти, AI-інтеграції — на платформі SCI.",
  },
  en: {
    "nav.home": "Home",
    "nav.brand": "Portfolio",
    "nav.sci": "SCI",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.eyebrow": "SCI online · routing across 6 AI providers",
    "hero.title1": "I build sites and bots",
    "hero.title2": "that work from day one",
    "hero.sub": "Landing page — 24-48 hours. Telegram bot — 2-3 days. Not because it's rushed, but because the routine parts run on my own automated platform.",
    "hero.ctaPrimary": "Discuss a project",
    "hero.ctaSecondary": "How SCI works",
    "hero.stat1n": "24-48h",
    "hero.stat1d": "landing page delivery",
    "hero.stat2d": "lines of code in the platform",
    "hero.stat3d": "automated tests",

    "split.eyebrow": "Who's who",
    "split.title": "The tool and the human aren't the same thing",
    "split.sub": "SCI does the building. I'm personally responsible for the result, communication, and every decision.",
    "split.sciRole": "AI platform for automated development",
    "split.sciDesc": "A multi-agent system: a planner breaks the task into steps, specialized agents write code in parallel, a router picks the right model for each call, a QA agent scans for dead links and broken buttons before you ever see them.",
    "split.sciLimit": "✕ doesn't talk to clients. ✕ doesn't make decisions about your project.",
    "split.seam": "operated by",
    "split.name": "Ivan",
    "split.humanRole": "developer",
    "split.humanTagline": "Scopes the work, checks the quality, your point of contact",
    "split.humanDesc": "I built SCI and run it every day so routine work doesn't eat your time. But I personally take on every project, check it by hand before delivery, and reply to messages myself — no bots in our conversation.",
    "split.trust1": "I personally check every project before delivery",
    "split.trust2": "Direct communication, no middlemen, no scripts",
    "split.trust3": "I'm accountable for the result — not SCI, me",

    "services.eyebrow": "Services",
    "services.title": "What I do",
    "services.from": "from",
    "services.s1title": "Landing pages & sites",
    "services.s1desc": "Complete responsive site: clean code, working forms, fast loading. No page builders, no monthly fees.",
    "services.s1time": "2 days",
    "services.s2title": "Telegram bots",
    "services.s2desc": "Order intake, bookings, FAQ, admin panel, sheets and payment integrations. Full source code included.",
    "services.s2time": "2-3 days",
    "services.s3title": "AI assistants",
    "services.s3desc": "A chatbot that answers customers from your own data — prices, services, hours. Works on your site or in Telegram.",
    "services.s3time": "2-4 days",
    "services.s4title": "Bug fixes",
    "services.s4desc": "I'll find and fix a specific bug in your website or code, with an explanation of the cause. Fast, no full rebuild.",
    "services.s4time": "24 hours",

    "about.eyebrow": "About",
    "about.title": "Why work with me",
    "about.p1": "I'm Ivan, a developer. I built SCI because I got tired of eating clients' time on routine work that can be automated honestly, without cutting quality.",
    "about.p2": "The platform handles the building, I handle precise scoping and a final check on every detail. That's why a landing page takes 24-48 hours, not two weeks.",
    "about.f4": "typical landing page delivery",
    "about.f5": "typical reply time to a message",
    "about.f6": "of projects I check personally before delivery",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.sub": "Describe the task in a couple of sentences — I reply myself, within a few hours.",
    "contact.email": "Email",
    "contact.fiverrView": "Order the gig →",
    "contact.githubView": "Code & projects →",

    "footer.text": "© <span id=\"year\"></span> Web development, bots, AI integrations — built on SCI.",
  },
};

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.uk;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll(".lang-opt").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.lang === lang);
  });

  localStorage.setItem("site_lang", lang);
}
