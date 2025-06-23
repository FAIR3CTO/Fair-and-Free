import { BackgroundBlur } from "@/shared/background-blur";
import { EventContent } from "./content";

// compat cloudflare worker
export const runtime = "edge";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  return (
    <div className="flex relative flex-col items-center overflow-x-hidden">
      <BackgroundBlur
        top={-525}
        right={-115}
        style={{ top: "-525px", right: "-115px" }}
      />
      <EventContent eventId={eventId} />
    </div>
  );
}
