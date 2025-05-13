import { DesktopIconWrapper } from "@/components/DesktopIconWrapper.tsx";
import BraverBrowserIcon from "@/assets/icons/brave-browser.png";
import { useRef } from "react";
import { FolderContextualMenu } from "@/components/FolderContextualMenu";
import { useCreateWindow } from "@/hooks/useCreateWindow";


export function BraveBrowserDesktopIcon() {
  const {createBraveBrowserWindow} = useCreateWindow();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <DesktopIconWrapper>
        <div className="absolute top-2 left-28 flex flex-col items-center justify-center hover:bg-slate-700/40 p-2 rounded cursor-pointer" onDoubleClick={() => {
          createBraveBrowserWindow();
        }}
          ref={ref}
        >
          <div
            className="w-[64px] h-[64px]"
          >
            <img
              className="pointer-events-none"
              src={BraverBrowserIcon}
              alt="file explorer icon"
            />
          </div>
          <p className="text-slate-50">Brave Browser</p>
        </div>
      </DesktopIconWrapper>
      <FolderContextualMenu handleRef={ref} />
    </>
  );
}
