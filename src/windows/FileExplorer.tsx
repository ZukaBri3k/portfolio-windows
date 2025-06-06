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
import { ArrowLeft, ArrowRight, ArrowUp, ChevronRight, House, RotateCw, Search } from "lucide-react";
import FileExplorerIcon from "@/assets/icons/file-explorer.png";

interface props {
  windowId: string;
}

export function FileExplorer({windowId} : props) {
  return createPortal(
    <WindowWrapper title="File explorer" icon={FileExplorerIcon} windowId={windowId}>
      <div style={{height: "calc(100% - 2.5rem)"}} className="flex flex-col flex-shrink">
        <div className="min-h-14 bg-zinc-800 w-full h-fit p-2 flex justify-start items-center gap-5">
          <div className="flex justify-center items-center gap-9">
            <ArrowLeft size={28} className="text-slate-400 hover:bg-slate-200/30 rounded-lg duration-150" />
            <ArrowRight className="text-slate-400 hover:bg-slate-200/30 rounded-lg duration-150" />
            <ArrowUp className="text-slate-400 hover:bg-slate-200/30 rounded-lg duration-150" />
            <RotateCw className="text-slate-400 hover:bg-slate-200/30 rounded-lg duration-150" />
          </div>
          <div className="h-full w-1/2 bg-zinc-700/50 flex justify-start items-center flex-shrink-0 gap-4 pl-3">
            <House className="text-slate-400" />
            <ChevronRight className="text-slate-300" />
            <p className="text-slate-50">Desktop</p>
          </div>
          <div className="h-full w-full bg-zinc-700/50 flex justify-start items-center gap-4 pl-3">
            <input className="w-full bg-slate-950/0 outline-none text-slate-50" type="text" placeholder="Search elements" />
            <Search className="text-slate-400 mr-3" />
          </div>
        </div>
        <div style={{height: "calc(100% - 3.5rem)"}} className="bg-stone-900 border-t-[0.5px] border-t-slate-600 flex justify-start items-stretch">
          <div className="border-r-[0.5px] border-r-slate-600 w-[250px] overflow-y-auto flex flex-col gap-5 p-1 pt-5 pb-5">
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={HomeIcon} alt="home icon" />
              <p className="text-slate-50">Home</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={GalleryIcon} alt="gallery icon" />
              <p className="text-slate-50">Gallery</p>
            </div>

            <hr className="ml-2 border-gray-600/80" />

            <div className="pl-8 p-2 rounded-l flex justify-start items-center gap-3 bg-slate-500/40">
              <img width={24} src={DesktopIcon} alt="desktop icon" />
              <p className="text-slate-50">Desktop</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={DownloadsIcon} alt="download icon" />
              <p className="text-slate-50">Downloads</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={DocumentsIcon} alt="documents icon" />
              <p className="text-slate-50">Documents</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={PicturesIcon} alt="pictures icon" />
              <p className="text-slate-50">Pictures</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={MusicsIcon} alt="musics icon" />
              <p className="text-slate-50">Music</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={VideosIcon} alt="videos icon" />
              <p className="text-slate-50">Videos</p>
            </div>

            <hr className="ml-2 border-gray-600/80" />

            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={PcIcon} alt="PC icon" />
              <p className="text-slate-50">This PC</p>
            </div>
            <div className="pl-8 p-2 flex justify-start items-center gap-3 hover:bg-slate-500/40 rounded duration-150 cursor-pointer">
              <img width={24} src={NetworkIcon} alt="network icon" />
              <p className="text-slate-50">Network</p>
            </div>
          </div>
        </div>
      </div>
    </WindowWrapper>, document.getElementById("window") as HTMLElement);
}