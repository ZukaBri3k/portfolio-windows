import { createContext } from "react";

interface type {
  windows: {windowId: string, window: JSX.Element}[];
  setWindows: React.Dispatch<React.SetStateAction<{ windowId: string, window: JSX.Element; }[]>>;
}

export const WindowsContext = createContext<type>({
  windows: [],
  setWindows: () => {}
})