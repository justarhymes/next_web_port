import { createClient } from "@/prismicio";
import ProjectsShow from "@/components/projects/ProjectsShow";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = createClient();
  const response = await client.getByTags([params.slug], { pageSize: 1 });

  const project = response.results[0];

  if (!project) {
    return <div>Project not found.</div>;
  }

  return <ProjectsShow project={project} />;
}
