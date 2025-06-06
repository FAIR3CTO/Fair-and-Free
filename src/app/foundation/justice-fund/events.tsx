"use client";
import useSWR from "swr";

import { fetcher } from "@/shared/fetcher";
import { EventResponse } from "@/shared/types";
import { EventCard } from "./event-card";

export function Events() {
  const { data, error, isLoading } = useSWR<EventResponse>(
    "/event/getSelectedEvents",
    fetcher
  );

  if (error) return <div>Error loading events</div>;
  if (isLoading) return <div>Loading...</div>;

  const { data: eventList = [] } = data || {};

  return eventList.map((event) => (
    <EventCard
      id={event.id}
      key={event.id}
      src={event.cover}
      title={event.title}
      description={event.description}
    />
  ));
}
