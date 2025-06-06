import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import { titleStyle, normalTextStyle } from "@/shared/styles";
import { Button } from "@/components/ui/button";
import { BackgroundBlur } from "@/shared/background-blur";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Projects } from "./projects";

const imageList = [
  {
    src: "/images/fairness-fund/image1.png",
    alt: "Image 1",
    desc: "Milestone-based grants for open-source and Web3 developers",
  },
  {
    src: "/images/fairness-fund/image2.png",
    alt: "Image 2",
    desc: "Focus on innovation in AI and blockchain",
  },
  {
    src: "/images/fairness-fund/image3.png",
    alt: "Image 3",
    desc: "Encouraging fairness in technology development",
  },
  {
    src: "/images/fairness-fund/image4.png",
    alt: "Image 4",
    desc: "Supporting the creation of transparent, inclusive digital tools",
  },
] as const;

const missionImage = [
  {
    src: "/images/fairness-fund/building.png",
    alt: "building",
    title: "Encourage Innovation for Social Good",
    desc: "We aim to fund projects that bring positive social change through technology.",
  },
  {
    src: "/images/fairness-fund/empower.png",
    alt: "empower",
    title: "Empower the Next Generation of Developers",
    desc: "By supporting these projects, we hope to inspire developers to build technology that benefits all.",
  },
  {
    src: "/images/fairness-fund/mind.png",
    alt: "mind",
    title: "Foster a Fairer, More Inclusive Future",
    desc: "We are committed to building a future where everyone can participate and benefit from technological advancement.",
  },
] as const;

const iconList = [
  {
    src: "/images/fairness-fund/icon1.svg",
    alt: "icon1",
    desc: "Submit Your Idea",
  },
  {
    src: "/images/fairness-fund/icon2.svg",
    alt: "icon2",
    desc: "Milestones & Timeline",
  },
  {
    src: "/images/fairness-fund/icon3.svg",
    alt: "icon3",
    desc: "Review by Foundation Members",
  },
  {
    src: "/images/fairness-fund/icon4.svg",
    alt: "icon4",
    desc: "Community Voting",
  },
  {
    src: "/images/fairness-fund/icon5.svg",
    alt: "icon5",
    desc: "Funding & Support",
  },
] as const;

export const metadata: Metadata = {
  title: "Tech Fairness Fund: Empowering Tech Equity | FAIR3",
  description:
    "The Tech Fairness Fund by FAIR3 empowers developers with open-source and decentralized solutions. Apply for funding to break tech barriers!",
  keywords: [
    "tech fairness fund",
    "FAIR3",
    "tech equity",
    "open-source",
    "decentralized tech",
    "Web3 funding",
    "developer empowerment",
  ],
};

export const runtime = "edge";

