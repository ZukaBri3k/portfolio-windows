import {HTMLAttributes, ReactNode, useContext, useRef, useState} from "react";
import Draggable from "react-draggable";
import {Minus, Square, X} from "lucide-react";
import {MenusContext} from "@/context/menusContext.ts";


interface props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  window: string;
}

export function WindowWrapper({children, title, window}: props) {
  
  const {setMenuState, menuState} = useContext(MenusContext);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  
  function closeWindow() {
    if (menuState) {
      const windowState = menuState[window as keyof typeof menuState];
      setMenuState((prev) => {
        return {
          ...prev,
          [window]: {
            ...windowState,
            open: false
          }
        };
      });
    }
  }
  
  return (
    <Draggable bounds="parent" handle="#handle" disabled={isFullScreen} >
      <div
        className={(isFullScreen ? "w-full h-[95dvh] top-0 left-0 " : "w-[60dvw] h-[70dvh] bottom-[20dvh] right-[40dvh] translate-x-[60dvh] translate-y-[70dvh] ") +` absolute bg-slate-900/90 z-20 flex flex-col rounded-xl border-[0.5px] border-slate-600`} ref={dragRef}>
        <div className="min-h-10 max-h-10 w-full cursor-pointer flex items-center" id="tooltip">
          <div id="handle" className="h-full w-full flex items-center justify-start pl-5">
            <h2 className="text-slate-50">{title}</h2>
          </div>
          <div className="w-fit h-full flex items-center">
            <button className="w-14 h-full hover:bg-slate-700 flex items-center justify-center" onClick={closeWindow}>
              <Minus strokeWidth={1.5} color="#E2E8F0" size={20}/>
            </button>
            <button className="w-14 h-full hover:bg-slate-700 flex items-center justify-center" onClick={() => {
              setIsFullScreen((prev) => !prev)
              dragRef.current?.style.setProperty("transform", "translate(0, 0)")
            }}>
              <Square strokeWidth={1.5} color="#E2E8F0" size={15}/>
            </button>
            <button className="w-14 h-full hover:bg-red-700 flex items-center justify-center" onClick={closeWindow}>
              <X strokeWidth={1.5} color="#E2E8F0" size={20}/>
            </button>
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
}
