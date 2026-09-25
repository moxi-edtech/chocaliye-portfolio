"use client";

import { useEffect, useState } from "react";

type Locale = "pt" | "en";

const copy = {
  pt: {
    nav: { work: "Projetos", expertise: "Especialidades", about: "Sobre", contact: "Contato" },
    hero: {
      eyebrow: "DESENVOLVEDOR FULL STACK · PRODUCT ENGINEER",
      title: "Construo software para",
      titleAccent: " operação real.",
      body: "SaaS, sistemas multi-tenant, infraestrutura e produtos com IA — pensados para funcionar no dia a dia, não apenas numa demonstração.",
      cta: "Ver projetos",
      location: "São Paulo · Brasil",
    },
    manifesto: {
      first: "IA acelera a construção.",
      second: " Produção ainda exige engenharia.",
    },
    work: {
      eyebrow: "PROJETOS",
      title: "Produtos em operação.",
      open: "Ver projeto",
      view: "Ver site",
      problem: "PROBLEMA",
      build: "CONSTRUÇÃO",
      architecture: "ARQUITETURA",
    },
    expertise: {
      eyebrow: "ESPECIALIDADES",
      title: "Da interface à infraestrutura.",
    },
    about: {
      eyebrow: "SOBRE",
      title: "Penso software como parte da operação do negócio.",
      big: "Produto, infraestrutura, segurança e operação não são assuntos separados.",
      p1: "Minha experiência entre software e infraestrutura corporativa influencia como construo: autenticação, observabilidade, limites de dados, deploy e manutenção fazem parte do produto desde o início.",
      p2: "Também atuo em decisões de interface, comunicação de produto e execução de go-to-market — porque software só gera valor quando as pessoas conseguem entender, adotar e operar.",
    },
    contact: {
      eyebrow: "CONTATO",
      first: "Tem algo",
      second: " que vale a pena construir?",
      email: "E-mail",
    },
    footer: "Full Stack · Product Engineering · IA",
  },
  en: {
    nav: { work: "Work", expertise: "Expertise", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "FULL STACK DEVELOPER · PRODUCT ENGINEER",
      title: "I build software for",
      titleAccent: " real operations.",
      body: "SaaS, multi-tenant systems, infrastructure and AI products — designed to work in day-to-day operations, not just in a demo.",
      cta: "Explore selected work",
      location: "São Paulo · Brazil",
    },
    manifesto: {
      first: "AI accelerates the build.",
      second: " Production still needs engineering.",
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "Products in operation.",
      open: "View project",
      view: "View site",
      problem: "PROBLEM",
      build: "BUILD",
      architecture: "ARCHITECTURE",
    },
    expertise: {
      eyebrow: "EXPERTISE",
      title: "From interface to infrastructure.",
    },
    about: {
      eyebrow: "ABOUT",
      title: "I think about software as part of business operations.",
      big: "Product, infrastructure, security and operations are not separate concerns.",
      p1: "My background across software and corporate infrastructure shapes how I build: authentication, observability, data boundaries, deployment and maintenance are part of the product from day one.",
      p2: "I also work across interface decisions, product communication and go-to-market execution — because software only creates value when people can understand, adopt and operate it.",
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      first: "Have something",
      second: " worth building?",
      email: "Email",
    },
    footer: "Full Stack · Product Engineering · AI",
  },
} as const;

