import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BraveBrowserIcon from "@/assets/icons/brave-browser.png";
import { useHistory } from "@/hooks/useHistory";
import { ChevronLeft, ChevronRight, Home, RefreshCcw } from "lucide-react";
import { WindowWrapper } from "@/components/WindowWrapper";


interface props {
  windowId: string;
}

export function BraveBrowser({ windowId }: props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { canGoBack, canGoForward, currentURL, goBack, goForward, clearHistory, addToHistory } = useHistory();
  const [inputURL, setInputURL] = useState<string>(currentURL);

  useEffect(() => {
    const script = document.createElement('script');
    document.head.appendChild(script);
    script.src = "https://cse.google.com/cse.js?cx=25d8ce44e9185495c";
    script.async = true;
  }, [])

  return createPortal(
    <WindowWrapper title="Brave browser" icon={BraveBrowserIcon} windowId={windowId}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="bg-stone-600 w-full p-2 flex items-center justify-start flex-shrink-0 gap-3">
          <button
            onClick={goBack}
            style={{ color: canGoBack() ? "oklch(98.5% 0.001 106.423)" : "oklch(55.3% 0.013 58.071)" }}
            disabled={!canGoBack()}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={goForward}
            style={{ color: canGoForward() ? "oklch(98.5% 0.001 106.423)" : "oklch(55.3% 0.013 58.071)" }}
            disabled={!canGoForward()}
          >
            <ChevronRight />
          </button>
          <button
            onClick={clearHistory}
            className="text-stone-50 px-2 py-1 rounded-md"
          >
            <Home />
          </button>
          <button
            onClick={() => {
              if (iframeRef.current) {
                iframeRef.current.src = currentURL;
              }
            }}
            className="text-stone-50 px-2 py-1 rounded-md"
          >
            <RefreshCcw />
          </button>
          <input
            type="text"
            value={inputURL}
            className="flex-1 bg-stone-700 text-stone-50 rounded px-2 py-1"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                //navigateTo(inputURL);
              }
            }}
            onChange={(e) => {
              setInputURL(e.target.value);
            }}
          />
        </div>
        <div className="w-full h-full flex-shrink overflow-y-auto">
          <div className="gcse-search"></div>
        </div>
        {/* <iframe
          src="https://cse.google.com/cse?cx=25d8ce44e9185495c"
          className="w-full h-full flex-shrink"
          ref={iframeRef}
          onLoad={() => {
            console.log("Page loaded");
            // Au lieu d'essayer d'accéder à location.href, mettons à jour inputURL
            setInputURL(currentURL);
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe> */}
      </div>
    </WindowWrapper>, document.getElementById("window") as HTMLElement);
}