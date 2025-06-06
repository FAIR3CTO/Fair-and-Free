"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { cn } from "@/lib/utils";
import { Vanta } from "@/shared/vanta";
import { titleStyle, normalTextStyle } from "@/shared/styles";
import { Button } from "@/components/ui/button";
import { EventCard } from "./foundation/justice-fund/event-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { fetcher } from "@/shared/fetcher";

import type { EventResponse } from "@/shared/types";

declare global {
  interface Window {
    // @eslint-disable-next-line @typescript-eslint/no-explicit-any
    VANTA: any;
  }
}

const iconList = [
  {
    title: "13",
    content: "Foundation Members",
    image: {
      src: "/images/home-icon1.svg",
      width: 42.5,
      height: 47.5,
    },
  },
  {
    title: "2.5M+",
    content: "Foundation Balance",
    image: {
      src: "/images/home-icon2.svg",
      width: 50,
      height: 45,
    },
  },
  {
    title: "5",
    content: "Partnership Projects",
    image: {
      src: "/images/home-icon3.svg",
      width: 50,
      height: 40,
    },
  },
  {
    title: "1.2M+",
    content: "Airdorp FAIR3",
    image: {
      src: "/images/home-icon4.svg",
      width: 50,
      height: 50,
    },
  },
] as const;

const companyIconList = [
  {
    src: "/images/bscscan.svg",
    alt: "bscscan",
    name: "Bscscan",
  },
  {
    src: "/images/cornmarketcap.svg",
    alt: "cornmarketcap",
    name: "Coinmarketcap",
  },
  {
    src: "/images/coingecko.svg",
    alt: "coingecko",
    name: "Coingecko",
  },
] as const;

const blockChainList: Array<{
  src: string;
  alt: string;
  link: string;
  name: string;
}> = [
  {
    src: "/images/alpha.png",
    alt: "Binance Alpha",
    link: "https://www.binance.com/en/price/fair-and-free",
    name: "Binance Alpha",
  },
  {
    src: "/images/pancakeswap.png",
    alt: "Pancakeswap",
    link: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x6952c5408b9822295ba4a7e694d0C5FfDB8fE320&exactAmount=&exactField=INPUT",
    name: "Pancakeswap",
  },
  {
    src: "/images/bigget.png",
    link: "https://www.bitget.com/zh-CN/on-chain/bnb/0x6952c5408b9822295ba4a7e694d0c5ffdb8fe320",
    alt: "Bitget onchain",
    name: "Bitget onchain",
  },
  {
    src: "/images/xt.png",
    link: "https://www.xt.com/en/trade/fair3_usdt",
    alt: "XT.com",
    name: "XT.com",
  },
  {
    src: "/images/orangex.png",
    link: "https://www.orangex.com/spot/FAIR3-USDT-SPOT",
    alt: "OrangeX",
    name: "OrangeX",
  },
  {
    src: "/images/hoticon.png",
    link: "https://www.hotcoin.com/es_ES/trade/exchange/?tradeCode=fair3_usdt",
    alt: "Hotcoin",
    name: "Hotcoin",
  },
  {
    src: "/images/ourbit.png",
    link: "https://www.ourbit.com/zh-CN/exchange/FAIR3_USDT?_from=search",
    alt: "Ourbit",
    name: "Ourbit",
  },
  {
    src: "/images/ave.png",
    link: "https://ave.ai/token/0x6952c5408b9822295ba4a7e694d0c5ffdb8fe320-bsc?from=Home",
    alt: "Ave.ai",
    name: "Ave.ai",
  },
  {
    src: "/images/superex.png",
    link: "https://www.superex.com/trade/FAIR3_USDT",
    alt: "SuperEx",
    name: "SuperEx",
  },
  {
    src: "/images/dexscreener.png",
    link: "https://dexscreener.com/bsc/0x701232f46796855b0841df2cbf46595c00667dde",
    alt: "Dexscreener",
    name: "Dexscreener",
  },
  {
    src: "/images/dextool.png",
    link: "https://www.dextools.io/app/cn/token/fair3?t=1749006504249",
    alt: "DEXtools",
    name: "DEXtools",
  },
];