const projects = {
  pt: [
    {
      label: "01 / KLASSE",
      title: "Gestão escolar construída para a realidade das escolas angolanas.",
      text: "Plataforma escolar multi-tenant para matrícula, finanças, operação acadêmica, consultas com IA e isolamento seguro entre instituições.",
      problem: "Processos acadêmicos e financeiros dispersos entre papel, WhatsApp e rotinas manuais, com pouca visibilidade operacional.",
      build: "Matrícula, propinas, notas, portais por perfil e consultas operacionais com IA dentro de uma única plataforma.",
      architecture: "Multi-tenant · Supabase Auth · PostgreSQL · RLS por escola · Next.js · Vercel",
      stack: "Next.js · TypeScript · PostgreSQL · Supabase · RLS · Vercel",
      href: "https://klasse.ao",
      accent: "SaaS para educação",
    },
    {
      label: "02 / FEXA",
      title: "Operação comercial com IA dentro do WhatsApp.",
      text: "Plataforma para qualificação, atendimento, catálogo, pedidos, CRM, handoff humano e follow-up, com arquitetura multiempresa.",
      problem: "Atendimento comercial no WhatsApp exige triagem constante, contexto do cliente e continuidade quando a conversa passa para uma pessoa.",
      build: "Qualificação automática, catálogo, registro de pedidos, CRM, handoff humano, follow-ups e relatórios no mesmo fluxo comercial.",
      architecture: "WhatsApp Cloud API · IA · PostgreSQL · Supabase · isolamento multiempresa",
      stack: "Node.js · PostgreSQL · Supabase · APIs de IA · WhatsApp Cloud API",
      href: "https://fexabusiness.com",
      accent: "IA para vendas",
    },
  ],
  en: [
    {
      label: "01 / KLASSE",
      title: "School management built for the reality of Angolan schools.",
      text: "A multi-tenant school platform for enrollment, finance, academic operations, AI-assisted queries and secure tenant isolation.",
      problem: "Academic and financial workflows spread across paper, WhatsApp and manual routines, with limited operational visibility.",
      build: "Enrollment, tuition, grades, role-based portals and AI-assisted operational queries inside one platform.",
      architecture: "Multi-tenant · Supabase Auth · PostgreSQL · school-level RLS · Next.js · Vercel",
      stack: "Next.js · TypeScript · PostgreSQL · Supabase · RLS · Vercel",
      href: "https://klasse.ao",
      accent: "Education SaaS",
    },
    {
      label: "02 / FEXA",
      title: "AI-assisted commercial operations inside WhatsApp.",
      text: "A platform for qualification, customer service, catalog, orders, CRM, human handoff and follow-up, built around multi-company isolation.",
      problem: "WhatsApp sales operations require constant triage, customer context and continuity when a conversation moves to a human.",
      build: "Automated qualification, catalog, order capture, CRM, human handoff, follow-ups and reporting in the same commercial flow.",
      architecture: "WhatsApp Cloud API · AI · PostgreSQL · Supabase · multi-company isolation",
      stack: "Node.js · PostgreSQL · Supabase · AI APIs · WhatsApp Cloud API",
      href: "https://fexabusiness.com",
      accent: "AI Commerce",
    },
  ],
} as const;

