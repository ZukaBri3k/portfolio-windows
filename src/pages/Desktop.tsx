import { Taskbar } from "@/components/Taskbar";
import { useState } from "react";
import { StartWindow } from "@/windows/WindowsWindow.tsx";
import { FileExplorerDesktopIcon } from "@/icons/FileExplorerDesktopIcon.tsx";
import { RectDesktop } from "@/components/RectDesktop.tsx";
import { BraveBrowserDesktopIcon } from "@/icons/BraveBrowserDesktopIcon.tsx";
import { FocusContext } from "@/context/focusContext.ts";
import { WindowsContext } from "@/context/windowsContext.ts";
import { windowType } from "@/types/window.type";

export default function Desktop() {
  const [focusedWindow, setFocusedWindow] = useState<string | undefined>(undefined);
  const [windows, setWindows] = useState<windowType[]>([]);
  const [isStartWindowDisplayed, setIsStartWindowDisplayed] = useState(false);

  return (
    <WindowsContext.Provider value={{setWindows, windows}}>
      <FocusContext.Provider value={{ focusedWindow, setFocusedWindow }}>
          <div className="w-fit h-fit overflow-x-hidden overflow-y-hidden z-1">
            <div
              className="bg-wallpaper bg-no-repeat bg-cover w-dvw h-dvh z-[-1]"
              id="window"
            >
              <RectDesktop />
              <FileExplorerDesktopIcon />
              <BraveBrowserDesktopIcon />
            </div>
            <Taskbar setStartWindow={setIsStartWindowDisplayed} />
          {isStartWindowDisplayed && <StartWindow setIsOpen={setIsStartWindowDisplayed} />}
            {windows.map((window) => (
              window.window
            ))}
          </div>
      </FocusContext.Provider>
    </WindowsContext.Provider>
  );
}
