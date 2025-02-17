import { useSelector } from "react-redux";
import Link from "next/link";
import { cardClasses, slugNames } from "@/utils/config";

type Project = {
  slug: string;
  id: number;
  data: {
    title: [{ text: string }];
    type: { slug: string };
    year: string;
    abbreviation: string;
  };
};

export default function ProjectsList() {
  const projects = useSelector((state: any): Project[] => state.projects);

  if (!projects) return null;

  return (
    <section className="projects p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project: Project) => (
          <article
            className={cardClasses}
            key={`${project.slug}-${project.id}`}
          >
            <img
              src={`https://s3-us-west-1.amazonaws.com/webdevdude/images/${project.data.abbreviation}/thumb.jpg`}
              alt={`${project.data.title[0].text} project`}
              className="w-full h-auto"
            />
            <div className="card-about wrapper mt-4">
              <h3 className="text-lg font-bold">{project.data.title[0].text}</h3>
              <div className="site-meta text-gray-500">
                <span>{slugNames(project.data.type.slug)}</span>
                <span className="ml-2">{project.data.year}</span>
              </div>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="overlay text-blue-500 underline mt-2 block"
            >
              Click for more details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
