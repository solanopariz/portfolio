/* ============================================================
   Portfólio · interações
   ============================================================ */

/* ---------- 1. Traduções PT / EN ---------- */
const translations = {
  pt: {
    meta_desc: "Portfólio de Solano — desenvolvedor de software. Projetos, habilidades e contato.",
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_projects: "Projetos",
    nav_contact: "Contato",

    hero_status: "Disponível para novas oportunidades",
    hero_hi: "Olá, eu sou",
    hero_role: "Desenvolvedor de Software",
    hero_pitch: "Transformo ideias em código. Apaixonado por construir aplicações web limpas, funcionais e bem pensadas.",
    hero_btn_github: "Ver GitHub",
    hero_btn_cv: "Baixar CV",
    hero_btn_contact: "Contato",
    hero_scroll: "role",

    about_title: "Sobre mim",
    about_p1: "Sou desenvolvedor em busca da minha primeira oportunidade na área de TI. Gosto de resolver problemas, aprender tecnologias novas e escrever código que outras pessoas consigam entender.",
    about_p2: "Este portfólio reúne os projetos que venho construindo enquanto evoluo como programador. Fique à vontade para explorar o código no meu GitHub.",
    about_fact1_k: "Base",
    about_fact1_v: "Brasil 🇧🇷",
    about_fact2_k: "Foco",
    about_fact2_v: "Desenvolvimento Web",
    about_fact3_k: "Status",
    about_fact3_v: "Aberto a propostas",

    skills_title: "Habilidades",
    skill_soft1: "Trabalho em equipe",
    skill_soft2: "Resolução de problemas",
    skill_soft3: "Aprendizado rápido",

    projects_title: "Projetos",
    proj1_desc: "Descrição curta do projeto: que problema ele resolve e o que você aprendeu construindo.",
    proj2_desc: "Descrição curta do projeto: que problema ele resolve e o que você aprendeu construindo.",
    proj3_desc: "Descrição curta do projeto: que problema ele resolve e o que você aprendeu construindo.",
    projects_all: "Ver todos no GitHub",

    contact_title: "Vamos conversar?",
    contact_lead: "Estou em busca de oportunidades. Se meu perfil fez sentido para você, mando um oi de volta rapidinho.",
    contact_btn: "Enviar e-mail",

    footer_made: "Feito com",
    footer_by: "por Solano"
  },

  en: {
    meta_desc: "Solano's portfolio — software developer. Projects, skills and contact.",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_status: "Available for new opportunities",
    hero_hi: "Hi, I'm",
    hero_role: "Software Developer",
    hero_pitch: "I turn ideas into code. Passionate about building clean, functional and well-thought-out web applications.",
    hero_btn_github: "View GitHub",
    hero_btn_cv: "Download CV",
    hero_btn_contact: "Contact",
    hero_scroll: "scroll",

    about_title: "About me",
    about_p1: "I'm a developer looking for my first opportunity in tech. I enjoy solving problems, learning new technologies and writing code that other people can understand.",
    about_p2: "This portfolio gathers the projects I've been building as I grow as a programmer. Feel free to explore the code on my GitHub.",
    about_fact1_k: "Based in",
    about_fact1_v: "Brazil 🇧🇷",
    about_fact2_k: "Focus",
    about_fact2_v: "Web Development",
    about_fact3_k: "Status",
    about_fact3_v: "Open to offers",

    skills_title: "Skills",
    skill_soft1: "Teamwork",
    skill_soft2: "Problem solving",
    skill_soft3: "Fast learner",

    projects_title: "Projects",
    proj1_desc: "Short project description: what problem it solves and what you learned building it.",
    proj2_desc: "Short project description: what problem it solves and what you learned building it.",
    proj3_desc: "Short project description: what problem it solves and what you learned building it.",
    projects_all: "See all on GitHub",

    contact_title: "Let's talk?",
    contact_lead: "I'm looking for opportunities. If my profile made sense to you, I'll get back to you quickly.",
    contact_btn: "Send e-mail",

    footer_made: "Made with",
    footer_by: "by Solano"
  }
};

const langToggle = document.getElementById("langToggle");
const langOpts = document.querySelectorAll(".lang-toggle__opt");

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!(key in dict)) return;
    if (el.tagName === "META") {
      el.setAttribute("content", dict[key]);
    } else {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  langOpts.forEach((o) => o.classList.toggle("active", o.dataset.lang === lang));
  localStorage.setItem("lang", lang);
}

// idioma inicial: salvo > navegador > pt
const saved = localStorage.getItem("lang");
const initial = saved || (navigator.language.startsWith("pt") ? "pt" : "en");
setLanguage(initial);

langToggle.addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "pt";
  setLanguage(current === "pt" ? "en" : "pt");
});

/* ---------- 2. Menu mobile ---------- */
const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

/* ---------- 3. Scroll: navbar, barra de progresso e parallax ---------- */
const nav = document.querySelector(".nav");
const progress = document.querySelector(".scroll-progress");
const parallaxEls = document.querySelectorAll("[data-parallax]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let ticking = false;

function onScrollFrame() {
  const y = window.scrollY;

  // navbar
  nav.classList.toggle("scrolled", y > 20);

  // barra de progresso
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (y / max) * 100 : 0;
  progress.style.width = pct + "%";

  // parallax (desligado em telas estreitas e com "reduzir movimento")
  if (!reduceMotion && window.innerWidth > 720) {
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.dataset.speed) || 0;
      el.style.setProperty("--py", (y * speed).toFixed(1) + "px");
    });
  }

  ticking = false;
}

function requestScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(onScrollFrame);
  }
}

onScrollFrame();
window.addEventListener("scroll", requestScroll, { passive: true });
window.addEventListener("resize", requestScroll, { passive: true });

/* ---------- 4. Animações de entrada (reveal) ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // re-anima toda vez que o elemento entra/sai da viewport
      entry.target.classList.toggle("in", entry.isIntersecting);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- 5. Link ativo conforme a seção visível ---------- */
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav__links a");

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + id)
        );
      }
    });
  },
  { threshold: 0.5 }
);
sections.forEach((s) => spyObserver.observe(s));

/* ---------- 6. Ano no rodapé ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
