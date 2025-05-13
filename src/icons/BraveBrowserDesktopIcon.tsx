import { DesktopIconWrapper } from "@/components/DesktopIconWrapper.tsx";
import BraverBrowserIcon from "@/assets/icons/brave-browser.png";
import { useContext, useRef } from "react";
import { FolderContextualMenu } from "@/components/FolderContextualMenu";
import { WindowsContext } from "@/context/windowsContext";
import { BraveBrowser } from "@/windows/BraveBrowser";


export function BraveBrowserDesktopIcon() {
  const {setWindows} = useContext(WindowsContext)
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <DesktopIconWrapper>
        <div className="absolute top-2 left-28 flex flex-col items-center justify-center hover:bg-slate-700/40 p-2 rounded cursor-pointer" onDoubleClick={() => {
          const windowId = Date.now().toString();
          setWindows((prev) => [...prev, {windowId, window: <BraveBrowser key={windowId} windowId={windowId} /> }])
        }}
          ref={ref}
        >
          <div
            className="w-[64px] h-[64px]"
          >
            <img
              className="pointer-events-none"
              src={BraverBrowserIcon}
              alt="file explorer icon"
            />
          </div>
          <p className="text-slate-50">Brave Browser</p>
        </div>
      </DesktopIconWrapper>
      <FolderContextualMenu handleRef={ref} />
    </>
  );
}
