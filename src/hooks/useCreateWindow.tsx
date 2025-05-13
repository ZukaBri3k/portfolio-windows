import { WindowsContext } from "@/context/windowsContext";
import { BraveBrowser } from "@/windows/BraveBrowser";
import { FileExplorer } from "@/windows/FileExplorer";
import { useContext } from "react";

export function useCreateWindow() {
  const { setWindows } = useContext(WindowsContext);

  function createFileExplorerWindow() {
    const windowId = Date.now().toString();
    setWindows((prev) => [
      ...prev,
      { windowId, window: <FileExplorer key={windowId} windowId={windowId} /> },
    ]);
  }

  function createBraveBrowserWindow() {
    const windowId = Date.now().toString();
    setWindows((prev) => [
      ...prev,
      { windowId, window: <BraveBrowser key={windowId} windowId={windowId} /> },
    ]);
  }

  return { createFileExplorerWindow, createBraveBrowserWindow };
}