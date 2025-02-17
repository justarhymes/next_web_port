import { cardClasses, slugNames } from "@/utils/config";

type ProjectsShowProps = {
  project: {
    slug: string;
    data: {
      title: { text: string }[];
      type: { slug: string };
      year: string;
      abbreviation: string;
      description?: string;
      project_skills: { id: string; slug: string }[];
    };
  };
};

export default function ProjectsShow({ project }: ProjectsShowProps) {
  return (
    <div className="project p-4">
      <h2 className="text-2xl font-bold">{project.data.title[0].text}</h2>
      <div className="site-meta text-gray-500">
        <span>{slugNames(project.data.type.slug)}</span>
        <span className="ml-2">{project.data.year}</span>
      </div>
      <p className="mt-4">{project.data.description}</p>
      <ul className="skills mt-4 space-y-2">
        {project.data.project_skills.map((skill) => (
          <li
            key={skill.id}
            className="bg-gray-200 rounded-md px-4 py-2 inline-block"
          >
            {slugNames(skill.slug)}
          </li>
        ))}
      </ul>
    </div>
  );
}