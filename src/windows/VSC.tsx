import VSCIcon from "@/assets/icons/vsc-icon.png";
import { WindowWrapper } from "@/components/WindowWrapper";
import { createPortal } from "react-dom";
import Files from "@/assets/icons/files.svg";
import Search from "@/assets/icons/search.svg";
import Git from "@/assets/icons/git-merge.svg";
import Debug from "@/assets/icons/debug-alt.svg";
import Extensions from "@/assets/icons/extensions.svg"
import SettingsGear from "@/assets/icons/settings-gear.svg"
import Account from "@/assets/icons/account.svg"
import { ChevronDown, Ellipsis } from "lucide-react";
import MarkdownIcon from "@/assets/icons/markdown.svg"
import Markdown from "react-markdown";
import projectsContent from "@/projects.md?raw";

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
            <div className="w-full h-[calc(100%-40px)] bg-slate-900 flex">
                <div className="h-full w-[64px] flex flex-col justify-between items-center bg-gray-700">
                    <div className="h-fit w-full flex flex-col gap-7 justify-start items-center pt-5">
                        <img
                            src={Files}
                            alt="Files icon"
                            width={25}
                            className="fill-red-600"
                        />
                        <img
                            src={Git}
                            alt="Git icon"
                            width={25}
                        />
                        <img
                            src={Search}
                            alt="Search icon"
                            width={25}
                        />
                        <img
                            src={Debug}
                            alt="Debug icon"
                            width={25}
                        />
                        <img
                            src={Extensions}
                            alt="Extensions icon"
                            width={25}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 pb-16">
                        <img
                            src={Account}
                            alt="Account icon"
                            width={25}
                        />
                        <img
                            src={SettingsGear}
                            alt="Settings icon"
                            width={25}
                        />
                    </div>
                </div>
                <div className="w-1/6 h-full bg-gray-800 flex-shrink-0">
                    <div className="flex items-center justify-between p-5">
                        <p className="text-slate-400">EXPLORER</p>
                        <Ellipsis className="text-slate-400 hover:text-slate-200 cursor-pointer duration-75" />
                    </div>
                    <div className="flex items-center justify-start ml-5 gap-2">
                        <ChevronDown className="text-slate-50" />
                        <p className="text-slate-50">Mes projets</p>
                    </div>
                    <div className="pl-12 mt-4 flex justify-start items-center gap-1">
                        <img src={MarkdownIcon} alt="Markdown icon" width={25} />
                        <p className="text-slate-400 hover:text-slate-200 cursor-pointer duration-75">projets.md</p>
                    </div>
                </div>
                <div className="w-full h-full bg-gray-900 flex-1 overflow-y-scroll p-8 text-slate-50">
                    <div className="prose prose-invert max-w-none">
                        <Markdown>
                            {projectsContent}
                        </Markdown>
                    </div>
                </div>
            </div>
        </WindowWrapper>,
        document.getElementById("window") as HTMLElement
    );
}
