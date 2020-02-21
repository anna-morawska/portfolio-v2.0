import {
  openAlert,
  IOpenAlertAction,
  IOpenWindowAction,
  openWindow
} from "../../store/actions/layout";

import { ReactNode } from "react";
import outlookIcon from "../../assets/outlook.png";
import explorerIcon from "../../assets/explorer.png";
import gitBashIcon from "../../assets/git-bash.png";
import vsCodeIcon from "../../assets/vscode.png";
import photoshopIcon from "../../assets/photoshop.png";
import chromeIcon from "../../assets/chrome.png";
import consoleIcon from "../../assets/console.png";
import paintIcon from "../../assets/paint.png";

enum StartMenuItemSide {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

interface PropsStartMenuItem {
  iconPath: string;
  action: IOpenAlertAction | IOpenWindowAction;
  title: string | ReactNode;
  side?: StartMenuItemSide;
}

export enum windowTypes {
  OUTLOOK = "Microsoft Outlook",
  INTERNET_EXPLORER = "Internet Explorer",
  PAINT = "Paint",
  GIT_BASH = "Git Bash",
  VSC = "Visual Studio Code",
  PHOTOSHOP = "Photoshop",
  CHROME = "Google Chrome",
  TERMINAL = "Terminal"
}

const startMenuItemsList: PropsStartMenuItem[] = [
  {
    title: windowTypes.OUTLOOK,
    action: openWindow(windowTypes.OUTLOOK),
    iconPath: outlookIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: windowTypes.INTERNET_EXPLORER,
    action: openAlert(windowTypes.INTERNET_EXPLORER),
    iconPath: explorerIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: windowTypes.PAINT,
    action: openAlert(windowTypes.PAINT),
    iconPath: paintIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: windowTypes.GIT_BASH,
    action: openAlert(windowTypes.GIT_BASH),
    iconPath: gitBashIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: windowTypes.VSC,
    action: openAlert(windowTypes.VSC),
    iconPath: vsCodeIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: windowTypes.PHOTOSHOP,
    action: openAlert(windowTypes.PHOTOSHOP),
    iconPath: photoshopIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: windowTypes.CHROME,
    action: openAlert(windowTypes.CHROME),
    iconPath: chromeIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: windowTypes.TERMINAL,
    action: openWindow(windowTypes.TERMINAL),
    iconPath: consoleIcon,
    side: StartMenuItemSide.RIGHT
  }
];

export { startMenuItemsList };
