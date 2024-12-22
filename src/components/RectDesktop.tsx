import {useEffect, useState} from "react";

export function RectDesktop() {
  const [startPoint, setStartPoint] = useState({x: 0, y: 0});
  const [endPoint, setEndPoint] = useState({x: 0, y: 0});
  
  useEffect(() => {
    let startPoint = {x: 0, y: 0};
    let endPoint = {x: 0, y: 0};
    let isMouseDown: boolean = false;
    
    function mouseDown(e: MouseEvent) {
      const event = e.target as HTMLElement;
      if (event.id === "svg-rect") {
        startPoint = {x: e.clientX, y: e.clientY};
        setStartPoint(startPoint);
        endPoint = {x: e.clientX, y: e.clientY};
        setEndPoint(endPoint);
        isMouseDown = true;
      }
    }
    
    window.addEventListener("mousedown", mouseDown);
    
    function mouseUp() {
      startPoint = {x: 0, y: 0};
      setStartPoint(startPoint);
      endPoint = {x: 0, y: 0};
      setEndPoint(endPoint);
      isMouseDown = false;
    }
    
    window.addEventListener("mouseup", mouseUp);
    
    function mouseMove(e: MouseEvent) {
      if (isMouseDown) {
        endPoint = {x: e.clientX, y: e.clientY};
        setEndPoint(endPoint);
      }
    }
    
    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  
  return (
    <svg width="100%" height="100%" className="z-0" id="svg-rect">
      <polygon
        points={`${startPoint.x},${startPoint.y} ${endPoint.x},${startPoint.y} ${endPoint.x},${endPoint.y} ${startPoint.x},${endPoint.y}`}
        fill="blue"
        opacity={0.5}
      />
    </svg>
  );
}
