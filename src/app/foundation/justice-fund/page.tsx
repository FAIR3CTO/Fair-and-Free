import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { titleStyle, normalTextStyle } from "@/shared/styles";
import { Button } from "@/components/ui/button";
import { BackgroundBlur } from "@/shared/background-blur";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Events } from "./events";

const iconList = [
  {
    image: "/images/justice-fund/lighting.svg",
    alt: "lighting",
    width: 40,
    height: 40,
    content: "Rapid response to social injustice events",
  },
  {
    image: "/images/justice-fund/voice.svg",
    alt: "voice",
    width: 30,
    height: 38,
    content: "Amplifying individual and collective voices",
  },
  {
    image: "/images/justice-fund/web.svg",
    alt: "web",
    width: 36,
    height: 36,
    content: "Community-driven, with transparency and accountability",
  },
] as const;

const justiceFundList = [
  {
    image: "/images/justice-fund/building.png",
    alt: "building",
    title: "Community Action and Organizational Support",
    content:
      "Support decentralized protests, collective proposals, and collaboration among advocacy groups.",
  },
  {
    image: "/images/justice-fund/mini-justice.png",
    alt: "mini-justice",
    title: "Fairness Narrative Content Creation",
    content:
      "Provide funding for documentaries, podcasts, writing, or visual content focused on fairness issues.",
  },
  {
    image: "/images/justice-fund/public.png",
    alt: "public",
    title: "Public Advocacy and Education",
    content:
      "Host online and offline lectures, workshops, and publish materials on fairness-related topics.",
  },
] as const;

export const metadata: Metadata = {
  title: "Goddess of Justice Fund: Social Fairness | FAIR3",
  description:
    "The Goddess of Justice Fund by FAIR3 stands as a voice for the voiceless, championing education equity and cultural diversity. Raise your voice with us to drive impactful social fairness initiatives today!",
  keywords: [
    "goddess of justice fund",
    "FAIR3",
    "voice for justice",
    "education equity advocacy",
    "cultural diversity champion",
    "social fairness movement",
  ],
};

export const runtime = "edge";

export default async function JusticeFundPage() {
  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      <BackgroundBlur
        top={500}
        right={-115}
        style={{ top: 500, right: -115 }}
      />
      <div
        className={
          "flex flex-col items-center w-full h-[657px] bg-[url(/images/justice-fund/banner.png)] bg-no-repeat bg-cover"
        }
      >
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-42")}>
          Justice Fund
        </h1>
        <h2 className={cn(normalTextStyle(), "mt-3 text-[20px]")}>
          Supporting collective resistance against injustice, and empowering
          voices for fairness
        </h2>
        <Button
          variant={"main"}
          className={"mt-10 font-[Kodchasan] bg-[#8F4CFB] text-white"}
        >
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSfvCN-BRH0mQC84iMXoDjG4xYHIIlfuA_8zQMiTD32mb56X7g/viewform"
            }
            target="_blank"
          >
            I want to speak up
          </Link>
        </Button>
      </div>
      <div className="2xl:w-[1440px] 2xl:mx-0 mx-24 mt-14">
        <div className="flex justify-between">
          <h1 className={cn(titleStyle({ font: "kodchasan" }))}>
            Featured Events
          </h1>
          <Link
            href={"/foundation/justice-fund/events"}
            className="flex gap-2 items-center cursor-pointer"
          >
            <span>View More</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <ScrollArea>
          <div className={"flex gap-6 mt-8"}>
            <Events />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className={"flex mt-28"}>
          <div className="mr-16">
            <h1 className={titleStyle({ font: "kodchasan" })}>Justice Fund</h1>
            <p className={cn(normalTextStyle(), "mt-5")}>
              The Justice Fund is designed to address real-world injustices
              swiftly and effectively. It responds to social, economic, and
              political issues, empowering individuals and communities who face
              unfair treatment. By launching events, creating tools, and
              developing solutions, this fund aims to promote systemic change
              and evolution through narrative-driven justice initiatives. We
              focus on giving a voice to those who need it most, whether it’s a
              personal injustice or a broader societal issue. Through this fund,
              we advocate for fairness in all forms.
            </p>
          </div>
          <Image
            src={"/images/justice-fund/fund.png"}
            width={549}
            height={265}
            alt="Justice Fund"
          />
        </div>
        <div className={"flex justify-center gap-20 mt-16"}>
          {iconList.map((icon) => (
            <div key={icon.alt} className="flex items-center">
              <div className="flex shrink-0 items-center justify-center w-[72px] h-[72px] mr-4 bg-[var(--main-color)] rounded-full">
                <Image
                  src={icon.image}
                  width={icon.width}
                  height={icon.height}
                  alt={icon.alt}
                />
              </div>
              <p className={cn(normalTextStyle(), "mt-3 text-center")}>
                {icon.content}
              </p>
            </div>
          ))}
        </div>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-24")}>
          Justice Fund
        </h1>
        <div className="flex mt-7">
          <div className="flex-1">
            <div className="w-[549px] h-[265px] shrink-0">
              <Image
                src={"/images/justice-fund/justice.png"}
                width={549}
                height={265}
                alt="justice"
              />
            </div>
            <p className={cn(normalTextStyle(), "mt-10")}>
              The Justice Fund is designed to address real-world injustices
              swiftly and effectively. It responds to social, economic, and
              political issues, empowering individuals and communities who face
              unfair treatment. By launching events, creating tools, and
              developing solutions, this fund aims to promote systemic change
              and evolution through narrative-driven justice initiatives. We
              focus on giving a voice to those who need it most, whether it’s a
              personal injustice or a broader societal issue.
            </p>
          </div>
          <div className="ml-36 flex-1">
            {justiceFundList.map((item) => (
              <div key={item.alt} className="flex mt-10 first:mt-0">
                <div className={'w-[192px] h-[116px] shrink-0'}>
                  <Image
                    src={item.image}
                    width={192}
                    height={116}
                    alt={item.alt}
                  />
                </div>
                <div className="ml-6">
                  <h2
                    className={cn(titleStyle({ font: "Inter" }), "text-[20px]")}
                  >
                    {item.title}
                  </h2>
                  <p className={cn(normalTextStyle(), "mt-4")}>
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-24")}>
          Speak up for fairness — it starts with you
        </h1>
        <div className="flex mt-10">
          <div className="mr-32">
            <p className={cn(normalTextStyle())}>
              At FAIR3, we believe that every call for justice holds power.
              Change begins when voices rise — in the conversations we have, the
              actions we take, and by standing with those who are marginalized.
            </p>
            <p className={cn(normalTextStyle(), "mt-3")}>
              We actively review and select instances of injustice to amplify,
              offering exposure and support.
            </p>
            <p className={cn(normalTextStyle(), "mt-3")}>
              Through the Justice Fund, you can be selected as rewards with
              $FAIR3 for your efforts to raise awareness and drive social
              change.
            </p>
            <Button
              variant={"main"}
              className="mt-8 text-white bg-[#9971FF] font-[Kodchasan]"
            >
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSfvCN-BRH0mQC84iMXoDjG4xYHIIlfuA_8zQMiTD32mb56X7g/viewform"
                }
                target="_blank"
              >
                I want to speak up
              </Link>
            </Button>
          </div>
          <div className="w-[549px] h-[265px] shrink-0">
            <Image
              src={"/images/justice-fund/speakup.png"}
              alt="speak up"
              width={549}
              height={265}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
