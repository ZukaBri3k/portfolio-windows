import {DesktopIconWrapper} from "@/components/DesktopIconWrapper.tsx";
import FileExplorerIcon from "@/assets/icons/file-explorer.png";
import {useContext} from "react";
import {MenusContext} from "@/context/menusContext.ts";


export function FileExplorerDesktopIcon() {

  const {setMenuState} = useContext(MenusContext);

  return (
      <DesktopIconWrapper>
        <div
            className="absolute top-[100px] left-[100px] flex flex-col items-center justify-center hover:bg-slate-700/40 p-2 rounded">
          <div
              className="w-[64px] h-[64px]"
              onDoubleClick={() => {
                setMenuState((prev) => {
                  return {
                    ...prev,
                    fileExplorerMenu: {
                      ...prev.fileExplorerMenu,
                      open: true
                    }
                  };
                });
              }}
          >
            <img className="pointer-events-none" src={FileExplorerIcon} alt="file explorer icon"/>
          </div>
          <p className="text-slate-50">File explorer</p>
        </div>
      </DesktopIconWrapper>
  );
}
