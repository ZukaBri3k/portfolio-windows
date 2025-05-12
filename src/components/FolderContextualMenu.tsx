import { RefObject, useEffect, useState } from "react";

interface props {
  handleRef: RefObject<HTMLDivElement>;
}

export function FolderContextualMenu({ handleRef }: props) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    handleRef.current?.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      setPosition({ x: e.pageX, y: e.pageY });
      setVisible(true);
    });

    const handleClick = () => setVisible(false);
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    visible && (
      <div style={{top: position.y, left: position.x}} className="absolute w-[200px] h-[200px] bg-slate-800/80 backdrop-blur rounded-lg shadow-lg border-[1px] border-slate-700">
        <div className="flex flex-col text-slate-50">
          <button className="p-2 hover:bg-slate-700/40">Open</button>
          <button className="p-2 hover:bg-slate-700/40">Rename</button>
          <button className="p-2 hover:bg-slate-700/40">Delete</button>
        </div>
      </div>
    )
  );
}