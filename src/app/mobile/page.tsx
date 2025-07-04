"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { titleStyle, normalTextStyle } from "@/shared/styles";
import { EventCard } from "../foundation/justice-fund/event-card";
import { fetcher } from "@/shared/fetcher";
import { Vanta } from "@/shared/vanta";
import { useEffect, useState } from "react";

import type { EventResponse } from "@/shared/types";

declare global {
  interface Window {
    // @eslint-disable-next-line @typescript-eslint/no-explicit-any
    VANTA: any;
  }
}

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

const iconList = [
  {
    title: "13",
    content: "Foundation Members",
    image: {
      src: "/images/home-icon1.svg",
      width: 21,
      height: 24,
    },
  },
  {
    title: "2.5M+",
    content: "Foundation Balance",
    image: {
      src: "/images/home-icon2.svg",
      width: 25,
      height: 23,
    },
  },
  {
    title: "5",
    content: "Partnership Projects",
    image: {
      src: "/images/home-icon3.svg",
      width: 25,
      height: 20,
    },
  },
  {
    title: "1.2M+",
    content: "Airdrop FAIR3",
    image: {
      src: "/images/home-icon4.svg",
      width: 25,
      height: 25,
    },
  },
] as const;

const companyIconList = [
  {
    src: "/images/bscscan.svg",
    link: "https://bscscan.com/token/0x6952c5408b9822295ba4a7e694d0c5ffdb8fe320",
    alt: "bscscan",
    name: "Bscscan",
  },
  {
    src: "/images/cornmarketcap.svg",
    link: "https://coinmarketcap.com/zh-tw/currencies/fair-and-free",
    alt: "cornmarketcap",
    name: "Coinmarketcap",
  },
  {
    src: "/images/coingecko.svg",
    link: "https://www.coingecko.com/en/coins/fair-and-free",
    alt: "coingecko",
    name: "Coingecko",
  },
] as const;

