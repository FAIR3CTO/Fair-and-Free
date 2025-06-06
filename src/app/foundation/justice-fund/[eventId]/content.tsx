"use client";
import { fetcher } from "@/shared/fetcher";
import { Timer } from "./timer";
import useSWR from "swr";
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
        className="mt-9"
        dangerouslySetInnerHTML={{ __html: event.rawContent }}
      />
    </div>
  );
}
