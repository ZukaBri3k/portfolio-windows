import { animate } from "animejs";
import { RefObject } from "react";

export function minimizeWindowAnimation(ref: RefObject<HTMLElement>) {
  const rect = ref.current.getBoundingClientRect();
  const taskbarY = window.innerHeight - 40;

  return animate(ref.current, {
    x: 0,
    translateY:  taskbarY - rect.top,
    scale: 0.1,
    opacity: 0,
    easing: "easeInOutQuad",
    duration: 300,
  });
}
