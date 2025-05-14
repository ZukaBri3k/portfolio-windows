import { JSX } from "react";

export type windowType = { windowId: string, window: JSX.Element, icon?: string; };

export interface windowContextType {
  windows: windowType[];
  setWindows: React.Dispatch<React.SetStateAction<windowType[]>>;
}