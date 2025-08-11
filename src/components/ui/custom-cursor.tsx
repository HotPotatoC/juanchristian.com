"use client";

import { useEventListener } from "@/hooks/use-event-listener";
import { useIsMobile } from "@/hooks/use-mobile";
import useMousePosition from "@/hooks/use-mouse-position";
import { cn } from "@/lib/common";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const [x, y] = useMousePosition();

  const onMouseUp = () => setIsClicked(false);
  const onMouseDown = () => setIsClicked(true);

  useEventListener("mousedown", onMouseDown);
  useEventListener("mouseup", onMouseUp);

  useEffect(() => {
    const linkEls = document.querySelectorAll(["a", "span[href]"].join(", "));

    const otherEls = document.querySelectorAll(
      ["button", ".expand-cursor"].join(", ")
    );

    // arrows are automatically shown when the cursor is hovered on a link
    // unless the link has data-hide-arrow attribute
    linkEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        // if data-cursor-hide is true, hide the cursor
        if (el instanceof HTMLElement && el.dataset.cursorHide === "true") {
          setIsActive(false);
        } else {
          setIsActive(true);
        }
      });
      el.addEventListener("mouseleave", () => {
        setIsActive(false);
      });
    });

    otherEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        // if data-hide-cursor is true, hide the cursor
        if (el instanceof HTMLElement && el.dataset.hideCursor === "true") {
          setIsActive(false);
        } else {
          setIsActive(true);
        }
      });
      el.addEventListener("mouseleave", () => setIsActive(false));
    });

    return () => {
      // arrows are automatically shown when the cursor is hovered on a link
      // unless the link has data-hide-arrow attribute
      linkEls.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          // if data-cursor-hide is true, hide the cursor
          if (el instanceof HTMLElement && el.dataset.cursorHide === "true") {
            setIsActive(false);
          } else {
            setIsActive(true);
          }
        });
        el.addEventListener("mouseleave", () => {
          setIsActive(false);
        });
      });

      otherEls.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (el instanceof HTMLElement && el.dataset.hideCursor === "true") {
            setIsActive(false);
          } else {
            setIsActive(true);
          }
        });
        el.addEventListener("mouseleave", () => setIsActive(false));
      });
    };
  }, [isActive, pathname]);

  const posStyle: React.CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
  };

  return !isMobile ? (
    <>
      <div
        className={cn(
          "overflow-hidden mix-blend-color-dodge opacity-0 animate-[spin_2s_linear_infinite] pointer-events-none fixed z-[1000] transform -translate-x-1/2 -translate-y-1/2 p-2 hidden lg:block bg-red [transition:opacity_300ms,scale_250ms] ease-in-out-expo",
          isActive && "opacity-100 scale-[6]",
          isClicked && "scale-[3]"
        )}
        style={posStyle}
      />
      <div
        className={cn(
          "overflow-hidden mix-blend-difference opacity-0 animate-[spin_1s_linear_infinite] pointer-events-none fixed z-[1001] transform -translate-x-1/2 -translate-y-1/2 p-2 hidden lg:block bg-red [transition:opacity_300ms,scale_250ms,border-radius_250ms] ease-in-out-expo",
          isActive && "opacity-100 scale-[4]",
          isClicked && "scale-[2.5] rounded-full"
        )}
        style={posStyle}
      />
    </>
  ) : (
    <></>
  );
};

export default CustomCursor;
