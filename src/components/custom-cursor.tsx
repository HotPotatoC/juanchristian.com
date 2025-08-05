"use client";

import { useEventListener } from "@/hooks/useEventListener";
import useExpoEaseInOutTransition from "@/hooks/useExpoEaseInOutTransition";
import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/lib/common";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  // showArrow a right arrow
  const [showArrow, setShowArrow] = useState(false);
  // showOutArrow is used for showing an up right arrow when the cursor is hovered on a link
  // that leads to an external website
  const [showOutArrow, setShowOutArrow] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const [x, y] = useMousePosition();
  const transition = useExpoEaseInOutTransition({ duration: 0.5, delay: 0 });

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

        // if data-cursor-out-arrow is true, show an up right arrow
        if (el instanceof HTMLElement && el.dataset.cursorOutArrow === "true") {
          setShowOutArrow(true);
        } else {
          setShowOutArrow(false);
        }

        // if data-cursor-hide-arrow is true or data-cursor-out-arrow is true, hide the arrow
        if (
          el instanceof HTMLElement &&
          (el.dataset.cursorHideArrow === "true" ||
            el.dataset.cursorOutArrow === "true")
        ) {
          setShowArrow(false);
        } else {
          setShowArrow(true);
        }
      });
      el.addEventListener("mouseleave", () => {
        setIsActive(false);
        setShowArrow(false);
        setShowOutArrow(false);
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

          // if data-cursor-out-arrow is true, show an up right arrow
          if (
            el instanceof HTMLElement &&
            el.dataset.cursorOutArrow === "true"
          ) {
            setShowOutArrow(true);
          } else {
            setShowOutArrow(false);
          }

          // if data-cursor-hide-arrow is true or data-cursor-out-arrow is true, hide the arrow
          if (
            el instanceof HTMLElement &&
            (el.dataset.cursorHideArrow === "true" ||
              el.dataset.cursorOutArrow === "true")
          ) {
            setShowArrow(false);
          } else {
            setShowArrow(true);
          }
        });
        el.addEventListener("mouseleave", () => {
          setIsActive(false);
          setShowArrow(false);
          setShowOutArrow(false);
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

  return (
    <div
      className={cn(
        "overflow-hidden mix-blend-difference opacity-0 animate-[spin_2s_linear_infinite] pointer-events-none fixed z-[1000] transform -translate-x-1/2 -translate-y-1/2 p-2 hidden lg:block bg-white [transition:opacity_300ms,scale_250ms] ease-in-out-expo",
        isActive && [
          "opacity-100",
          showArrow || showOutArrow ? "scale-[7]" : "scale-[4]",
        ],
        isClicked && "scale-[3]"
      )}
      style={posStyle}
    ></div>
  );
};

export default CustomCursor;
