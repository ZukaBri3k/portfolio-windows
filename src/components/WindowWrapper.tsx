import { ReactNode } from "react";
import Draggable from "react-draggable";

interface props {
  children: ReactNode;
}

export function WindowWrapper({ children }: props) {
  return (
    <Draggable bounds="parent">
      <div className="w-[50dvw] h-[50dvh] bg-amber-300 z-20 flex flex-col">
        <div className="h-5 w-full bg-slate-50"></div>
        {children}
      </div>
    </Draggable>
  );
}
