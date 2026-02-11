import ProjectCard from "./ProjectCard"

export default function ProjectsSection({
  sortedProjects,
  onOpenReadme,
  onOpenImage,
}) {
  return (
    <section id="projects" className="section section-projects reveal">
      <div className="section-head">
        <p className="section-eyebrow">Work</p>
        <h3 className="section-title">PROJECTS</h3>
      </div>
      <div className="project-brief-list">
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenReadme={onOpenReadme}
            onOpenImage={onOpenImage}
          />
        ))}
      </div>
    </section>
  )
}
