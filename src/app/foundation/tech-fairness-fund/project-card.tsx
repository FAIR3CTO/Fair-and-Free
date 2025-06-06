"use client";

import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  id,
  title,
  oneLiner,
  githubLink,
  twitterLink,
  telegramLink,
}: {
  id: number;
  title: string;
  oneLiner: string;
  githubLink?: string;
  twitterLink?: string;
  telegramLink?: string;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      className="w-[290px] p-6 bg-[var(--main-color)]/60 rounded-[10px] backdrop-blur-xs text-[var(--selected-text-color)]"
    >
      <Link href={"/foundation/tech-fairness-fund/" + id}>
        <Image
          src={"/images/about/about-cto.png"}
          width={238}
          height={134}
          alt="Project Image"
        />
      </Link>
      <h1 className={"mt-4 font-[Inter] font-extrabold text-[16px]"}>
        {title}
      </h1>
      <p className={"mt-4 font-[Inter] font-medium text-[12px]"}>{oneLiner}</p>
      <div className="mt-10 flex gap-5">
        {twitterLink && (
          <Link href={twitterLink} target="_blank">
            <Image src={"/images/X.svg"} width={20} height={18} alt="X" />
          </Link>
        )}
        {telegramLink && (
          <Link href={telegramLink} target="_blank">
            <Image
              src={"/images/telegram.svg"}
              width={22}
              height={20}
              alt="telegram"
            />
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink} target="_blank">
            <Image
              src={"/images/github.svg"}
              width={22}
              height={22}
              alt="github"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
