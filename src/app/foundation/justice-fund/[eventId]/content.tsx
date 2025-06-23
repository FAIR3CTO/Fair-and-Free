"use client";
import { fetcher } from "@/shared/fetcher";
import { Timer } from "./timer";
import useSWR from "swr";

import { cn } from "@/lib/utils";

import type { Event } from "@/shared/types";

type EventDetail = {
  data: Event;
  message: string;
  code: number;
  success: boolean;
};

export function EventContent({ eventId }: { eventId: string }) {
  const { data, error, isLoading } = useSWR<EventDetail>(
    `/event/getEventDetail/${eventId}`,
    fetcher
  );

  if (error) return <div>Error loading event details</div>;
  if (isLoading) return <div />;
  const { data: event } = data || {};

  if (!event) {
    return (
      <div className="h-[60vh] flex flex-col items-center mt-20">
        <h1 className="text-2xl">Event not found</h1>
      </div>
    );
  }

  return (
    <div
      className={"2xl:w-[1440px] text-[#353535] mt-18 font-normal text-[15px]"}
    >
      <h1 className={"font-[Kodchasan] font-bold text-[24px]"}>
        {event.title}
      </h1>
      <Timer className="mt-5" utcTime={event.updateTime} />
      <div
        className={cn(
          "mt-9",
          "[&>h1]:text-[18px] [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:mt-6 [&>h1]:leading-tight",
          "[&>h2]:text-[16px] [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-5",
          "[&>h3]:text-[15px] [&>h3]:font-medium [&>h3]:mb-2 [&>h3]:mt-4",
          "[&>p]:mb-2 [&>p]:leading-relaxed",
          "[&>ul]:mb-4 [&>ul]:pl-4 [&>ul]:list-disc",
          "[&>ol]:mb-4 [&>ol]:pl-4 [&>ol]:list-decimal",
          "[&>li]:mb-1",
          "[&>blockquote]:border-l-4 [&>blockquote]:border-purple-400 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-4",
          "[&>img]:w-full [&>img]:h-auto [&>img]:mb-4 [&>img]:rounded",
          "[&>a]:text-purple-600 [&>a]:underline",
          "break-words"
        )}
        dangerouslySetInnerHTML={{ __html: event.rawContent }}
      />
    </div>
  );
}
