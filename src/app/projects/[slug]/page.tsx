"use client";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ProjectsShow from "@/components/projects/ProjectsShow";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const projects = useSelector((state: any) => state.projects.projects);

  if (!projects || !slug) return null;

  const project = projects.find((p: any) => p.slug === slug);
  if (!project) return <div>Project not found</div>;

  return <ProjectsShow project={project} />;
}
