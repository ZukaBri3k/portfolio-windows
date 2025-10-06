import VSCIcon from "@/assets/icons/vsc-icon.png";
import { WindowWrapper } from "@/components/WindowWrapper";
import { createPortal } from "react-dom";

interface props {
    windowId: string;
}

export function VSC({ windowId }: props) {
    return createPortal(
        <WindowWrapper
            title="Visual Studio Code"
            icon={VSCIcon}
            windowId={windowId}
        >
            <div className="w-full h-full bg-slate-900">test</div>
        </WindowWrapper>,
        document.getElementById("window") as HTMLElement
    );
}
