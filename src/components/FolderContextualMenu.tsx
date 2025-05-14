import { RefObject, useContext } from "react";
import { ContextualMenuWrapper } from "./ContextualMenuWrapper";
import FileExplorerIcon from "@/assets/icons/file-explorer.png";
import OpenInNewTabIcon from "@/assets/icons/open-in-new-tab.png";
import { ChevronRight, Cloud, Star } from "lucide-react";
import PinIcon from "@/assets/icons/pin.png";
import ZipIcon from "@/assets/icons/zip-icon.png";
import CopyPathIcon from "@/assets/icons/copy-path.png";
import PropertiesIcon from "@/assets/icons/properties.png";
import OneDriveIcon from "@/assets/icons/one-drive.png";
import CloudDownloadIcon from "@/assets/icons/cloud-download.png";
import TerminalIcon from "@/assets/icons/terminal.png";
import MoreOptionsIcon from "@/assets/icons/more-options.png";
import CutIcon from "@/assets/icons/cut.png";
import CopyIcon from "@/assets/icons/copy.png";
import RenameIcon from "@/assets/icons/rename.png";
import ShareIcon from "@/assets/icons/share.png";
import { useCreateWindow } from "@/hooks/useCreateWindow";
import { WindowsContext } from "@/context/windowsContext";

interface props {
  handleRef: RefObject<HTMLDivElement>;
}

export function FolderContextualMenu({ handleRef }: props) {
  const { setWindows } = useContext(WindowsContext)
  const {createFileExplorerWindow} = useCreateWindow(setWindows)

  return (
    <ContextualMenuWrapper handleRef={handleRef}>
      <div className="absolute w-[300px] h-fit bg-slate-800/80 backdrop-blur rounded-lg shadow-lg border-[1px] border-slate-700">
        <div className="flex flex-col text-slate-50">
          <div className="flex justify-start items-center pl-3 p-1 gap-4">
            <img src={CutIcon} alt="Cut icon" className="w-[40px] hover:bg-slate-700/70 p-2 cursor-pointer rounded" />
            <img src={CopyIcon} alt="Copy icon" className="w-[38px]  hover:bg-slate-700/70 p-2 cursor-pointer rounded" />
            <img src={RenameIcon} alt="Rename icon" className="w-[38px]  hover:bg-slate-700/70 p-2 cursor-pointer rounded" />
            <img src={ShareIcon} alt="Rename icon" className="w-[38px]  hover:bg-slate-700/70 p-2 cursor-pointer rounded" />
          </div>

          <hr className="border-slate-600/80" />

          <div className="flex justify-between items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <div className="flex justify-start items-center gap-2">
              <img src={FileExplorerIcon} alt="File explorer icon" className="w-[26px]" />
              <button className="contextualMenuFonctionalButton p-2" onClick={() => {
                createFileExplorerWindow()
              }}>Open</button>
            </div>
            <p className="mr-2 text-slate-400 text-sm">Enter</p>
          </div>
          <div className="flex justify-start items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <img src={OpenInNewTabIcon} alt="Open in new window icon" className="w-[26px]" />
            <button className="p-2">Open in new window</button>
          </div>
          <div className="flex justify-start items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <Star size={26} style={{ color: "#59a6d2" }} />
            <button className="p-2">Pin to quick access</button>
          </div>
          <div className="flex justify-start items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <img src={PinIcon} alt="Pin to start icon" className="w-[23px]" />
            <button className="p-2">Pin to start</button>
          </div>
          <div className="flex justify-start items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <img src={ZipIcon} alt="ZIP icon" className="w-[23px]" />
            <button className="p-2">Compress to ZIP file</button>
          </div>
          <div className="flex justify-start items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <img src={CopyPathIcon} alt="Copy path icon" className="w-[23px]" />
            <button className="p-2">Copy as path</button>
          </div>
          <div className="flex justify-between items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <div className="flex justify-start items-center gap-2">
              <img src={PropertiesIcon} alt="Properties icon" className="w-[23px]" />
              <button className="p-2">Properties</button>
            </div>
            <p className="mr-2 text-slate-400 text-sm">Alt+Enter</p>
          </div>

          <hr className="border-slate-600/80" />

          <div className="flex justify-start items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <img src={CloudDownloadIcon} alt="Cloud download icon" className="w-[23px]" />
            <button className="p-2">Always keep on this device</button>
          </div>
          <div className="flex justify-start items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <Cloud size={26} />
            <button className="p-2">Free up space</button>
          </div>
          <div className="flex justify-between items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <div className="flex justify-start items-center gap-2">
              <img src={OneDriveIcon} alt="OneDrive icon" className="w-[26px]" />
              <button className="p-2">OneDrive</button>
            </div>
            <ChevronRight size={20} className="text-slate-400 mr-2" />
          </div>

          <hr className="border-slate-600/80" />

          <div className="flex justify-start items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <img src={TerminalIcon} alt="Terminal icon" className="w-[23px]" />
            <button className="p-2">Open in Terminal</button>
          </div>

          <hr className="border-slate-600/80" />

          <div className="flex justify-between items-center gap-2 pl-4 hover:bg-slate-700/40 cursor-pointer">
            <div className="flex justify-start items-center gap-2">
              <img src={MoreOptionsIcon} alt="More options icon" className="w-[23px]" />
              <button className="p-2">Show more options</button>
            </div>
            <p className="mr-2 text-slate-400 text-sm">Shift+F10</p>
          </div>
        </div>
      </div>
    </ContextualMenuWrapper>
  );
}