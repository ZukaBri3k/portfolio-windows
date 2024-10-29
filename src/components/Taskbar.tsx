import Windows from "@/assets/images/logo_windows.png";
import {Bell, ChevronUp, Search, Volume2, Wifi} from "lucide-react";
import {useContext} from "react";
import {WindowsWindow} from "@/windows/WindowsWindow.tsx";
import FileExplorer from "@/assets/icons/file-explorer.png";
import {MenusContext} from "@/context/menusContext.ts";


export function Taskbar() {

  const {setMenuState, menuState} = useContext(MenusContext);

  return (
      <div
          className="fixed bottom-0 flex h-fit w-full items-center justify-center gap-3 border-t-2 border-slate-700 pt-1 pb-1 backdrop-blur-sm bg-slate-800/85 z-50">
        <div className="absolute m-auto flex h-full w-fit items-center justify-center gap-3">
          <button
              className="rounded-md p-2 duration-100 ease-in hover:border-slate-300/60 hover:bg-slate-700/40"
              onClick={() =>
                  setMenuState((prev) => {
                    return {
                      ...prev,
                      windowsMenu: {
                        open: !prev.windowsMenu.open,
                        component: <WindowsWindow/>,
                      },
                    };
                  })
              }
          >
            <img
                src={Windows}
                alt="Windows logo"
                className="pointer-events-none brightness-95 saturate-200 w-[30px]"
            />
          </button>
          <div
              className="flex w-fit items-center justify-start gap-3 rounded-full border-t-2 border-slate-300/10 bg-slate-700/60 p-2 duration-100 ease-in h-[75%] hover:bg-slate-700/90">
            <Search size={20} color="#E2E8F0" strokeWidth={1.5}/>
            <input
                type="text"
                placeholder="Rechercher"
                className="bg-transparent text-slate-300 outline-none"
            />
          </div>
          <button
              className={`h-fit w-fit hover:bg-slate-700/40 p-2 rounded duration-100 ease-in ${menuState?.fileExplorerMenu.open ? "bg-slate-700/50 hover:bg-slate-700/70 border-[0.5px] border-slate-600/50" : ""}`}
              onClick={() => {
                setMenuState((prev) => {
                  return {
                    ...prev,
                    fileExplorerMenu: {
                      open: true,
                      component: prev.fileExplorerMenu.component,
                    },
                  };
                });
              }}>
            <img src={FileExplorer} alt="File explorer" className="w-[32px] h-[32px]"/>
          </button>
        </div>
        <div className="flex flex-row items-center justify-end gap-3 w-[100%]">
          <ChevronUp
              size={26}
              color="#E2E8F0"
              strokeWidth={1.5}
              className="cursor-pointer rounded-md p-1 duration-100 ease-in hover:border-slate-300/60 hover:bg-slate-700/40"
          />
          <Wifi
              size={26}
              strokeWidth={1.5}
              color="#E2E8F0"
              className="cursor-pointer rounded-md p-1 duration-100 ease-in hover:border-slate-300/60 hover:bg-slate-700/40"
          />
          <Volume2
              size={26}
              strokeWidth={1.5}
              color="#E2E8F0"
              className="cursor-pointer rounded-md p-1 duration-100 ease-in hover:border-slate-300/60 hover:bg-slate-700/40"
          />
          <div className="cursor-pointer rounded-md p-1 duration-100 ease-in hover:bg-slate-700/40">
            <p className="text-center text-sm text-slate-200">
              {new Date().toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-center text-sm text-slate-200">
              {new Date().toLocaleDateString("fr-US")}
            </p>
          </div>
          <Bell
              size={26}
              strokeWidth="1.5px"
              color="#E2E8F0"
              className="mr-2 cursor-pointer rounded-md p-1 duration-100 ease-in hover:border-slate-300/60 hover:bg-slate-700/40"
          />
        </div>
      </div>
  );
}
