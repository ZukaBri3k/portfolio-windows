import {HTMLAttributes, ReactNode, useContext, useEffect, useMemo, useRef, useState} from "react";
import Draggable from "react-draggable";
import {Minus, Square, X} from "lucide-react";
import {MenusContext} from "@/context/menusContext.ts";
import { FocusContext } from "@/context/focusContext";


interface props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  window: string;
  icon?: string;
}

export function WindowWrapper({children, title, window, icon}: props) {
  
  const {setMenuState, menuState} = useContext(MenusContext);
  const { focusedWindow, setFocusedWindow } = useContext(FocusContext);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);

  // Set the z-index of the window based on whether it is focused or not
  const zIndex = useMemo(() => {
    if (focusedWindow === window) {
      return 21;
    } else {
      return 20;
    }
  }, [focusedWindow, window]);
  
  useEffect(() => {
    // Add event listener to the dragRef to set the focused window when the window is clicked
    dragRef.current?.addEventListener("mousedown", () => {
      setFocusedWindow(window);
    })

    // Set the initial focused window when the component mounts
    setFocusedWindow(window);
  }, [])

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
      style={{zIndex: zIndex}}
        className={(isFullScreen ? "w-full h-[95dvh] top-0 left-0 " : "w-[60dvw] h-[70dvh] bottom-[20dvh] right-[40dvh] translate-x-[60dvh] translate-y-[70dvh] ") +` absolute bg-slate-900/90 flex flex-col rounded-xl border-[0.5px] border-slate-600 overflow-hidden`} ref={dragRef}>
        <div className="h-10 w-full cursor-pointer flex items-center flex-shrink-0" id="tooltip">
          <div id="handle" className="h-full w-full flex items-center justify-start gap-3 pl-5 cursor-move">
            {icon && <img src={icon} alt={`Icon of the application ${title}`} className="w-[24px] pointer-events-none" />}
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
            <button className="w-14 h-full hover:bg-red-700 flex items-center justify-center rounded-tr-xl" onClick={closeWindow}>
              <X strokeWidth={1.5} color="#E2E8F0" size={20}/>
            </button>
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
}
