import { ReactNode, RefObject, useEffect, useState } from "react";

export function ContextualMenuWrapper({ handleRef, children }: { children: ReactNode, handleRef: RefObject<HTMLDivElement>; }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    handleRef.current?.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      setPosition({ x: e.pageX, y: e.pageY });
      setVisible(true);
    });

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLButtonElement);

      // Close and perform a click if the target is a button inside the menu and contains the class "contextualMenuFonctionalButton"
      if (target.classList.contains("contextualMenuFonctionalButton")) {
        target.click();
      }
      setVisible(false)
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handleRef]);

  return (
    visible && (<div style={{ top: position.y, left: position.x }} className="w-fit h-fit absolute z-50">
      {children}
    </div>)
  );
}