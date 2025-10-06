import BraveBrowserIcon from "@/assets/icons/brave-browser.png";
import DinoIcon from "@/assets/icons/dino.png";
import { WindowWrapper } from "@/components/WindowWrapper";
import { useHistory } from "@/hooks/useHistory";
import { ChevronLeft, ChevronRight, Home, RefreshCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface props {
    windowId: string;
}

export function BraveBrowser({ windowId }: props) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const {
        canGoBack,
        canGoForward,
        currentURL,
        goBack,
        goForward,
        clearHistory,
        addToHistory,
    } = useHistory();
    const [inputURL, setInputURL] = useState<string>(currentURL);

    useEffect(() => {
        setInputURL(currentURL);
    }, [currentURL]);

    const navigateTo = (url: string) => {
        if (!url) return;

        let formattedUrl = url;

        if (!url.match(/^https?:\/\//)) {
            // If it's not a URL, it's a search query
            if (!url.startsWith("http")) {
                formattedUrl = `https://www.google.com/search?q=${encodeURIComponent(
                    url
                )}`;
            } else {
                formattedUrl = `https://${url}`;
            }
        }

        addToHistory(formattedUrl);

        setInputURL(formattedUrl);
    };

    return createPortal(
        <WindowWrapper
            title="Brave browser"
            icon={BraveBrowserIcon}
            windowId={windowId}
        >
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="bg-stone-600 w-full">
                    <div className="w-full p-2 flex items-center justify-start flex-shrink-0 gap-3">
                        <button
                            onClick={goBack}
                            style={{
                                color: canGoBack()
                                    ? "oklch(98.5% 0.001 106.423)"
                                    : "oklch(55.3% 0.013 58.071)",
                            }}
                            disabled={!canGoBack()}
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={goForward}
                            style={{
                                color: canGoForward()
                                    ? "oklch(98.5% 0.001 106.423)"
                                    : "oklch(55.3% 0.013 58.071)",
                            }}
                            disabled={!canGoForward()}
                        >
                            <ChevronRight />
                        </button>
                        <button
                            onClick={() => {
                                navigateTo(
                                    "https://www.google.com/webhp?igu=1"
                                );
                                clearHistory();
                            }}
                            className="text-stone-50 px-2 py-1 rounded-md hover:bg-stone-500"
                            title="Accueil"
                        >
                            <Home />
                        </button>
                        <button
                            onClick={() => {
                                if (iframeRef.current) {
                                    iframeRef.current.src = currentURL;
                                }
                            }}
                            className="text-stone-50 px-2 py-1 rounded-md hover:bg-stone-500"
                            title="Actualiser"
                        >
                            <RefreshCcw />
                        </button>
                        <input
                            type="text"
                            value={inputURL}
                            className="flex-1 bg-stone-700 text-stone-50 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez une URL ou une recherche"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    navigateTo(inputURL);
                                }
                            }}
                            onChange={(e) => {
                                setInputURL(e.target.value);
                            }}
                        />
                    </div>
                    <div className="w-full h-full">
                        <button
                            onClick={() => {
                                navigateTo(
                                    "https://codepen.io/MysticReborn/embed/rygqao?default-tab=result&theme-id=dark"
                                );
                            }}
                            className="flex items-center gap-2 border border-transparent hover:border-stone-500 rounded-md p-1 m-1 duration-100"
                        >
                            <img
                                src={DinoIcon}
                                alt="Dino game icon"
                                className="w-4 h-4"
                            />
                            <p className="text-slate-50">Dino</p>
                        </button>
                    </div>
                </div>
                <iframe
                    src={inputURL}
                    className="w-full h-full flex-shrink"
                    ref={iframeRef}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                ></iframe>
            </div>
        </WindowWrapper>,
        document.getElementById("window") as HTMLElement
    );
}
