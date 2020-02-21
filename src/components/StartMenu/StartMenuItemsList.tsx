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
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  title: string | ReactNode;
  side?: StartMenuItemSide;
}

const startMenuItemsList: PropsStartMenuItem[] = [
  {
    title: "Microsoft Outlook",
    onClick: () => console.log("placeholder"),
    iconPath: outlookIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: "Internet Explorer",
    onClick: () => console.log("placeholder"),
    iconPath: explorerIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: "Paint",
    onClick: () => console.log("placeholder"),
    iconPath: paintIcon,
    side: StartMenuItemSide.LEFT
  },
  {
    title: "Git Bash",
    onClick: () => console.log("placeholder"),
    iconPath: gitBashIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: "Visual Studio Code",
    onClick: () => console.log("placeholder"),
    iconPath: vsCodeIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: "Photoshop",
    onClick: () => console.log("placeholder"),
    iconPath: photoshopIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: "Google Chrome",
    onClick: () => console.log("placeholder"),
    iconPath: chromeIcon,
    side: StartMenuItemSide.RIGHT
  },
  {
    title: "Terminal",
    onClick: () => console.log("placeholder"),
    iconPath: consoleIcon,
    side: StartMenuItemSide.RIGHT
  }
];

export { startMenuItemsList };
