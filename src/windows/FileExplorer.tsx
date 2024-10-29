import {createPortal} from "react-dom";
import {WindowWrapper} from "@/components/WindowWrapper.tsx";


export function FileExplorer() {
  return createPortal(
      <WindowWrapper title="File explorer" window="fileExplorerMenu">
        <div className="w-full h-full bg-stone-400">
          <h1>Hello world !</h1>
        </div>
      </WindowWrapper>, document.getElementById("window") as HTMLElement);
}
