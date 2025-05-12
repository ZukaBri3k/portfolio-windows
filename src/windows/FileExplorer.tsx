import { createPortal } from "react-dom";
import { WindowWrapper } from "@/components/WindowWrapper.tsx";

import HomeIcon from "@/assets/icons/home.png";
import GalleryIcon from "@/assets/icons/gallery.png";
import DesktopIcon from "@/assets/icons/desktop.png";
import DownloadsIcon from "@/assets/icons/downloads.png";
import DocumentsIcon from "@/assets/icons/documents.png";
import PicturesIcon from "@/assets/icons/pictures.png";
import MusicsIcon from "@/assets/icons/musics.png";
import VideosIcon from "@/assets/icons/videos.png";
import NetworkIcon from "@/assets/icons/network.png";
import PcIcon from "@/assets/icons/pc.png";


export function FileExplorer() {
  return createPortal(
    <WindowWrapper title="File explorer" window="fileExplorerMenu">
      <div className="flex flex-col h-full">
        <div className="min-h-14 bg-stone-800/75 w-full h-[8%]">

        </div>
        <div className="bg-stone-900 border-t-[0.5px] border-t-slate-600 flex justify-start items-stretch h-[92%]">
          <div className="border-r-[0.5px] border-r-slate-600 w-[250px] overflow-y-scroll flex flex-col gap-5 pt-5 p-1 h-full">
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={HomeIcon} alt="home icon" />
              <p className="text-slate-50">Home</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={GalleryIcon} alt="home icon" />
              <p className="text-slate-50">Gallery</p>
            </div>

            <hr className="ml-2 border-gray-600/80" />

            <div className="pl-8 p-2 rounded-l flex justify-start items-center gap-3 bg-slate-500/40">
              <img width={24} src={DesktopIcon} alt="home icon" />
              <p className="text-slate-50">Desktop</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={DownloadsIcon} alt="home icon" />
              <p className="text-slate-50">Downloads</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={DocumentsIcon} alt="home icon" />
              <p className="text-slate-50">Documents</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={PicturesIcon} alt="home icon" />
              <p className="text-slate-50">Pictures</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={MusicsIcon} alt="home icon" />
              <p className="text-slate-50">Music</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={VideosIcon} alt="home icon" />
              <p className="text-slate-50">Videos</p>
            </div>

            <hr className="ml-2 border-gray-600/80" />

            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={PcIcon} alt="home icon" />
              <p className="text-slate-50">This PC</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded-l duration-150 cursor-pointer">
              <img width={24} src={NetworkIcon} alt="home icon" />
              <p className="text-slate-50">Network</p>
            </div>
          </div>
        </div>
      </div>
    </WindowWrapper>, document.getElementById("window") as HTMLElement);
}
