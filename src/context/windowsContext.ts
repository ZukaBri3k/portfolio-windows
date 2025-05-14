import { windowContextType } from "@/types/window.type";
import { createContext } from "react";

export const WindowsContext = createContext<windowContextType>({
  windows: [],
  setWindows: () => {}
})