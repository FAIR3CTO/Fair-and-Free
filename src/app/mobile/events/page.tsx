"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

import { titleStyle, normalTextStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";
import { fetcher } from "@/shared/fetcher";
import { Button } from "@/components/ui/button";
import type { EventResponse } from "@/shared/types";

// 移动端事件卡片组件
function MobileEventCard({
  id,
  src,
  title,
  description,
}: {
  id: number;
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:shadow-lg transition-all duration-200">
      <Link href={`/foundation/justice-fund/${id}`}>
        <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
          <Image src={src} fill className="object-cover" alt={title} />
        </div>
      </Link>
      <h3
        className={cn(
          titleStyle({ font: "kodchasan" }),
          "text-[16px] font-bold mb-2 line-clamp-2"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          normalTextStyle(),
          "text-[13px] text-[#64636A] leading-relaxed line-clamp-3 mb-4"
        )}
      >
        {description}
      </p>
      <Button
        variant="outline"
        className="w-full rounded-lg border-[#9971FF] text-[#9971FF] hover:bg-[#9971FF]/10"
      >
        <Link
          href={`/foundation/justice-fund/${id}`}
          className="text-[13px] font-medium"
        >
          View Details
        </Link>
      </Button>
    </div>
  );
}

// 移动端事件页面骨架屏
function MobileEventsSkeleton() {
  return (
    <div className="bg-white/60 rounded-xl p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded-lg"></div>
    </div>
  );
}

export default function MobileEventsPage() {
  const [count, setCount] = useState(6);
  const { data, isLoading, error } = useSWR<EventResponse>(
    "/event/getAllEvents",
    fetcher
  );

  const { data: events = [] } = data || {};

  if (error) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center text-[#353535] min-h-screen">
      <div className="w-full px-4 mt-6">
        <div className="w-full max-w-md mx-auto">
          {isLoading ? (
            <MobileEventsSkeleton />
          ) : events.length === 0 ? (
            <div></div>
          ) : (
            <>
              <div className="space-y-6">
                {events.slice(0, count).map((event) => (
                  <MobileEventCard
                    key={event.id}
                    id={event.id}
                    src={event.cover}
                    title={event.title}
                    description={event.description}
                  />
                ))}
              </div>

              {count < events.length && (
                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCount((prev) => prev + 6)}
                    className="flex items-center gap-2 border-[#9971FF] text-[#9971FF] hover:bg-[#9971FF]/10 rounded-full px-6 py-2"
                  >
                    <span className="text-[14px]">View More</span>
                    <ChevronDown size={16} />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
