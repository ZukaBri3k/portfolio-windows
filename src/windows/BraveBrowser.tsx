import { WindowWrapper } from "@/components/WindowWrapper";
import { useRef } from "react";
import { createPortal } from "react-dom";
import BraveBrowserIcon from "@/assets/icons/brave-browser.png";
import { useHistory } from "@/hooks/useHistory";
import { ChevronLeft, ChevronRight, Home, RefreshCcw } from "lucide-react";


interface props {
  windowId: string;
}

export function BraveBrowser({windowId} : props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { canGoBack, canGoForward, currentURL, goBack, goForward, clearHistory } = useHistory();

  return createPortal(
    <WindowWrapper title="Brave browser" icon={BraveBrowserIcon} windowId={windowId}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="bg-stone-600 w-full p-2 flex items-center justify-start gap-3">
          <button onClick={goBack} style={{ color: canGoBack() ? "oklch(98.5% 0.001 106.423)" : "oklch(55.3% 0.013 58.071)" }} disabled={!canGoBack}>
            <ChevronLeft />
          </button>
          <button onClick={goForward} style={{ color: canGoForward() ? "oklch(98.5% 0.001 106.423)" : "oklch(55.3% 0.013 58.071)" }} disabled={!canGoForward}>
            <ChevronRight />
          </button>
          <button onClick={clearHistory} className="text-stone-50 px-2 py-1 rounded-md">
            <Home />
          </button>
          <button onClick={() => {
            if (iframeRef.current) {
              iframeRef.current.src = currentURL;
            }
          }} className="text-stone-50 px-2 py-1 rounded-md">
            <RefreshCcw />
          </button>
        </div>
        <iframe src={currentURL} width="100%" height="100%" ref={iframeRef}></iframe>
      </div>
    </WindowWrapper>, document.getElementById("window") as HTMLElement);
}