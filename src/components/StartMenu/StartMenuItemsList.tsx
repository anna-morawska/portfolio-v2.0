import {
  openAlert,
  IOpenAlertAction,
  IOpenWindowAction,
  openWindow,
} from "../../store/actions/layout";

export enum StartMenuItemSide {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export interface IStartMenuItem {
  action: IOpenAlertAction | IOpenWindowAction;
  title: string;
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
  TERMINAL = "Terminal",
  ALERT = "Alert",
  NOTEPAD = "Notepad",
  IRFAN_VIEW = "IrfanView",
}

export const startMenuItemsList: IStartMenuItem[] = [
  {
    title: windowTypes.OUTLOOK,
    action: openWindow(windowTypes.OUTLOOK),
    side: StartMenuItemSide.LEFT,
  },
  {
    title: windowTypes.INTERNET_EXPLORER,
    action: openAlert(windowTypes.INTERNET_EXPLORER),
    side: StartMenuItemSide.LEFT,
  },
  {
    title: windowTypes.PAINT,
    action: openAlert(windowTypes.PAINT),
    side: StartMenuItemSide.LEFT,
  },
  {
    title: windowTypes.GIT_BASH,
    action: openAlert(windowTypes.GIT_BASH),
    side: StartMenuItemSide.RIGHT,
  },
  {
    title: windowTypes.VSC,
    action: openAlert(windowTypes.VSC),
    side: StartMenuItemSide.RIGHT,
  },
  {
    title: windowTypes.PHOTOSHOP,
    action: openAlert(windowTypes.PHOTOSHOP),
    side: StartMenuItemSide.RIGHT,
  },
  {
    title: windowTypes.CHROME,
    action: openAlert(windowTypes.CHROME),
    side: StartMenuItemSide.RIGHT,
  },
  {
    title: windowTypes.TERMINAL,
    action: openWindow(windowTypes.TERMINAL),
    side: StartMenuItemSide.RIGHT,
  },
];