export default function Home() {
  const [ready, setReady] = useState(false);
  const { data } = useSWR<EventResponse>(`/event/getAllEvents`, fetcher);

  const { data: evevts = [] } = data || {};

  useEffect(() => {
    if (window.VANTA)
      window.VANTA.GLOBE({
        el: "#vanta-container",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: "#9C8EDF",
        color2: "#b0a5e5",
        size: 1.4,
        backgroundColor: "#ffffff",
      });
  }, [ready]);

  const handleVantaReady = () => {
    setReady(true);
  };

  return (
    <>
      <Vanta onReady={handleVantaReady} />
      <div className={"flex flex-col items-center text-[#353535]"}>
        <div
          id="vanta-container"
          className="w-full h-[855px] bg-white flex justify-center"
        >
          <div
            className={
              "2xl:w-[1440px] 2xl:mx-0 mx-24 flex flex-col justify-between w-full relative"
            }
          >
            <div className="mt-16">
              <h1
                className={
                  "font-bold font-[Konkhmer Sleokchher] text-[58px] text-[#7c49ff]"
                }
              >
                FAIR AND FREE
              </h1>
              <h2
                className={
                  "max-w-2xl mt-4 font-bold font-[Kodchasan] text-[40px]"
                }
              >
                Back Builders. Defend Justice. Own the Future.
              </h2>
              <p className={"mt-7 text-black font-normal text-[15px]"}>
                BNB Chain CA:0x6952c5408b9822295ba4a7e694d0c5ffdb8fe320
              </p>
              <Button
                className={
                  "mt-9 font-[Kodchasan] text-[20px] font-bold cursor-pointer bg-[#9871FF] text-white"
                }
                style={{
                  backdropFilter: "blur(4px)",
                }}
              >
                <Link
                  href={
                    "https://dexscreener.com/bsc/0x701232f46796855b0841df2cbf46595c00667dde"
                  }
                  target="_blank"
                >
                  BUY $FAIR3 ON BSC
                </Link>
              </Button>
            </div>
            <ScrollArea>
              <div className="flex flex-nowrap gap-5 items-end">
                {evevts.map((item) => (
                  <EventCard
                    id={item.id}
                    key={item.id}
                    src={item.cover}
                    title={item.title}
                    description={item.description}
                    noDesc={true}
                    noAnimate={false}
                  />
                ))}
              </div>
              <ScrollBar orientation={"horizontal"} />
            </ScrollArea>
          </div>
        </div>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-32")}>
          The FAIR3 Foundation
        </h1>
        <h2 className={cn(normalTextStyle(), "mt-1.5")}>
          Multisig Address：0x948d680B978874f2A57b4a904633084414282eA7
        </h2>
        <div className="2xl:w-[1440px] mt-20 2xl:mx-0 mx-24">
          <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}>
            Introducing the Fair3 Foundation: A Two-Pillar Approach
          </h1>
          <p className={cn(normalTextStyle(), "mt-5")}>
            The Fair3 Foundation is built on a vision of fairness, transparency,
            and empowerment. We believe that both technology and social justice
            need to evolve hand-in-hand, which is why we’ve established a
            dual-pillar approach to drive positive change in these critical
            areas.
          </p>
          <p className={cn(normalTextStyle(), "mt-3")}>
            By focusing on both social justice and technological innovation, the
            Fair3 Foundation creates a dynamic ecosystem where every individual
            and every idea has a platform to thrive.
          </p>
          <div className="w-full flex flex-nowrap gap-24 mt-16 justify-center">
            {iconList.map(({ title, content, image }) => {
              return (
                <div key={title} className="flex items-center">
                  <div className="w-[65px] h-[65px] shrink-0 mr-6 rounded-full bg-[var(--main-color)] flex items-center justify-center">
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={title}
                    />
                  </div>
                  <div>
                    <h3 className={cn(titleStyle({ font: "Inter" }), "mt-2")}>
                      {title}
                    </h3>
                    <p className={normalTextStyle()}>{content}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-center gap-24 mt-40">
            <div className="flex flex-1 flex-col items-center">
              <div className="w-[567px] h-[309px] relative shrink-0">
                <Image
                  src={"/images/justice-fund.png"}
                  width={567}
                  height={309}
                  className="object-cover"
                  alt={"justice fund"}
                />
              </div>
              <h3
                className={cn(
                  titleStyle({ font: "Inter" }),
                  "mt-8 text-[20px]"
                )}
              >
                Goddess of Justice Fund
              </h3>
              <p className={cn(normalTextStyle(), "mt-2")}>
                The Justice Fund is designed to address real-world injustices
                swiftly and effectively. It responds to social, economic, and
                political issues, empowering individuals and communities who
                face unfair treatment.
              </p>
              <Button
                className={cn(
                  titleStyle({ font: "kodchasan" }),
                  "text-[15px] mt-9 text-white bg-[#9971FF]"
                )}
              >
                <Link href={"/foundation/justice-fund"}>LEARN MORE</Link>
              </Button>
            </div>
            <div className="flex flex-1 flex-col items-center">
              <div className="w-[548px] h-[309px] relative">
                <Image
                  src={"/images/fairness-fund.png"}
                  width={548}
                  height={309}
                  className="object-cover"
                  alt={"fairness fund"}
                />
              </div>
              <h3
                className={cn(
                  titleStyle({ font: "Inter" }),
                  "mt-8 text-[20px]"
                )}
              >
                Tech Fairness Fund
              </h3>
              <p className={cn(normalTextStyle(), "mt-2")}>
                The Tech Fairness Fund invests in open, accessible, and
                community-owned technologies that reduce entry barriers and
                enable equitable participation in the digital economy. From
                foundational tools to public goods, it champions digital equity
                for all.
              </p>
              <Button
                className={cn(
                  titleStyle({ font: "kodchasan" }),
                  "text-[15px] mt-9 text-white bg-[#9971FF]"
                )}
              >
                <Link href={"/foundation/tech-fairness-fund"}>LEARN MORE</Link>
              </Button>
            </div>
          </div>
          <div className="w-[1440px] flex justify-center relative mt-[170px]">
            <div
              className={
                "w-full h-[100px] bg-[url(/images/wave.svg)] bg-repeat-round"
              }
            ></div>
            <div className={"absolute flex gap-2.5 top-[-20px] left-[40px]"}>
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/celebrate.svg"}
                  width={30}
                  height={30}
                  alt="FAIR³ Launched"
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  FAIR³ Launched on Solana
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>02/03/2025</p>
              </div>
            </div>
            <div className="absolute flex gap-2.5 top-[60px] left-[150px]">
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/takeover.svg"}
                  width={30}
                  height={28}
                  alt="Community Take Over"
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  Community Take Over(CTO)
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>02/10/2025</p>
              </div>
            </div>
            <div className="absolute flex gap-2.5 top-[-55px] left-[330px]">
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/cto.svg"}
                  width={30}
                  height={28}
                  alt="cto"
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  WangXin joins the CTO Team
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>02/14/2025</p>
              </div>
            </div>
            <div className="absolute flex gap-2.5 top-[65px] left-[465px]">
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/chain.svg"}
                  width={30}
                  height={30}
                  alt="BNB Chain"
                  quality={100}
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  FAIR³ New Visual Identity
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>03/04/2025</p>
              </div>
            </div>
            <div className="absolute flex gap-2.5 top-[-30px] left-[620px]">
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/chain.svg"}
                  width={30}
                  height={30}
                  alt="BNB Chain"
                  quality={100}
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  Migrated To BNB Chain
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>03/19/2025</p>
              </div>
            </div>
            <div className="absolute flex gap-2.5 top-[100px] left-[740px]">
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/cto.svg"}
                  width={30}
                  height={30}
                  alt="cto"
                  quality={100}
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  Four.meme Join the CTO Team
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>04/09/2025</p>
              </div>
            </div>
            <div className="absolute flex gap-2.5 top-[15px] left-[860px]">
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/airdrop.svg"}
                  width={30}
                  height={30}
                  alt="Bitget VOXEL Event Airdrop"
                  quality={100}
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  Bitget VOXEL Event Airdrop
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>04/16/2025</p>
              </div>
            </div>
            <div className="absolute flex gap-2.5 top-[110px] left-[1050px]">
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/airdrop.svg"}
                  width={30}
                  height={30}
                  alt="JD Takeout Incident Airdrop"
                  quality={100}
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  JD Takeout Incident Airdrop
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>04/18/2025</p>
              </div>
            </div>
            <div className="absolute flex gap-2.5 top-[-40px] left-[1145px]">
              <div className="flex shrink-0 w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/justice.svg"}
                  width={30}
                  height={30}
                  alt="Introducing the Goddess of Justice Fund 
& Tech Fairness Fund"
                  quality={100}
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  Introducing the Goddess of Justice Fund & Tech Fairness Fund
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>05/15/2025</p>
              </div>
            </div>
            {/* <div className="absolute flex gap-2.5 top-[-20px] left-[1145px]">
              <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
                <Image
                  src={"/images/foundation.svg"}
                  width={30}
                  height={30}
                  alt="Launching the Fair3 Foundation"
                  quality={100}
                />
              </div>
              <div>
                <h1
                  className={cn(
                    titleStyle({ font: "kodchasan" }),
                    "text-[15px]"
                  )}
                >
                  Launching the Fair3 Foundation
                </h1>
                <p className={cn(normalTextStyle(), "mt-2.5")}>05/11/2025</p>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col items-center mt-36">
            <h1 className={cn(titleStyle({ font: "kodchasan" }))}>
              BUY $FAIR3 TODAY
            </h1>
            <p className={cn(normalTextStyle(), "mt-3.5 max-w-3xl")}>
              LEGAL DISCLAIMER: $FAIR3 is a crypto coin with no intrinsic value
              or expectation of financial return.  this website provides general
              information only and does not constitute personalized financial,
              investment, or legal advice.
            </p>
            <div className="flex justify-center gap-16 mt-10">
              {companyIconList.map((icon) => (
                <div
                  className="flex gap-4 justify-center items-center"
                  key={icon.name}
                >
                  <Image src={icon.src} width={30} height={30} alt={icon.alt} />
                  <p className={normalTextStyle()}>{icon.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-24">
          <div className="2xl:w-[1300px] 2xl:mx-0 mx-24 w-full flex flex-wrap gap-30 px-10 2xl:px-0">
            {blockChainList.map((item) => (
              <Link
                href={item.link}
                target="_blank"
                key={item.link}
                className="flex flex-col items-center justify-center"
              >
                <Image src={item.src} width={100} height={100} alt={item.alt} />
                <span className="mt-3">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
