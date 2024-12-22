import React, {useEffect, useState} from "react";

interface props {
  reference: React.MutableRefObject<HTMLElement | null>;
}

export function RectDesktop({reference}: props) {
  const [startPoint, setStartPoint] = useState({x: 0, y: 0});
  const [endPoint, setEndPoint] = useState({x: 0, y: 0});
  
  useEffect(() => {
    let startPoint = {x: 0, y: 0};
    let endPoint = {x: 0, y: 0};
    let isMouseDown: boolean = false;
    const ref = reference?.current;
    
    ref?.addEventListener("mousedown", (e) => {
      console.log("mousedown");
      startPoint = {x: e.clientX, y: e.clientY};
      setStartPoint(startPoint);
      endPoint = {x: e.clientX, y: e.clientY};
      setEndPoint(endPoint);
      isMouseDown = true;
    });
    
    ref?.addEventListener("mouseup", () => {
      startPoint = {x: 0, y: 0};
      setStartPoint(startPoint);
      endPoint = {x: 0, y: 0};
      setEndPoint(endPoint);
      isMouseDown = false;
    });
    
    ref?.addEventListener("mousemove", (e) => {
      if (isMouseDown) {
        endPoint = {x: e.clientX, y: e.clientY};
        setEndPoint(endPoint);
      }
    });
    
    return () => {
      ref?.removeEventListener("mousedown", () => {
      });
      ref?.removeEventListener("mouseup", () => {
      });
      ref?.removeEventListener("mousemove", () => {
      });
    };
  }, [reference]);
  
  return (
    <svg width="100%" height="100%" className="z-0">
      <polygon
        points={`${startPoint.x},${startPoint.y} ${endPoint.x},${startPoint.y} ${endPoint.x},${endPoint.y} ${startPoint.x},${endPoint.y}`}
        fill="blue"
        opacity={0.5}
      />
    </svg>
  );
}
