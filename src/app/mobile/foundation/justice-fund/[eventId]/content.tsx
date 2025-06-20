"use client";
import { fetcher } from "@/shared/fetcher";
import { Timer } from "./timer";
import useSWR from "swr";
import type { Event } from "@/shared/types";
import { cn } from "@/lib/utils";
import { normalTextStyle, titleStyle } from "@/shared/styles";

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
      <div className="h-[60vh] flex flex-col items-center justify-center px-4">
        <h1
          className={cn(
            titleStyle({ font: "kodchasan" }),
            "text-[18px] text-center"
          )}
        >
          Event not found
        </h1>
        <p className="text-[14px] text-gray-500 mt-2 text-center">
          The event you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-6 max-w-none">
      <div className="w-full text-[#353535]">
        <h1
          className={cn(
            titleStyle({ font: "kodchasan" }),
            "text-[20px] leading-tight mb-4"
          )}
        >
          {event.title}
        </h1>
        <Timer
          className={cn(normalTextStyle(), "text-[12px] text-gray-600")}
          utcTime={event.updateTime}
        />
        <div
          className={cn(
            normalTextStyle(),
            "mt-6 text-[14px] leading-relaxed",
            // 移动端内容样式
            "[&>h1]:text-[18px] [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:mt-6 [&>h1]:leading-tight",
            "[&>h2]:text-[16px] [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-5",
            "[&>h3]:text-[15px] [&>h3]:font-medium [&>h3]:mb-2 [&>h3]:mt-4",
            "[&>p]:mb-4 [&>p]:leading-relaxed",
            "[&>ul]:mb-4 [&>ul]:pl-4",
            "[&>ol]:mb-4 [&>ol]:pl-4",
            "[&>li]:mb-1",
            "[&>blockquote]:border-l-4 [&>blockquote]:border-purple-400 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-4",
            "[&>img]:w-full [&>img]:h-auto [&>img]:mb-4 [&>img]:rounded",
            "[&>a]:text-purple-600 [&>a]:underline",
            "break-words"
          )}
          dangerouslySetInnerHTML={{ __html: event.rawContent }}
        />
      </div>
    </div>
  );
}
