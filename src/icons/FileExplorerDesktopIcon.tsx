import { DesktopIconWrapper } from "@/components/DesktopIconWrapper.tsx";
import FileExplorerIcon from "@/assets/icons/file-explorer.png";
import { useContext, useRef } from "react";
import { FolderContextualMenu } from "@/components/FolderContextualMenu";
import { WindowsContext } from "@/context/windowsContext";
import { FileExplorer } from "@/windows/FileExplorer";

export function FileExplorerDesktopIcon() {
  const {setWindows} = useContext(WindowsContext)
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <DesktopIconWrapper>
        <div className="absolute top-2 left-2 flex flex-col items-center justify-center hover:bg-slate-700/40 p-2 rounded cursor-pointer" onDoubleClick={() => {
          const windowId = Date.now().toString();
          setWindows((prev) => [...prev, {windowId, window: <FileExplorer key={windowId} windowId={windowId} /> }])
        }}
          ref={ref}
        >
          <div
            className="w-[64px] h-[64px]"
          >
            <img
              className="pointer-events-none"
              src={FileExplorerIcon}
              alt="file explorer icon"
            />
          </div>
          <p className="text-slate-50">File explorer</p>
        </div>
      </DesktopIconWrapper>
      <FolderContextualMenu handleRef={ref} />
    </>
  );
}
