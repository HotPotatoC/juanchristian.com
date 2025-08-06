"use client";
import * as React from "react";

type FrameOverlayContextType = {
  isOverlayVisible: boolean;
  toggleOverlay: () => void;
  expandOverlay: () => void;
  closeOverlay: () => void;
  frameSize: string;
  setFrameSize: (size: string) => void;
};

const FrameOverlayContext = React.createContext<
  FrameOverlayContextType | undefined
>(undefined);

export const FrameOverlayProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(true);

  const toggleOverlay = () => {
    setIsOverlayVisible((prev) => !prev);
  };

  const expandOverlay = () => {
    setIsOverlayVisible(true);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  const [frameSize, _setFrameSize] = React.useState("20px");

  const setFrameSize = (size: string) => {
    _setFrameSize(size);
  };

  return (
    <FrameOverlayContext.Provider
      value={{
        isOverlayVisible,
        toggleOverlay,
        expandOverlay,
        closeOverlay,
        frameSize,
        setFrameSize,
      }}
    >
      {children}
    </FrameOverlayContext.Provider>
  );
};

export const useFrameOverlay = (): FrameOverlayContextType => {
  const context = React.useContext(FrameOverlayContext);
  if (!context) {
    throw new Error(
      "useFrameOverlay must be used within a FrameOverlayProvider"
    );
  }
  return context;
};
