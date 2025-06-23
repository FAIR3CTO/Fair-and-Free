"use client";
import { ReactNode } from "react";
import useSWR from "swr";
import Link from "next/link";
import { ContactLink } from "@/shared/contact-link";

import { cn } from "@/lib/utils";
import { titleStyle, normalTextStyle } from "@/shared/styles";
import { Project } from "@/shared/types";
import { fetcher } from "@/shared/fetcher";

type ProjectResponse = {
  code: number;
  data: Project;
  message: string;
  success: boolean;
};

const TitleIcon = () => {
  return (
    <div
      style={{
        background: "linear-gradient(87.75deg, #9448FC 9.29%, #19FB9B 98.11%)",
      }}
      className={"w-[18px] h-[18px] rounded-full mr-3"}
    />
  );
};

const ContentBlock = ({
  title,
  value,
  richText = false,
}: {
  title: string;
  value: ReactNode | string;
  richText?: boolean;
}) => {
  return (
    <div className="ml-10 mt-5">
      <h2 className={cn(titleStyle({ font: "Inter" }), "text-[15px]")}>
        {title}:
      </h2>
      {richText && typeof value === "string" ? (
        <div
          className={cn(
            "mt-2",
            "[&>h1]:text-[18px] [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:mt-6 [&>h1]:leading-tight",
            "[&>h2]:text-[16px] [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-5",
            "[&>h3]:text-[15px] [&>h3]:font-medium [&>h3]:mb-2 [&>h3]:mt-4",
            "[&>p]:mb-4 [&>p]:leading-relaxed",
            "[&>ul]:mb-4 [&>ul]:pl-4 [&>ul]:list-disc",
            "[&>ol]:mb-4 [&>ol]:pl-4 [&>ol]:list-decimal",
            "[&>li]:mb-1",
            "[&>blockquote]:border-l-4 [&>blockquote]:border-purple-400 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-4",
            "[&>img]:w-full [&>img]:h-auto [&>img]:mb-4 [&>img]:rounded",
            "[&>a]:text-purple-600 [&>a]:underline",
            "break-words"
          )}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      ) : (
        <div className={normalTextStyle()}>{value}</div>
      )}
    </div>
  );
};

export function ProjectContent({ projectId }: { projectId: string }) {
  const { data, error, isLoading } = useSWR<ProjectResponse>(
    `/projects/getProjectById/${projectId}`,
    fetcher
  );

  if (error) return <div>Error loading project details</div>;
  if (isLoading) return <div />;

  const { data: project } = data || {};
  if (!project) {
    return (
      <div className="h-[60vh] flex flex-col items-center mt-20">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }
  const { projectName, telegramLink, githubLink, twitterLink } = project;

  return (
    <>
      <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-2xl mt-24")}>
        {projectName}
      </h1>
      <ContactLink
        className={"mt-8"}
        Xlink={twitterLink}
        githubLink={githubLink}
        telegramLink={telegramLink}
      />
      <div className="2xl:w-[1440px] w-full">
        <div className="w-full min-h-[500px] mt-20 px-12 pt-14 rounded-[10px] bg-[var(--content-bg-color)] border-1 border-[var(--content-border-color)]">
          <div className="flex items-center">
            <TitleIcon />
            <h1
              className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}
            >
              Project Overview
            </h1>
          </div>
          <ContentBlock title={"Name"} value={projectName} />
          <ContentBlock title={"One-Liner"} value={project.oneLiner} />
          <ContentBlock
            title={"Project Description"}
            value={project.rawContent}
            richText
          />
          <ContentBlock title={"Current Stage"} value={project.stage} />
          <ContentBlock title={"MileStone"} value={project.mileStone} />
          <ContentBlock
            title={"RoadMap with timelines"}
            value={project.roadMap}
          />
          <ContentBlock
            title={"Reason for Applying"}
            value={project.applyReason}
          />
          <div className="flex items-center mt-14">
            <TitleIcon />
            <h1
              className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}
            >
              Impact & Outcomes
            </h1>
          </div>
          <ContentBlock title={"Social Value"} value={project.socialValue} />
          <ContentBlock title={"Use of Funds"} value={project.fundsUseDesc} />
          <div className="flex items-center mt-14">
            <TitleIcon />
            <h1
              className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}
            >
              Technical Contribution
            </h1>
          </div>
          {githubLink && (
            <ContentBlock
              title={"GitHub Link"}
              value={
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {githubLink}
                </Link>
              }
            />
          )}
          {twitterLink && (
            <ContentBlock
              title={"Twitter"}
              value={
                <Link
                  href={twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {twitterLink}
                </Link>
              }
            />
          )}
          {telegramLink && (
            <ContentBlock
              title={"Telegram"}
              value={
                <Link href={telegramLink} target="_blank">
                  {telegramLink}
                </Link>
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
