import { WindowsContext } from "@/context/windowsContext";
import { useCreateWindow } from "@/hooks/useCreateWindow";
import { RefObject, useContext } from "react";
import { ContextualMenuWrapper } from "./ContextualMenuWrapper";

interface props {
    handleRef: RefObject<HTMLDivElement>;
}

export function DesktopContextualMenu({ handleRef }: props) {
    const { setWindows } = useContext(WindowsContext);
    const { createFileExplorerWindow } = useCreateWindow(setWindows);

    return (
        <ContextualMenuWrapper handleRef={handleRef}>
            <div className="absolute w-[300px] h-fit bg-slate-800/80 backdrop-blur rounded-lg shadow-lg border-[1px] border-slate-700">
                <h1>Hello world !</h1>
            </div>
        </ContextualMenuWrapper>
    );
}
