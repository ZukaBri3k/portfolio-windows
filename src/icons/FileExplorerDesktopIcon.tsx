import { DesktopIconWrapper } from "@/components/DesktopIconWrapper.tsx";
import FileExplorerIcon from "@/assets/icons/file-explorer.png";
import { useContext, useRef } from "react";
import { MenusContext } from "@/context/menusContext.ts";
import { FolderContextualMenu } from "@/components/FolderContextualMenu";

export function FileExplorerDesktopIcon() {
  const { setMenuState } = useContext(MenusContext);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <DesktopIconWrapper>
        <div className="absolute top-2 left-2 flex flex-col items-center justify-center hover:bg-slate-700/40 p-2 rounded cursor-pointer" onDoubleClick={() => {
          setMenuState((prev) => {
            return {
              ...prev,
              fileExplorerMenu: {
                ...prev.fileExplorerMenu,
                open: true,
              },
            };
          });
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
