import { useState } from "react";

export function useHistory(defaultURL: string = "https://www.google.com/webhp?igu=1") {
  const [history, setHistory] = useState<string[]>([defaultURL]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function addToHistory(url: string) {
    if(url === "") return;
    setHistory((prev) => [...prev, url]);
    setCurrentIndex((prev) => prev + 1);
  }

  function goBack() {
    if(currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function goForward() {
    if(currentIndex < history.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function canGoBack() {
    return currentIndex > 0;
  }

  function canGoForward() {
    return currentIndex < history.length - 1;
  }

  function clearHistory() {
    setHistory([defaultURL]);
    setCurrentIndex(0);
  }

  return { currentURL: history[currentIndex], addToHistory, goBack, canGoBack, goForward, canGoForward, clearHistory };
}