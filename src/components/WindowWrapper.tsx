import { HTMLAttributes, ReactNode, RefObject, useContext, useEffect, useMemo, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Minus, Square, X } from "lucide-react";
import { FocusContext } from "@/context/focusContext";
import { WindowsContext } from "@/context/windowsContext";
import { minimizeWindowAnimation } from "@/animations/window.animations";

interface props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  icon?: string;
  windowId: string;
}

export function WindowWrapper({ children, title, icon, windowId }: props) {

  const { setWindows, windows } = useContext(WindowsContext);
  const { focusedWindow, setFocusedWindow } = useContext(FocusContext);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [windowRect, setWindowRect] = useState<DOMRect | null>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const currentWindow = useMemo(() => windows.find((w) => w.windowId === windowId), [windows, windowId]);

  // Set the z-index of the window based on whether it is focused or not
  const zIndex = useMemo(() => {
    if (focusedWindow === windowId) {
      return 21;
    } else {
      return 20;
    }
  }, [focusedWindow, windowId, windows]);

  useEffect(() => {
    // Add event listener to the dragRef to set the focused window when the window is clicked
    dragRef.current?.addEventListener("mousedown", () => {
      setFocusedWindow(windowId);
    });

    // Set the initial focused window when the component mounts
    setFocusedWindow(windowId);

    return () => {
      dragRef.current?.removeEventListener("mousedown", () => {
        setFocusedWindow(windowId);
      });
    };
  }, [dragRef.current]);

  /**
   * Close the window and remove it from the windows state
   */
  function closeWindow() {
    setWindows((prev) => prev.filter((w) => w.windowId !== windowId));
  }

  /**
   * Minimize the window by setting its isMinimized property to true
   */
  function minimizeWindow() {
    if(!dragRef.current) return;

    const animation = minimizeWindowAnimation(dragRef as RefObject<HTMLElement>);

    animation.play()

    animation.then(() => {
      setWindows((prev) => prev.map((w) => {
        if (w.windowId === windowId) {
          return { ...w, isMinimized: true };
        }
        return w;
      }));

      // Reset the transform property to its initial value
      animation.reverse()
    })
  }

  function fullScreenWindow() {
    if(!dragRef.current) return;
    console.log("fullScreenWindow", isFullScreen);

    if(!isFullScreen) {
      setWindowRect(dragRef.current.getBoundingClientRect());
      setIsFullScreen(true);
      dragRef.current.style.setProperty("top", "0");
      dragRef.current.style.setProperty("left", "0");
      dragRef.current.style.setProperty("width", "100%");
      dragRef.current.style.setProperty("height", "100%");
      dragRef.current.style.setProperty("transform", "translate(0, 0)");

    } else {
      dragRef.current.style.setProperty("transform", `translate(${windowRect?.x}px, ${windowRect?.y}px)`);
      setIsFullScreen(false);
      dragRef.current.style.setProperty("width", `${windowRect?.width}px`);
      dragRef.current.style.setProperty("height", `${windowRect?.height}px`);
      dragRef.current.style.setProperty("transform", `translate(${windowRect?.x}px, ${windowRect?.y}px)`);
    }

  }

  return (
    <Draggable bounds="parent" handle="#handle" disabled={isFullScreen} nodeRef={dragRef as RefObject<HTMLElement>} >
      <div
        style={{ zIndex: zIndex, display: currentWindow?.isMinimized ? "none" : "block" }}
        className="top-0 left-0 w-[60dvw] h-[70dvh] absolute bg-slate-900/90 flex flex-col rounded-xl border-[0.5px] border-slate-600 overflow-hidden" ref={dragRef}>
        <div className="h-10 w-full cursor-pointer flex items-center flex-shrink-0" id="tooltip">
          <div id="handle" className="h-full w-full flex items-center justify-start gap-3 pl-5 cursor-move">
            {icon && <img src={icon} alt={`Icon of the application ${title}`} className="w-[24px] pointer-events-none" />}
            <h2 className="text-slate-50">{title}</h2>
          </div>
          <div className="w-fit h-full flex items-center">
            <button className="w-14 h-full hover:bg-slate-700 flex items-center justify-center" onClick={minimizeWindow}>
              <Minus strokeWidth={1.5} color="#E2E8F0" size={20} />
            </button>
            <button className="w-14 h-full hover:bg-slate-700 flex items-center justify-center" onClick={fullScreenWindow}>
              <Square strokeWidth={1.5} color="#E2E8F0" size={15} />
            </button>
            <button className="w-14 h-full hover:bg-red-700 flex items-center justify-center rounded-tr-xl" onClick={closeWindow}>
              <X strokeWidth={1.5} color="#E2E8F0" size={20} />
            </button>
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
}