import { useState } from "react";

export function useHistory(defaultURL: string = "https://www.google.com/webhp?igu=1") {
  const [history, setHistory] = useState<string[]>([defaultURL]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function addToHistory(url: string) {
    console.log(currentIndex, history)
    setHistory((prev) => [...prev, url]);
    setCurrentIndex((prev) => prev + 1);
  }

  function goBack() {
    console.log(currentIndex, history)
    if(currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function goForward() {
    console.log(currentIndex, history)
    if(currentIndex < history.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function canGoBack() {
    console.log(currentIndex, history)
    return currentIndex > 0;
  }

  function canGoForward() {
    console.log(currentIndex, history)
    return currentIndex < history.length - 1;
  }

  function clearHistory() {
    console.log(currentIndex, history)
    setHistory([defaultURL]);
    setCurrentIndex(0);
  }

  return { currentURL: history[currentIndex], addToHistory, goBack, canGoBack, goForward, canGoForward, clearHistory };
}