import { DesktopIconWrapper } from "@/components/DesktopIconWrapper.tsx";
import FileExplorerIcon from "@/assets/icons/file-explorer.png";
import { useRef } from "react";
import { FolderContextualMenu } from "@/components/FolderContextualMenu";
import { useCreateWindow } from "@/hooks/useCreateWindow";

export function FileExplorerDesktopIcon() {
  const {createFileExplorerWindow} = useCreateWindow()
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <DesktopIconWrapper>
        <div className="absolute top-2 left-2 flex flex-col items-center justify-center hover:bg-slate-700/40 p-2 rounded cursor-pointer" onDoubleClick={() => {
          createFileExplorerWindow()
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
