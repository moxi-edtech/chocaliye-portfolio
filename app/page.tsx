"use client";

import { useEffect } from "react";
import { heroImage } from "../data/heroImage";

const projects = [
  {
    label: "01 / KLASSE",
    title: "School infrastructure, rebuilt as software.",
    text: "A multi-tenant school management platform designed for real operational use: enrollment, finance, academic workflows, AI-assisted queries and secure tenant isolation.",
    stack: "Next.js · TypeScript · PostgreSQL · Supabase · RLS · Vercel",
    href: "https://klasse.ao",
    accent: "Education SaaS",
  },
  {
    label: "02 / FEXA",
    title: "AI sales operations inside WhatsApp.",
    text: "A commercial operations platform for qualification, customer service, catalog, orders, CRM, human handoff and follow-up — built around multi-company isolation.",
    stack: "Node.js · PostgreSQL · Supabase · AI APIs · WhatsApp Cloud API",
    href: "https://fexabusiness.com",
    accent: "AI Commerce",
  },
];

const skills = [
  ["PRODUCT ENGINEERING", "Next.js · React · TypeScript · Product architecture"],
  ["DATA & SECURITY", "PostgreSQL · Supabase · RLS · RBAC · Multi-tenancy"],
  ["AI & AUTOMATION", "OpenAI API · Agents · Workflow automation · WhatsApp"],
  ["INFRASTRUCTURE", "Vercel · Cloudflare · Microsoft 365 · Networking"],
];

export default function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="topbar shell">
        <a className="brand" href="#">DC.</a>
        <nav className="navlinks">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="heroStatement">
          <p className="eyebrow hero-enter hero-enter-1">FULL STACK DEVELOPER · PRODUCT ENGINEER</p>
          <h1 className="hero-enter hero-enter-2">
            I build software that survives
            <span> outside the demo.</span>
          </h1>
          <div className="heroBottom hero-enter hero-enter-3">
            <p>
              SaaS, multi-tenant systems, infrastructure and AI products —
              engineered for actual operations, not just presentation.
            </p>
            <a href="#work">Explore selected work ↓</a>
          </div>
        </div>

        <div className="heroVisual hero-enter hero-enter-photo">
          <img src={heroImage} alt="David Chocaliye working with a laptop" />
          <div className="heroCaption">
            <span>David Chocaliye</span>
            <span>São Paulo · Brazil</span>
          </div>
        </div>
      </section>

      <section className="manifesto shell reveal reveal-up" data-reveal>
        <p className="manifestoIndex">00</p>
        <p className="manifestoText">
          AI can accelerate the build.
          <span> Production still needs engineering.</span>
        </p>
      </section>

      <section id="work" className="work">
        <div className="shell workIntro reveal reveal-up" data-reveal>
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Not cards. Products.</h2>
        </div>

        {projects.map((project, index) => (
          <article className={`projectStory ${index % 2 ? "projectReverse" : ""}`} key={project.label}>
            <div className="shell projectGrid">
              <div className="projectMeta reveal reveal-left" data-reveal>
                <p className="projectNumber">{project.label}</p>
                <p className="projectAccent">{project.accent}</p>
                <h3>{project.title}</h3>
                <p className="projectDescription">{project.text}</p>
                <p className="projectStack">{project.stack}</p>
                <a className="projectLink" href={project.href} target="_blank" rel="noreferrer">
                  Open live product ↗
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
                  View site ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="statementBand">
        <div className="shell statementTrack">
          <span>AUTH</span>
          <b>→</b>
          <span>RLS</span>
          <b>→</b>
          <span>TENANT ISOLATION</span>
          <b>→</b>
          <span>OBSERVABILITY</span>
          <b>→</b>
          <span>PRODUCTION</span>
        </div>
      </section>

      <section id="expertise" className="shell expertiseSection">
        <div className="expertiseLead reveal reveal-up" data-reveal>
          <p className="eyebrow">EXPERTISE</p>
          <h2>From interface to infrastructure.</h2>
        </div>

        <div className="expertiseGrid">
          {skills.map(([title, text], index) => (
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
            <p className="eyebrow">ABOUT</p>
            <h2>I think about software as an operating system for the business.</h2>
          </div>

          <div className="aboutFlow reveal reveal-right" data-reveal>
            <p className="aboutBig">
              Product, infrastructure, security and operations are not separate concerns.
            </p>
            <p>
              My background across software and corporate infrastructure shapes how I build:
              authentication, observability, data boundaries, deployment and maintenance are part
              of the product from day one.
            </p>
            <p>
              I also work across product communication, interface decisions and go-to-market
              execution — because software only matters when people can understand, adopt and operate it.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contactStage">
        <div className="shell contactInner reveal reveal-up" data-reveal>
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>
            Have something
            <span> worth building?</span>
          </h2>
          <div className="contactLinks">
            <a href="mailto:katanhaboutjob@gmail.com">Email ↗</a>
            <a href="https://linkedin.com/in/david-chocaliye-214429210" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/moxi-edtech" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer className="shell footer">
        <span>David Chocaliye © 2026</span>
        <span>Full Stack · Product Engineering · AI</span>
      </footer>
    </main>
  );
}
