import { ActionIcon } from "./icons"

export default function ProjectCard({ project, onOpenReadme, onOpenImage }) {
  const isExternalLink = /^https?:\/\//i.test(project.deploymentUrl)
  const cardSummary = project.cardSummary ?? project.readme.summary

  return (
    <article className="project-brief">
      <div className="project-brief-head">
        <span className="project-pill">{project.name}</span>
      </div>
      <p className="project-date">
        {project.period} ({project.team})
      </p>
      <hr className="project-divider" />
      <h4 className="project-headline">{project.category}</h4>
      <ul className="project-bullets">
        {cardSummary.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {isExternalLink ? (
        <a
          className="project-linkline"
          href={project.deploymentUrl}
          target="_blank"
          rel="noreferrer"
        >
          {project.deploymentUrl}
        </a>
      ) : (
        <div className="project-linkline">{project.deploymentUrl}</div>
      )}
      <div className="project-tech-box">{project.stack.join(", ")}</div>
      <div className="project-actions">
        <button className="project-btn" type="button" onClick={() => onOpenReadme(project)}>
          <ActionIcon type="readme" />
          README
        </button>
        {project.images.length > 0 && (
          <button
            className="project-btn project-btn-ghost"
            type="button"
            onClick={() => onOpenImage(project)}
          >
            <ActionIcon type="image" />
            Image
          </button>
        )}
        {project.githubUrl && (
          <a
            className="project-btn project-btn-ghost"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ActionIcon type="github" />
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}
