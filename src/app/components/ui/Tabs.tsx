"use client";

import { useState, useRef } from "react";
import clsx from "clsx";
import { cn } from "@/utils/cn";
import { queryObjects } from "v8";

type Tab = {
  name: string;
  url: string;
};

interface HoverStyle {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState<Tab>(tabs[0]);
  const [hoveredStyle, setHoveredStyle] = useState<HoverStyle>({});

  const [hovering, setHovering] = useState(false);
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const link = linksRef.current[index];
    if (link) {
      const rect = link.getBoundingClientRect();
      setHoveredStyle({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredStyle({});
  };

  return (
    <>
      <div
        className={cn(
          "bg-bunker-900 flex flex-row items items-center justify-center relative w-full"
        )}
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.name}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave()}
            ref={(el) => {
              linksRef.current[idx] = el;
            }}
            className="p-5 text-white-50"
          >
            {tab.name}
          </button>
        ))}

        {hoveredStyle.width && (
          <div
            className=""
            style={{
              width: hoveredStyle.width,
              height: hoveredStyle.height,
              transform: `translate(${hoveredStyle.left}px, ${hoveredStyle.top}px)`,
            }}
          />
        )}
      </div>
    </>
  );
}
