import ProjectItem from "@/components/projects/project-item";
import { ProjectProps, projects } from "@/types/projects";

export default function ProjectsList() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-5 w-full">
      {projects.map((project: ProjectProps) => (
        <div
          key={project.id}
          className="w-full"
        >
          <ProjectItem
            id={project.id}
            title={project.title}
            link={project.link}
            tools={project.tools}
            tags={project.tags}
          />
        </div>
      ))}
    </div>
  );
}
