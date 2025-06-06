import Link from "next/link";

import { cn } from "@/lib/utils";
import { BackgroundBlur } from "@/shared/background-blur";
import { normalTextStyle, titleStyle } from "@/shared/styles";
import { ContactLink } from "@/shared/contact-link";
import { baseUrl } from "@/shared/fetcher";
import { ProjectContent } from "./project-content";

import type { Project } from "@/shared/types";
import { ReactNode } from "react";

// compat cloudflare worker
export const runtime = "edge";

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
        <div className="mt-2" dangerouslySetInnerHTML={{ __html: value }} />
      ) : (
        <div className={normalTextStyle()}>{value}</div>
      )}
    </div>
  );
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  // const res = await fetch(`${baseUrl}/projects/getProjectById/${projectId}`, {
  //   next: { revalidate: 60 },
  // });
  // const data: ProjectResponse = await res.json();
  // const { data: project } = data;

  // if (!project) {
  //   return (
  //     <div className="h-[60vh] flex flex-col items-center mt-20">
  //       <h1 className="text-2xl">Project not found</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      <BackgroundBlur
        top={-525}
        right={-115}
        style={{ top: "-525px", right: "-115px" }}
      />
      <ProjectContent projectId={projectId} />
    </div>
  );
}
