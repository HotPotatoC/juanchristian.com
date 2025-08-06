"use client";
import * as React from "react";

type MenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const MenuContext = React.createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextType => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export default MenuProvider;