export default async function TechFairnessFundPage() {
  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      <BackgroundBlur
        top={241}
        right={-115}
        style={{ top: "241px", right: "-115px" }}
      />
      <div
        className={
          "flex flex-col items-center w-full h-[657px] bg-[url(/images/fairness-fund/banner.png)] bg-no-repeat bg-cover"
        }
      >
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-40")}>
          Tech Fairness Fund
        </h1>
        <h2 className={cn(normalTextStyle(), "mt-2.5 text-[20px]")}>
          Building inclusive digital futures through open, community-powered
          technologies.
        </h2>
        <Button
          variant={"main"}
          className={"mt-10 font-[Kodchasan] bg-[#8F4CFB] text-white"}
        >
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSd46wgcc-JtyupesVH192jmf8XRg28zsfJXUSQMsY1TOXJp6g/viewform"
            }
            target="_blank"
          >
            Submit Your Project
          </Link>
        </Button>
      </div>
      <div className={"2xl:w-[1440px] 2xl:mx-0 mx-24"}>
        <div className="flex mt-16 justify-between">
          <div>
            <h1 className={cn(titleStyle({ font: "kodchasan" }))}>
              Funded Projects
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>
              Committed to tech fairness, we support innovative initiatives that
              empower developers and make technology accessible to everyone.
            </p>
          </div>
          <Link
            href={"/foundation/tech-fairness-fund/projects"}
            className="flex gap-2 items-center cursor-pointer"
          >
            <span>View More</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <ScrollArea className="mt-9">
          <div className="flex gap-6">
            <Projects />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex mt-21">
          <div className="mr-16">
            <h1 className={cn(titleStyle({ font: "kodchasan" }))}>
              Tech Fairness Fund
            </h1>
            <p className={cn(normalTextStyle(), "mt-5")}>
              The Fair3 Tech Fairness Fund is dedicated to supporting developers
              and innovators working on open-source projects, AI, and Web3
              technologies that prioritize fairness. Through milestone-based
              grants, this fund empowers developers to push the boundaries of
              what’s possible in the tech world, while ensuring that their
              innovations are grounded in principles of fairness, transparency,
              and inclusivity. The fund plays a critical role in advancing
              technological solutions that create a more equitable digital
              landscape for everyone.
            </p>
          </div>
          <Image
            src={"/images/fairness-fund/tech-fairness-fund.png"}
            width={549}
            height={265}
            alt="Tech Fairness Fund"
          />
        </div>
        <div className={"flex gap-20 mt-16 justify-around"}>
          {imageList.map((image) => (
            <div key={image.alt} className="flex flex-col items-center">
              <Image src={image.src} width={240} height={139} alt={image.alt} />
              <p
                className={cn(normalTextStyle(), "w-[240px] mt-3 text-center")}
              >
                {image.desc}
              </p>
            </div>
          ))}
        </div>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-20")}>
          Mission & Key Objectives
        </h1>
        <div className="flex mt-8">
          <div className="mr-36">
            <Image
              src={"/images/fairness-fund/mission.png"}
              width={549}
              height={265}
              alt="mission"
            />
            <p className={cn(normalTextStyle(), "w-[549px] mt-10")}>
              The Fair3 Tech Fairness Fund is dedicated to supporting developers
              and innovators working on open-source projects, AI, and Web3
              technologies that prioritize fairness. Through milestone-based
              grants, this fund empowers developers to push the boundaries of
              what’s possible in the tech world, while ensuring that their
              innovations are grounded in principles of fairness, transparency,
              and inclusivity. The fund plays a critical role in advancing
              technological solutions that create a more equitable digital
              landscape for everyone.
            </p>
          </div>
          <div>
            {missionImage.map((item) => (
              <div key={item.alt} className="flex mb-10 mt-10 first:mt-0">
                <Image src={item.src} width={192} height={116} alt={item.alt} />
                <div className="ml-6">
                  <h2
                    className={cn(titleStyle({ font: "Inter" }), "text-[20px]")}
                  >
                    {item.title}
                  </h2>
                  <p className={cn(normalTextStyle(), "mt-4")}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1
          className={cn(
            titleStyle({ font: "kodchasan" }),
            "max-w-[606px] mt-24"
          )}
        >
          Be Part of the Change — Help Build a Fairer Future.
        </h1>
        <div className="flex mt-16 justify-around">
          {iconList.map((icon) => (
            <div key={icon.alt} className="flex flex-col items-center">
              <div
                className={
                  "flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[var(--main-color)] mb-3"
                }
              >
                <Image
                  quality={100}
                  src={icon.src}
                  width={36}
                  height={36}
                  alt={icon.alt}
                />
              </div>
              <p className={cn(normalTextStyle(), "text-center")}>
                {icon.desc}
              </p>
            </div>
          ))}
        </div>
        <h2 className={cn(titleStyle({ font: "Inter" }), "mt-12 text-[20px]")}>
          Submission Process:
        </h2>
        <p className={cn(normalTextStyle(), "mt-4 max-w-[918px]")}>
          1. Submit Your Idea: Present your product concept, highlighting its
          social impact and how it can contribute to tech fairness. Include a
          clear timeline and milestones, with code submissions for each phase.
        </p>
        <p className={cn(normalTextStyle(), "mt-4 max-w-[918px]")}>
          2. Milestones & Timeline: Each project should outline their
          development timeline with specific milestones, ensuring transparency
          and measurable progress. Milestones should reflect significant
          technical achievements or deliverables.
        </p>
        <p className={cn(normalTextStyle(), "mt-4 max-w-[918px]")}>
          3. Review by Foundation Members: Once submitted, the project will be
          reviewed by FAIR3’s Foundation members, who will evaluate the
          feasibility, impact, and alignment with FAIR3’s values of fairness and
          accessibility in technology.
        </p>
        <p className={cn(normalTextStyle(), "mt-4 max-w-[918px]")}>
          4. Community Voting: The community of FAIR3 token holders will then
          vote on the projects. Based on the votes and CTO feedback, the best
          proposals will be selected.
        </p>
        <p className={cn(normalTextStyle(), "mt-4 max-w-[918px]")}>
          5.Funding & Support: Winning projects will receive funding in the form
          of $FAIR3 tokens to continue their development and contribute to tech
          fairness. This financial support will enable the most impactful
          innovations to take root and grow.
        </p>
        <div className="flex pl-12 pr-10 py-10 justify-between items-center mt-14 border-solid border-[#000] border-[1px] rounded-[10px]">
          <div className="flex gap-9">
            <Image
              src={"/images/fairness-fund/apply.png"}
              width={196}
              height={113}
              alt="apply"
            />
            <div>
              <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-2xl")}>
                Apply for Grants
              </h1>
              <p className={cn(normalTextStyle(), "mt-8")}>
                Have a project that advances technological equity, economic
                empowerment, or social inclusion? Apply for foundation funding.
              </p>
            </div>
          </div>
          <Button
            variant={"main"}
            className="font-[Kodchasan] text-white bg-[#8F4CFB]"
          >
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSd46wgcc-JtyupesVH192jmf8XRg28zsfJXUSQMsY1TOXJp6g/viewform"
              }
              target="_blank"
            >
              Submit Your Project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
