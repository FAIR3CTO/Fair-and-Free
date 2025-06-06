import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Nav from "./nav";
import { ContactLink } from "@/shared/contact-link";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Back Builders. Defend Justice. Own the Future.",
  description:
    "Join FAIR3, a community-driven Web3 project redefining fairness in tech, economy, and society. Explore our funds, governance, and global impact.",
  keywords: [
    "FAIR³",
    "FAIR3",
    "tech",
    "fairness",
    "economic equity",
    "social justice",
    "Web3",
    "DAO",
    "community governance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.3]"
          style={{
            backgroundImage: `url('/images/background.svg')`,
            zIndex: -10,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, white 65%,transparent)`,
            zIndex: -5,
          }}
        />
        <header
          className={
            "flex relative w-full h-[108px] justify-center text-[var(--normal-text-color)] bg-[var(--bg-header-color)] backdrop-blur-[3.8px] z-50"
          }
        >
          <div className={"w-[1440px] flex justify-around items-center"}>
            <Link href={"/"}>
              <Image
                className={"mt-1"}
                src={"/images/header-logo.svg"}
                width={155}
                height={81}
                alt={"fair3 logo"}
              />
            </Link>
            <Nav />
            <ContactLink
              Xlink={"https://x.com/Fair3_community"}
              telegramCNLink={"https://t.me/Fair3_Chinese"}
              githubLink={"https://github.com/FAIR3CTO/Fair-and-Free"}
              gitbookLink={"https://fair3.gitbook.io/fair3"}
            />
          </div>
        </header>
        <div>{children}</div>
        <footer className="flex justify-center mt-[110px] pb-11">
          <div className="flex 2xl:w-[1440px] 2xl:mx-0 mx-24 w-full justify-between items-end text-[#353535] text-[15px] font-normal">
            <div>
              <h3 className={"font-[Konkhmer Sleokchher] text-[48px]"}>
                FAIR3
              </h3>
              <div className={"mt-8"}>
                © 2025 FAIR3 Community. All rights reserved.
              </div>
            </div>
            <div>
              <h3
                className={"font-bold font-[Kodchasan] text-[20px] text-[#000]"}
              >
                Contact Us
              </h3>
              <div className="flex mt-7">
                <Link
                  href={"https://t.me/ElaraFair3Community"}
                  target="_blank"
                  className="flex items-center"
                >
                  <Image
                    src={"/images/telegram.svg"}
                    width={20}
                    height={18}
                    alt={"Telegram CN Link"}
                  />
                  <span className={"ml-2.5 text-[#000]"}>
                    @ElaraFair3Community
                  </span>
                </Link>
              </div>
              <div className="flex mt-7">
                <Link
                  href={"https://t.me/KieranFair3Community"}
                  target="_blank"
                  className="flex items-center"
                >
                  <Image
                    src={"/images/telegram.svg"}
                    width={20}
                    height={18}
                    alt={"Telegram CN Link"}
                  />
                  <span className={"ml-2.5 text-[#000]"}>
                    @KieranFair3Community
                  </span>
                </Link>
              </div>
              <ContactLink className={"mt-7"} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
