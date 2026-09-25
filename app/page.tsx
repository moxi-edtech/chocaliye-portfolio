"use client";

import { useEffect, type CSSProperties } from "react";
import { heroImage } from "../data/heroImage";

const projects = [
  {
    label: "KLASSE",
    title: "SaaS escolar multi-tenant em operação",
    text: "Plataforma de gestão escolar desenvolvida e operada como produto real, atualmente utilizada por 5 escolas. Atuação como Founder & Tech Lead em arquitetura, produto, segurança, dados, deploy e evolução contínua.",
    stack: "Next.js · TypeScript · PostgreSQL · Supabase · RLS · Vercel",
    href: "https://klasse.ao",
    cta: "Ver KLASSE",
  },
  {
    label: "FEXA",
    title: "Automação comercial com IA para WhatsApp",
    text: "Produto focado em atendimento e operação comercial multiempresa, com arquitetura de isolamento por tenant, agentes, integrações e fluxos de handoff humano.",
    stack: "Node.js · PostgreSQL · Supabase · IA via API · WhatsApp",
    href: "https://fexabusiness.com",
    cta: "Ver Fexa",
  },
  {
    label: "BUSINESS EXPORT",
    title: "Arquitetura para agente, CRM e aquisição",
    text: "Monorepo estruturado para separar agente conversacional, CRM e landing, mantendo regras de domínio compartilhadas, tipagem e pipeline de dados consistente.",
    stack: "TypeScript · Turborepo · Supabase · CRM · Agent architecture",
    href: "#contact",
    cta: "Falar sobre o case",
  },
];

const skills = [
  "Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "RLS / RBAC",
  "Vercel", "Cloudflare", "OpenAI API", "Claude Code", "Codex", "WhatsApp Cloud API",
];

function delay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero shell">
        <nav className="hero-enter hero-enter-1">
          <a className="brand" href="#">DC.</a>
          <div className="navlinks">
            <a href="#work">Work</a>
            <a href="#expertise">Expertise</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow hero-enter hero-enter-2">FULL STACK DEVELOPER · TECH LEAD</p>
            <h1 className="hero-enter hero-enter-3">I build products that have to work outside the demo.</h1>
            <p className="lead hero-enter hero-enter-4">
              Sou David Chocaliye. Desenvolvo SaaS, sistemas multi-tenant,
              integrações e agentes de IA — com experiência real em produto,
              infraestrutura e operação.
            </p>
            <div className="actions hero-enter hero-enter-5">
              <a className="primary" href="#work">Ver projetos</a>
              <a className="secondary" href="https://github.com/moxi-edtech">GitHub</a>
            </div>
          </div>

          <div className="heroPortrait hero-enter hero-enter-photo">
            <img
              src={heroImage}
              alt="David Chocaliye working with a laptop"
              width="640"
              height="913"
              loading="eager"
            />
            <aside className="signal">
              <span>Currently building</span>
              <strong>KLASSE + Fexa</strong>
              <p>Software, infrastructure, AI and product.</p>
            </aside>
          </div>
        </div>
      </section>

      <section id="work" className="shell section">
        <div className="sectionHead reveal reveal-up" data-reveal>
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Produtos construídos para operação real.</h2>
        </div>

        <div className="cases">
          {projects.map((project, index) => {
            const hasLivePreview = project.href.startsWith("http");
            return (
              <article
                className="case reveal reveal-up"
                data-reveal
                style={delay(index * 110)}
                key={project.label}
              >
                <div className="caseIndex">0{index + 1}</div>
                <div className="caseContent">
                  <div className="caseCopy">
                    <p className="eyebrow">{project.label}</p>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div className="stack">{project.stack}</div>
                    <a href={project.href} target={hasLivePreview ? "_blank" : undefined} rel={hasLivePreview ? "noreferrer" : undefined}>
                      {project.cta} ↗
                    </a>
                  </div>

                  {hasLivePreview && (
                    <div className="sitePreview reveal reveal-right" data-reveal style={delay(120 + index * 90)} aria-label={`Live preview of ${project.label}`}>
                      <div className="previewChrome" aria-hidden="true">
                        <span /><span /><span />
                        <small>{project.href.replace(/^https?:\/\//, "")}</small>
                      </div>
                      <iframe
                        src={project.href}
                        title={`${project.label} website preview`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                      <a className="previewFallback" href={project.href} target="_blank" rel="noreferrer">
                        Open live site ↗
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="expertise" className="shell section">
        <div className="sectionHead reveal reveal-up" data-reveal>
          <p className="eyebrow">EXPERTISE</p>
          <h2>Da interface à operação.</h2>
        </div>
        <div className="skillGrid">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="reveal reveal-up"
              data-reveal
              style={delay(index * 45)}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="about" className="shell section about">
        <div className="reveal reveal-left" data-reveal>
          <p className="eyebrow">ABOUT</p>
          <h2>Software com visão de produto.</h2>
        </div>
        <div className="aboutCopy reveal reveal-right" data-reveal style={delay(100)}>
          <p>
            Minha base profissional também inclui infraestrutura corporativa,
            redes, Microsoft 365 e automação. Isso influencia como penso
            software: segurança, operação, observabilidade e manutenção fazem
            parte do produto desde o início.
          </p>
          <p>
            Além de engenharia, trabalho com design gráfico, identidade visual,
            UI/UX, comunicação de produto, marketing e treinamento comercial.
          </p>
        </div>
      </section>

      <section id="contact" className="shell contact reveal reveal-up" data-reveal>
        <p className="eyebrow">CONTACT</p>
        <h2>Quer construir algo que precisa funcionar de verdade?</h2>
        <div className="actions">
          <a className="primary" href="mailto:katanhaboutjob@gmail.com">Enviar e-mail</a>
          <a className="secondary" href="https://linkedin.com/in/david-chocaliye-214429210">LinkedIn</a>
        </div>
      </section>

      <footer className="shell reveal reveal-up" data-reveal>
        <span>David Chocaliye</span>
        <span>Full Stack · Tech Lead · Product</span>
      </footer>
    </main>
  );
}
