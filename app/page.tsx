const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Supabase",
  "RLS / RBAC",
  "Vercel",
  "Cloudflare",
  "OpenAI API",
  "Claude Code",
  "Codex",
  "WhatsApp Cloud API",
];

const cases = [
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

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <nav>
          <a className="brand" href="#">DC.</a>
          <div className="navlinks">
            <a href="#work">Work</a>
            <a href="#expertise">Expertise</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">FULL STACK DEVELOPER · TECH LEAD</p>
            <h1>I build products that have to work outside the demo.</h1>
            <p className="lead">
              Sou David Chocaliye. Desenvolvo SaaS, sistemas multi-tenant,
              integrações e agentes de IA — com experiência real em produto,
              infraestrutura e operação.
            </p>
            <div className="actions">
              <a className="primary" href="#work">Ver projetos</a>
              <a className="secondary" href="https://github.com/moxi-edtech">GitHub</a>
            </div>
          </div>

          <aside className="signal">
            <span>Currently building</span>
            <strong>KLASSE + Fexa</strong>
            <p>Software, infrastructure, AI and product.</p>
          </aside>
        </div>
      </section>

      <section id="work" className="shell section">
        <div className="sectionHead">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Produtos reais, não projetos de tutorial.</h2>
        </div>
        <div className="cases">
          {cases.map((item, index) => (
            <article className="case" key={item.label}>
              <div className="caseIndex">0{index + 1}</div>
              <div>
                <p className="eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="stack">{item.stack}</div>
                <a href={item.href}>{item.cta} ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="expertise" className="shell section">
        <div className="sectionHead">
          <p className="eyebrow">EXPERTISE</p>
          <h2>Da interface à operação.</h2>
        </div>
        <div className="skillGrid">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="about" className="shell section about">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>Software com visão de produto.</h2>
        </div>
        <div className="aboutCopy">
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

      <section id="contact" className="shell contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Quer construir algo que precisa funcionar de verdade?</h2>
        <div className="actions">
          <a className="primary" href="mailto:katanhaboutjob@gmail.com">Enviar e-mail</a>
          <a className="secondary" href="https://linkedin.com/in/david-chocaliye-214429210">LinkedIn</a>
        </div>
      </section>

      <footer className="shell">
        <span>David Chocaliye</span>
        <span>Full Stack · Tech Lead · Product</span>
      </footer>
    </main>
  );
}
