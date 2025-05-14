
import { BraveBrowser } from "@/windows/BraveBrowser";
import { FileExplorer } from "@/windows/FileExplorer";
import FileExplorerIcon from "@/assets/icons/file-explorer.png";
import BraveBrowserIcon from  "@/assets/icons/brave-browser.png";
import { windowType } from "@/types/window.type";

export function useCreateWindow(setWindows: React.Dispatch<React.SetStateAction<windowType[]>>) {

  function createFileExplorerWindow() {
    const windowId = Date.now().toString();   
    setWindows((prev) => [
      ...prev,
      { windowId, window: <FileExplorer key={windowId} windowId={windowId} />, icon: FileExplorerIcon, isMinimized: false },
    ]);
  }

  function createBraveBrowserWindow() {
    const windowId = Date.now().toString();
    setWindows((prev) => [
      ...prev,
      { windowId, window: <BraveBrowser key={windowId} windowId={windowId} />, icon: BraveBrowserIcon, isMinimized: false },
    ]);
  }

  return { createFileExplorerWindow, createBraveBrowserWindow };
}