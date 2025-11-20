"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 h-full",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[400px] max-w-full shrink-0 border-2 border-[var(--military-border)] bg-[var(--military-base)] p-4 military-hover"
            key={item.name + idx}
          >
            <blockquote>
              {/* Corner Markers */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--military-accent)]"></div>
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--military-accent)]"></div>
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--military-accent)]"></div>
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--military-accent)]"></div>
              
              {/* Image */}
              {item.image && (
                <div className="relative w-full h-52 mb-3 border border-[var(--military-border)] overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    loading='lazy'
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                </div>
              )}
              
              <div className="relative z-20 mb-2 pb-2 border-b border-[var(--military-border)]">
                <h3 className="text-sm font-bold text-[var(--military-accent)] uppercase tracking-wide font-mono line-clamp-2">
                  {item.name}
                </h3>
              </div>
              
              <p className="relative z-20 text-xs leading-relaxed font-mono text-[var(--military-text)] line-clamp-3">
                {item.quote}
              </p>
              
              <div className="relative z-20 mt-3 flex items-center gap-2">
                <span className="text-[var(--military-tactical)] font-bold text-xs">&gt;&gt;</span>
                <span className="text-xs font-bold tracking-wider text-[var(--military-tactical)] uppercase">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
