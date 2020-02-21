import { openAlert, IOpenAlertAction } from "../../store/actions/layout";

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
  action: IOpenAlertAction;
  title: string | ReactNode;
  side?: StartMenuItemSide;
}

const startMenuItemsList: PropsStartMenuItem[] = [
  {
    title: "Microsoft Outlook",
    action: openAlert("Microsoft Outlook"),
    iconPath: outlookIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: "Internet Explorer",
    action: openAlert("Internet Explorer"),
    iconPath: explorerIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: "Paint",
    action: openAlert("Paint"),
    iconPath: paintIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: "Git Bash",
    action: openAlert("Git Bash"),
    iconPath: gitBashIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: "Visual Studio Code",
    action: openAlert("Visual Studio Code"),
    iconPath: vsCodeIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: "Photoshop",
    action: openAlert("Photoshop"),
    iconPath: photoshopIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: "Google Chrome",
    action: openAlert("Google Chrome"),
    iconPath: chromeIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: "Terminal",
    action: openAlert("Terminal"),
    iconPath: consoleIcon,
    side: StartMenuItemSide.RIGHT
  }
];

export { startMenuItemsList };
