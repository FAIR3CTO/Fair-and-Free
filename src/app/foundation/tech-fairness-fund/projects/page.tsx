"use client";
import useSWR from "swr";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { BackgroundBlur } from "@/shared/background-blur";
import { titleStyle } from "@/shared/styles";
import { ProjectCard } from "../project-card";
import { fetcher } from "@/shared/fetcher";
import { Skeleton } from "@/components/ui/skeleton";

import type { ProjectResponse } from "@/shared/types";

export default function ProjectPage() {
  const [count, setCounet] = useState(12);
  const { data, isLoading } = useSWR<ProjectResponse>(
    "/projects/getAllProjects",
    fetcher
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center">
        <div className="2xl:w-[1440px] w-full flex gap-5">
          <div className="w-[290px] h-[307px] p-6">
            <Skeleton className="w-[240px] h-[134px]" />
            <Skeleton className="w-[200px] h-5 mt-4" />
            <Skeleton className="w-[240px] h-5 mt-4" />
            <Skeleton className="w-[100px] h-5 mt-10" />
          </div>
          <div className="w-[290px] h-[307px] p-6">
            <Skeleton className="w-[240px] h-[134px]" />
            <Skeleton className="w-[200px] h-5 mt-4" />
            <Skeleton className="w-[240px] h-5 mt-4" />
            <Skeleton className="w-[100px] h-5 mt-10" />
          </div>
          <div className="w-[290px] h-[307px] p-6">
            <Skeleton className="w-[240px] h-[134px]" />
            <Skeleton className="w-[200px] h-5 mt-4" />
            <Skeleton className="w-[240px] h-5 mt-4" />
            <Skeleton className="w-[100px] h-5 mt-10" />
          </div>
        </div>
      </div>
    );
  }

  const { data: projectList = [] } = data || {};

  return (
    <div className="flex flex-col items-center relative overflow-x-hidden min-h-[700px]">
      <BackgroundBlur
        top={-525}
        right={-115}
        style={{ top: "-525px", right: "-115px" }}
      />
      <div className={"2xl:w-[1440px] w-full"}>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-2xl mt-16")}>
          Projects
        </h1>
        <div className="flex gap-6 flex-wrap mt-8">
          {projectList.slice(0, count).map((project) => (
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
        <div className="flex flex-col items-center justify-center mt-8 text-center">
          <span
            className={cn(
              titleStyle({ font: "kodchasan" }),
              "flex flex-col items-center cursor-pointer text-[20px]"
            )}
          >
            View More <ChevronDown className="mt-1" size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}
