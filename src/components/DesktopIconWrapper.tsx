import { ReactNode, RefObject, useRef } from "react";
import Draggable from "react-draggable";


interface props {
  children: ReactNode;
}

export function DesktopIconWrapper({ children }: props) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Draggable axis="both" nodeRef={ref as RefObject<HTMLElement>}>
      <div ref={ref} className="absolute top-0 left-0">
        {children}
      </div>
    </Draggable>
  );
}
