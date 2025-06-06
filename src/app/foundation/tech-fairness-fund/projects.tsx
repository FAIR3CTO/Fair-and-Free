"use client";
import {} from "react";
import useSWR from "swr";

import { fetcher } from "@/shared/fetcher";
import { ProjectCard } from "./project-card";

import type { ProjectResponse } from "@/shared/types";

export function Projects() {
  const { data, error, isLoading } = useSWR<ProjectResponse>(
    "/projects/getSelectedProjects",
    fetcher
  );

  if (error) return <div>Error loading projects</div>;
  if (isLoading) return <div>Loading...</div>;

  const { data: projectList = [] } = data || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.projectName}
          oneLiner={project.oneLiner}
          githubLink={project.githubLink}
          twitterLink={project.twitterLink}
          telegramLink={project.telegramLink}
        />
      ))}
    </div>
  );
}
