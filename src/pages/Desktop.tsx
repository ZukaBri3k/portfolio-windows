import { Taskbar } from "@/components/Taskbar";
import { useState } from "react";
import { StartWindow } from "@/windows/WindowsWindow.tsx";
import { RectDesktop } from "@/components/RectDesktop.tsx";
import { FocusContext } from "@/context/focusContext.ts";
import { WindowsContext } from "@/context/windowsContext.ts";
import { windowType } from "@/types/window.type";
import { useCreateWindow } from "@/hooks/useCreateWindow";
import { DesktopIcon } from "@/components/DesktopIcon";
import FileExplorerIcon from "@/assets/icons/file-explorer.png";
import BraveBrowserIcon from "@/assets/icons/brave-browser.png";

export default function Desktop() {
  const [focusedWindow, setFocusedWindow] = useState<string | undefined>(undefined);
  const [windows, setWindows] = useState<windowType[]>([]);
  const [isStartWindowDisplayed, setIsStartWindowDisplayed] = useState(false);
  const { createFileExplorerWindow, createBraveBrowserWindow } = useCreateWindow(setWindows);

  return (
    <WindowsContext.Provider value={{ setWindows, windows }}>
      <FocusContext.Provider value={{ focusedWindow, setFocusedWindow }}>
        <div className="w-fit h-fit overflow-x-hidden overflow-y-hidden z-1">
          <div
            className="bg-wallpaper bg-no-repeat bg-cover w-dvw h-dvh z-[-1]"
            id="window"
          >
            <RectDesktop />
            <DesktopIcon createWindowFunction={createFileExplorerWindow} icon={FileExplorerIcon} text="File explorer" position={{x: 2, y: 2}} />
            <DesktopIcon createWindowFunction={createBraveBrowserWindow} icon={BraveBrowserIcon} text="Brave Browser" position={{ x: 130, y: 2 }} />
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
