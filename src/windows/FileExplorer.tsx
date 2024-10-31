import {createPortal} from "react-dom";
import {WindowWrapper} from "@/components/WindowWrapper.tsx";


export function FileExplorer() {
  return createPortal(
      <WindowWrapper title="File explorer" window="fileExplorerMenu">
        <div className="w-full h-full flex flex-col">
          <div className="h-14 bg-stone-800/75 w-full">

          </div>
          <div className="h-full w-full bg-stone-900 border-t-[0.5px] border-t-slate-600"></div>
        </div>
      </WindowWrapper>, document.getElementById("window") as HTMLElement);
}
