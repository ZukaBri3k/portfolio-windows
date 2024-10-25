import { createPortal } from "react-dom";
import { WindowWrapper } from "@components/WindowWrapper.tsx";

export function WindowsWindow() {
  return createPortal(
    <WindowWrapper>
      <h1>Une fenêtre windows</h1>
    </WindowWrapper>,
    document.getElementById("window") as HTMLElement
  );
}
