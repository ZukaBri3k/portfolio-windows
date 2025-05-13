import { ReactNode, RefObject, useEffect, useState } from "react";

export function ContextualMenuWrapper({ handleRef, children }: { children: ReactNode, handleRef: RefObject<HTMLDivElement>; }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    handleRef.current?.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      setPosition({ x: e.pageX, y: e.pageY });
      setVisible(true);
      console.log(children)
    });

    const handleClick = () => setVisible(false);
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    visible && (<div style={{ top: position.y, left: position.x }} className="w-fit h-fit absolute">
      {children}
    </div>)
  );
}