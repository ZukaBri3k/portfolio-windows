import { createContext } from "react";

interface type {
  focusedWindow: string | undefined;
  setFocusedWindow: (window: string) => void;
}

export const FocusContext = createContext<type>({
  focusedWindow: undefined,
  setFocusedWindow: () => {},
})