import { createContext } from "react";
import { menuType } from "../types/menuType.ts";

interface type {
  menuState: menuType | undefined;
  setMenuState: (menuType: menuType) => void;
}

export const MenusContext = createContext<type>({
  menuState: undefined,
  setMenuState: () => {},
});
