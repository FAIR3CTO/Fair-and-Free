import Image from "next/image";
import Link from "next/link";

import { normalTextStyle, titleStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function EventListItem({
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
    <div
      className={
        "flex py-9 w-[1238px] h-[286px] gap-12 bg-[var(--card-bg-color)] rounded-[10px]"
      }
    >
      <Image
        className="ml-7"
        width={384}
        height={216}
        src={src}
        alt="event cover image"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}>
            {title}
          </h1>
          <p className={cn(normalTextStyle(), "mt-5")}>{description}</p>
        </div>
        <Button
          variant={"main"}
          className={cn(
            titleStyle({ font: "kodchasan" }),
            "text-[15px] font-normal bg-[#7c49ff] w-[140px] h-[50px] text-white"
          )}
        >
          <Link href={`/foundation/justice-fund/${id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}

export default EventListItem;