const skills = {
  pt: [
    ["PRODUCT ENGINEERING", "Next.js · React · TypeScript · Arquitetura de produto"],
    ["DADOS & SEGURANÇA", "PostgreSQL · Supabase · RLS · RBAC · Multi-tenancy"],
    ["IA & AUTOMAÇÃO", "OpenAI API · Agentes · Automação de fluxos · WhatsApp"],
    ["INFRAESTRUTURA", "Vercel · Cloudflare · Microsoft 365 · Redes"],
  ],
  en: [
    ["PRODUCT ENGINEERING", "Next.js · React · TypeScript · Product architecture"],
    ["DATA & SECURITY", "PostgreSQL · Supabase · RLS · RBAC · Multi-tenancy"],
    ["AI & AUTOMATION", "OpenAI API · Agents · Workflow automation · WhatsApp"],
    ["INFRASTRUCTURE", "Vercel · Cloudflare · Microsoft 365 · Networking"],
  ],
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt");
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      }),
      { threshold: 0.16, rootMargin: "-6% 0px -10% 0px" }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="topbar shell">
        <a className="brand" href="#">DC.</a>

        <div className="topbarRight">
          <nav className="navlinks">
            <a href="#work">{t.nav.work}</a>
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="languageSwitch" aria-label="Selecionar idioma">
            <button
              type="button"
              className={locale === "pt" ? "is-active" : ""}
              onClick={() => setLocale("pt")}
              aria-pressed={locale === "pt"}
            >
              PT
            </button>
            <span>/</span>
            <button
              type="button"
              className={locale === "en" ? "is-active" : ""}
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="hero shell">
        <div className="heroStatement">
          <p className="eyebrow hero-enter hero-enter-1">{t.hero.eyebrow}</p>
          <h1 className="hero-enter hero-enter-2">
            {t.hero.title}
            <span>{t.hero.titleAccent}</span>
          </h1>
          <div className="heroBottom hero-enter hero-enter-3">
            <p>{t.hero.body}</p>
            <a href="#work">{t.hero.cta}</a>
          </div>
        </div>

        <div className="heroVisual hero-enter hero-enter-photo">
          <img src="/david-hero-chair.webp" alt="David Chocaliye com um laptop" />
          <div className="heroCaption">
            <span>David Chocaliye</span>
            <span>{t.hero.location}</span>
          </div>
        </div>
      </section>

      <section className="manifesto shell reveal reveal-up" data-reveal>
        <p className="manifestoIndex">00</p>
        <p className="manifestoText">
          {t.manifesto.first}
          <span>{t.manifesto.second}</span>
        </p>
      </section>

      <section id="work" className="work">
        <div className="shell workIntro reveal reveal-up" data-reveal>
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2>{t.work.title}</h2>
        </div>

        {projects[locale].map((project, index) => (
          <article className={`projectStory ${index % 2 ? "projectReverse" : ""}`} key={project.label}>
            <div className="shell projectGrid">
              <div className="projectMeta reveal reveal-left" data-reveal>
                <p className="projectNumber">{project.label}</p>
                <p className="projectAccent">{project.accent}</p>
                <h3>{project.title}</h3>
                <p className="projectDescription">{project.text}</p>

                <div className="projectFacts">
                  <div className="projectFact">
                    <span>{t.work.problem}</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="projectFact">
                    <span>{t.work.build}</span>
                    <p>{project.build}</p>
                  </div>
                  <div className="projectFact">
                    <span>{t.work.architecture}</span>
                    <p>{project.architecture}</p>
                  </div>
                </div>

                <p className="projectStack">{project.stack}</p>
                <a className="projectLink" href={project.href} target="_blank" rel="noreferrer">
                  {t.work.open}
                </a>
              </div>

              <div className="projectCanvas reveal reveal-right" data-reveal>
                <div className="browserBar">
                  <div><i /><i /><i /></div>
                  <span>{project.href.replace(/^https?:\/\//, "")}</span>
                </div>
                <iframe
                  src={project.href}
                  title={`${project.accent} live preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <a className="canvasFallback" href={project.href} target="_blank" rel="noreferrer">
                  {t.work.view}
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="statementBand" aria-label="Engineering principles">
        <div className="statementViewport">
          <div className="statementTrack">
            {[0, 1].map(group => (
              <div className="statementGroup" aria-hidden={group === 1} key={group}>
                <span>AUTH</span>
                <i />
                <span>RLS</span>
                <i />
                <span>TENANT ISOLATION</span>
                <i />
                <span>OBSERVABILITY</span>
                <i />
                <span>PRODUCTION</span>
                <i />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="shell expertiseSection">
        <div className="expertiseLead reveal reveal-up" data-reveal>
          <p className="eyebrow">{t.expertise.eyebrow}</p>
          <h2>{t.expertise.title}</h2>
        </div>

        <div className="expertiseGrid">
          {skills[locale].map(([title, text], index) => (
            <article className="expertiseItem reveal reveal-up" data-reveal key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="aboutEditorial">
        <div className="shell aboutGrid">
          <div className="aboutSticky reveal reveal-left" data-reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>

          <div className="aboutFlow reveal reveal-right" data-reveal>
            <p className="aboutBig">{t.about.big}</p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contactStage">
        <div className="shell contactInner reveal reveal-up" data-reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>
            {t.contact.first}
            <span>{t.contact.second}</span>
          </h2>
          <div className="contactLinks">
            <a href="mailto:katanhaboutjob@gmail.com">{t.contact.email}</a>
            <a href="https://wa.me/5519981682877" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://linkedin.com/in/david-chocaliye-214429210" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/moxi-edtech" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.instagram.com/katanhadavid" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.threads.com/@katanhadavid" target="_blank" rel="noreferrer">Threads</a>
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="shell footerGrid">
          <div className="footerIntro">
            <a className="footerBrand" href="#">David Chocaliye</a>
            <p>
              {locale === "pt"
                ? "Desenvolvimento de produtos digitais, SaaS, infraestrutura e automação com IA."
                : "Digital products, SaaS, infrastructure and AI automation."}
            </p>
          </div>

          <div className="footerColumn">
            <span className="footerLabel">{locale === "pt" ? "NAVEGAÇÃO" : "NAVIGATION"}</span>
            <a href="#work">{t.nav.work}</a>
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>

          <div className="footerColumn">
            <span className="footerLabel">{locale === "pt" ? "CONTATO" : "CONTACT"}</span>
            <a href="mailto:katanhaboutjob@gmail.com">katanhaboutjob@gmail.com</a>
            <a href="https://wa.me/5519981682877" target="_blank" rel="noreferrer">+55 19 98168-2877</a>
            <a href="https://linkedin.com/in/david-chocaliye-214429210" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/moxi-edtech" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.instagram.com/katanhadavid" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.threads.com/@katanhadavid" target="_blank" rel="noreferrer">Threads</a>
          </div>

          <div className="footerColumn footerMeta">
            <span className="footerLabel">{locale === "pt" ? "BASE" : "BASED IN"}</span>
            <span>São Paulo · Brasil</span>
            <span>{t.footer}</span>
          </div>
        </div>

        <div className="shell footerBottom">
          <span>© 2026 David Chocaliye</span>
          <a href="#">Voltar ao topo</a>
        </div>
      </footer>
    </main>
  );
}
