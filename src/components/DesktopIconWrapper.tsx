import { ReactNode } from "react";
import Draggable from "react-draggable";


interface props {
  children: ReactNode;
}

export function DesktopIconWrapper({ children }: props) {
  return (
    <Draggable axis="both">
      <div className="" onContextMenu={(e) => {
        e.preventDefault();
        console.log(e);
      }}>
        {children}
      </div>
    </Draggable>
  );
}
