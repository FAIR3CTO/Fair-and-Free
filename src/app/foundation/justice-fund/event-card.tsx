"use client";

import { useState } from "react";
import Image from "next/image";
import { cva } from "class-variance-authority";
import Link from "next/link";

const style = cva(
  "w-[290px] rounded-[10px] bg-[var(--card-bg-color)] p-6 text-[var(--selected-text-color)] transition-all hover:bg-[#9A71FFCC]",
  {
    variants: {
      show: {
        true: "h-[290px]",
        false: "h-[228px]",
      },
    },
  }
);

export function EventCard({
  noDesc = false,
  src,
  title,
  description,
  id,
  noAnimate = true,
}: {
  noDesc?: boolean;
  src: string;
  title: string;
  description: string;
  id: number;
  noAnimate?: boolean;
}) {
  const [show, setShow] = useState(!noDesc);

  const renderDescription = () => {
    if (show) {
      return (
        <p
          className={
            "font-[Inter] font-medium text-[12px] mt-4 overflow-hidden text-ellipsis line-clamp-3"
          }
          title={description}
        >
          {description}
        </p>
      );
    }
  };

  const handleMouseEnter = () => {
    if (!noAnimate) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (!noAnimate) {
      setShow(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid var(--card-border-color)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={style({ show })}
    >
      <Link href={`/foundation/justice-fund/${id}`}>
        <Image src={src} width={240} height={134} alt={"event cover pic"} />
      </Link>
      <h1 className={"font-[Inter] font-extrabold text-[16px] mt-4"}>
        {title}
      </h1>
      {renderDescription()}
    </div>
  );
}

export default EventCard;
