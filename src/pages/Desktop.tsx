import {Taskbar} from "@/components/Taskbar";
import {useState} from "react";
import {WindowsWindow} from "@/windows/WindowsWindow.tsx";
import {menuType} from "../types/menuType.ts";
import {MenusContext} from "../context/menusContext.ts";
import {FileExplorer} from "@/windows/FileExplorer.tsx";


export default function Desktop() {
  const [menuState, setMenuState] = useState<menuType>({
    windowsMenu: {
      open: false,
      component: <WindowsWindow/>,
    },
    fileExplorerMenu: {
      open: false,
      component: <FileExplorer/>,
    }
  });

  return (
      <MenusContext.Provider value={{menuState, setMenuState}}>
        <div className="w-fit h-fit overflow-x-hidden overflow-y-hidden">
          <div
              className="bg-wallpaper bg-no-repeat bg-cover w-dvw h-dvh"
              id="window"
          >
            <Taskbar/>
          </div>
          {menuState.windowsMenu.open && menuState.windowsMenu.component}
          {menuState.fileExplorerMenu.open && menuState.fileExplorerMenu.component}
        </div>
      </MenusContext.Provider>
  );
}