export default function MobilePage() {
  const [ready, setReady] = useState(false);
  const { data } = useSWR<EventResponse>(`/event/gethomeEvents`, fetcher);
  const { data: events = [] } = data || {};

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
    <div className="flex flex-col items-center text-[#353535]">
      <Vanta onReady={handleVantaReady} />
      {/* 移动端主要内容区域 */}
      <div className="w-full bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-sm"
      id="vanta-container"
      >
        <div className="px-4 py-12">
          <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 className="font-bold font-[Konkhmer Sleokchher] text-[36px] text-[#7c49ff] leading-tight mb-6" style={{ fontSize: "48px" }}>
              FAIR AND FREE
            </h1>
            <h2 className="max-w-[280px] mx-auto font-bold text-[16px] font-[Kodchasan] text-[#353535] leading-[1.1]">
              Back Builders. Defend Justice. Own the Future.
            </h2>
            <p className="mt-8 text-[#353535] font-normal text-[12px] px-2 break-all leading-relaxed">
              BNB Chain CA:0x6952c5408b9822295ba4a7e694d0c5ffdb8fe320
            </p>
            <Button
              className="mt-8 font-[Kodchasan] text-[16px] font-bold cursor-pointer bg-[#9871FF] hover:bg-[#8660FF] text-white px-10 py-4 rounded-full transition-all duration-200 shadow-lg"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <Link
                href="https://dexscreener.com/bsc/0x701232f46796855b0841df2cbf46595c00667dde"
                target="_blank"
              >
                BUY $FAIR3 ON BSC
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 mt-8 flex justify-center">
        <div className="w-full max-w-md flex flex-col items-start" style={{ width: "100%", padding: "0 10%" }}>
          <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-8 text-[24px] text-left font-bold")}>
            The FAIR3 Foundation
          </h1>
          <h2 className={cn(normalTextStyle(), "mt-3 text-[14px] text-left text-[#666]")}>
            Multisig Address：
          </h2>
          <p className="text-[14px] text-[#666] break-all leading-relaxed">
            0x948d680B978874f2A57b4a904633084414282eA7
          </p>
          <div className="w-full mt-8">
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px] font-bold")}>
              Introducing the Fair3 Foundation: A Two-Pillar Approach
            </h1>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              The Fair3 Foundation is built on a vision of fairness, transparency,
              and empowerment.
            </p>
            <p className={cn(normalTextStyle(), "mt-3 text-[14px] leading-relaxed")}>
              We believe that both technology and social justice need to evolve
              hand-in-hand, which is why we've established a dual-pillar approach to drive
              positive change in these critical areas.
            </p>
            <p className={cn(normalTextStyle(), "mt-3 text-[14px] leading-relaxed")}>
              By focusing on both social justice and technological innovation, the
              Fair3 Foundation creates a dynamic ecosystem where every individual
              and every idea has a platform to thrive.
            </p>
            <div className="w-full grid grid-cols-2 gap-4 mt-16">
              {iconList.map(({ title, content, image }) => {
                return (
                  <div key={title} className="flex items-center gap-3 p-3">
                    <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-[#9871FF] flex items-center justify-center">
                      <Image
                        src={image.src}
                        width={Math.floor(image.width * 0.8)}
                        height={Math.floor(image.height * 0.8)}
                        alt={title}
                        className="brightness-0 invert"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(titleStyle({ font: "Inter" }), "text-[18px] leading-tight")}>
                        {title}
                      </h3>
                      <p className={cn(normalTextStyle(), "text-[12px] leading-tight")}>{content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4 mt-16 gap-12">
        <div className="flex flex-col items-center w-full max-w-sm">
          <div className="w-full h-[200px] relative">
            <Image
              src={"/images/justice-fund.png"}
              fill
              className="object-cover rounded-xl"
              alt={"justice fund"}
            />
          </div>
          <h3
            className={cn(
              titleStyle({ font: "kodchasan" }),
              "mt-6 text-[18px] text-center"
            )}
          >
            Goddess of Justice Fund
          </h3>
          <p className={cn(normalTextStyle(), "mt-3 text-[14px] text-center leading-relaxed")}>
            The Justice Fund is designed to address real-world injustices
            swiftly and effectively. It responds to social, economic, and
            political issues, empowering individuals and communities who
            face unfair treatment.
          </p>
          <Button
            className={cn(
              titleStyle({ font: "kodchasan" }),
              "text-[14px] mt-6 text-white bg-[#9971FF] px-6 py-3 rounded-full"
            )}
          >
            <Link href={"/foundation/justice-fund"}>LEARN MORE</Link>
          </Button>
        </div>
        
        <div className="flex flex-col items-center w-full max-w-sm">
          <div className="w-full h-[200px] relative">
            <Image
              src={"/images/fairness-fund.png"}
              fill
              className="object-cover rounded-xl"
              alt={"fairness fund"}
            />
          </div>
          <h3
            className={cn(
              titleStyle({ font: "kodchasan" }),
              "mt-6 text-[18px] text-center"
            )}
          >
            Tech Fairness Fund
          </h3>
          <p className={cn(normalTextStyle(), "mt-3 text-[14px] text-center leading-relaxed")}>
            The Tech Fairness Fund invests in open, accessible, and
            community-owned technologies that reduce entry barriers and
            enable equitable participation in the digital economy. From
            foundational tools to public goods, it champions digital equity
            for all.
          </p>
          <Button
            className={cn(
              titleStyle({ font: "kodchasan" }),
              "text-[14px] mt-6 text-white bg-[#9971FF] px-6 py-3 rounded-full"
            )}
          >
            <Link href={"/foundation/tech-fairness-fund"}>LEARN MORE</Link>
          </Button>
        </div>
      </div>

      <div className="w-full h-[400px] flex items-center justify-center overflow-hidden" style={{ marginTop: "100px", marginLeft: "-200px" }}>
        <div 
          className="w-full h-full bg-[url(/images/wave.svg)] bg-no-repeat bg-center bg-contain transform rotate-90"
          style={{ transformOrigin: 'center center' }}
        >
        </div>
      </div>

      <div style={{ position: "relative", width: "100%", height: '100px', marginLeft: "-30px" }}>
        <div className={"absolute flex gap-2.5 top-[-460px] left-[100px]"}>
          <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
            <Image
              src={"/images/takeover.svg"}
              width={30}
              height={30}
              alt="FAIR³ Launched"
            />
          </div>
          <div>
            <h1
              className={cn(
                titleStyle({ font: "kodchasan" }),
                "text-[12px]"
              )}
            >
              Community Take Over(CTO)
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>02/10/2025</p>
          </div>
        </div>
        
        <div className="absolute flex gap-2.5 top-[-400px] left-[170px]">
          <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
            <Image
              src={"/images/cto.svg"}
              width={30}
              height={28}
              alt="Community Take Over"
            />
          </div>
          <div>
            <h1
              className={cn(
                titleStyle({ font: "kodchasan" }),
                "text-[12px]"
              )}
            >
              WangXin joins the CTO Team
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>02/14/2025</p>
          </div>
        </div>

        <div className="absolute flex gap-2.5 top-[-340px] left-[180px]">
            <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
              <Image
                src={"/images/chain.svg"}
                width={30}
                height={28}
                alt="cto"
              />
            </div>
            <div>
              <h1
                className={cn(
                  titleStyle({ font: "kodchasan" }),
                  "text-[12px]"
                )}
              >
                Migrated To BNB Chain
              </h1>
              <p className={cn(normalTextStyle(), "mt-2.5")}>03/19/2025</p>
            </div>
        </div>

        <div className="absolute flex gap-2.5 top-[-280px] left-[170px]">
          <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
            <Image
              src={"/images/celebrate.svg"}
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
                "text-[12px]"
              )}
            >
              Web3 rap <span>Fight For Fair</span> is launched
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>03/29/2025</p>
          </div>
        </div>

        <div className="absolute flex gap-2.5 top-[-220px] left-[160px]">
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
                "text-[12px]"
              )}
            >
              Listing on Binance Alpha
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>04/09/2025</p>
          </div>
        </div>

        <div className="absolute flex gap-2.5 top-[-160px] left-[150px]">
          <div className="flex w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
            <Image
              src={"/images/memo.svg"}
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
                "text-[12px]"
              )}
            >
              Four.meme Join the CTO Team
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>04/09/2025</p>
          </div>
        </div>

        <div className="absolute flex gap-2.5 top-[-100px] left-[140px]">
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
                "text-[12px]"
              )}
            >
              Bitget VOXEL Event Airdrop
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>04/21/2025</p>
          </div>
        </div>

        <div className="absolute flex gap-2.5 top-[-40px] left-[150px]">
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
                "text-[12px]"
              )}
            >
              JD Takeout Incident Airdrop
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>04/23/2025</p>
          </div>
        </div>

        <div className="absolute flex gap-2.5 top-[20px] left-[170px]">
          <div className="flex shrink-0 w-[48px] h-[48px] rounded-full bg-[var(--main-color)] items-center justify-center">
            <Image
              src={"/images/fair3.svg"}
              width={30}
              height={30}
              alt="Fair3 new brand launch"
            />
          </div>
          <div>
            <h1
              className={cn(
                titleStyle({ font: "kodchasan" }),
                "text-[12px]"
              )}
            >
              Fair3 new brand launch
            </h1>
            <p className={cn(normalTextStyle(), "mt-2.5")}>06/08/2025</p>
          </div>
        </div>
      </div>

      {/* 移动端购买链接 */}
      <div className="w-full px-4 mt-8">
        <h3 className={cn(titleStyle({ font: "kodchasan" }), "text-[18px] text-center mb-4")}>
          BUY $FAIR3 TODAY
        </h3>

        <div className="w-full px-4 mt-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/50">
            <p className="text-[11px] text-gray-600 text-center leading-relaxed">
              LEGAL DISCLAIMER: $FAIR3 is a crypto coin with no intrinsic value or expectation of financial return. 
              This website provides general information only and does not constitute personalized financial, investment, or legal advice.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          {companyIconList.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              className="flex items-center gap-2 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/80 transition-colors flex-1"
            >
              <Image src={item.src} width={24} height={24} alt={item.alt} />
              <span className={cn(normalTextStyle(), "text-[12px]")}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center mt-24">
        <div className="w-full max-w-sm mx-4 grid grid-cols-3 gap-8">
          {blockChainList.map((item) => (
            <Link
              href={item.link}
              target="_blank"
              key={item.link}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 mb-3 rounded-full overflow-hidden">
                <Image 
                  src={item.src} 
                  width={80} 
                  height={80} 
                  alt={item.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 移动端底部空间 */}
      <div className="h-6" />
    </div>
  );
}