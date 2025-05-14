import { RefObject, useRef } from "react";
import Draggable from "react-draggable";
import { FolderContextualMenu } from "./FolderContextualMenu";

interface props {
  createWindowFunction: () => void;
  icon: string;
  text: string;
  position: {
    x: number;
    y: number;
  }
}

export function DesktopIcon({ createWindowFunction, icon, text, position }: props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Draggable axis="both" nodeRef={ref as RefObject<HTMLElement>}>
        <div
        className="absolute flex flex-col items-center justify-center hover:bg-slate-700/40 p-2 rounded cursor-pointer"
        style={{top: `${position.y}px`, left: `${position.x}px`}}
        onDoubleClick={createWindowFunction}
          ref={ref}
        >
          <div
            className="w-[64px] h-[64px]"
          >
            <img
              className="pointer-events-none"
              src={icon}
              alt={`${text} icon`}
            />
          </div>
          <p className="text-slate-50 text-center">{text}</p>
        </div>
      </Draggable >
      <FolderContextualMenu handleRef={ref} />
    </>
  );
}