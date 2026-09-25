import type { ProjectCase } from "../../types/project";

type ProjectCardProps = {
  project: ProjectCase;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="case">
      <div className="caseIndex">0{index + 1}</div>
      <div>
        <p className="eyebrow">{project.label}</p>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <div className="stack">{project.stack}</div>
        <a href={project.href}>{project.cta} ↗</a>
      </div>
    </article>
  );
}
