import { ReactNode } from "react";

interface menu {
  open: boolean;
  component?: ReactNode;
}

export interface menuType {
  windowsMenu: menu;
  fileExplorerMenu: menu;
  braveBrowser: menu;
}
