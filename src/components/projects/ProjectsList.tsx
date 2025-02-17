import { createClient } from "@/prismicio";
import Link from "next/link";
import { cardClasses, slugNames } from "@/utils/config";

type Project = {
  id: string;
  tags: string[];
  data: {
    title: [{ text: string }];
    type: { slug: string };
    year: string;
    abbreviation: string;
  };
};

export default async function ProjectsList() {
  const client = createClient();
  const projects = await client.getAllByType("project", {
    orderings: [{ field: "my.project.year", direction: "desc" }],
  });

  return (
    <section className="projects p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project: Project) => {
          const slug = project.tags[0];

          return (
            <article
              className={cardClasses}
              key={`${slug}-${project.id}`}
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
                href={`/projects/${slug}`}
                className="overlay text-blue-500 underline mt-2 block"
              >
                Click for more details
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
