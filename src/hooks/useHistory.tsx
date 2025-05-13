import { useState } from "react";

export function useHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function addToHistory(url: string) {
    setHistory((prev) => [...prev, url]);
    setCurrentIndex((prev) => prev + 1);
  }

  function goBack() {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }

  function goForward() {
    setCurrentIndex((prev) => Math.min(prev + 1, history.length - 1));
  }

  function canGoBack() {
    return currentIndex > 0;
  }

  function canGoForward() {
    return currentIndex < history.length - 1;
  }

  return { currentURL: history[currentIndex], addToHistory, goBack, canGoBack, goForward, canGoForward };
}