import React, { FC, useMemo } from "react";
import { windowTypes } from "../StartMenu/StartMenuItemsList";

import outlookIcon from "../../assets/outlook.png";
import explorerIcon from "../../assets/explorer.png";
import gitBashIcon from "../../assets/git-bash.png";
import vsCodeIcon from "../../assets/vscode.png";
import photoshopIcon from "../../assets/photoshop.png";
import chromeIcon from "../../assets/chrome.png";
import consoleIcon from "../../assets/console.png";
import paintIcon from "../../assets/paint.png";
import folderIcon from "../../assets/folder.png";
import windowsIcon from "../../assets/windows_icon.png";
import notepadIcon from "../../assets/note.png";
import irfanViewIcon from "../../assets/IrfanView.png";

interface IconProps {
  name: string;
}

const getIconPath = (name: string) => {
  switch (name) {
    case windowTypes.OUTLOOK:
      return outlookIcon;
    case windowTypes.INTERNET_EXPLORER:
      return explorerIcon;
    case windowTypes.GIT_BASH:
      return gitBashIcon;
    case windowTypes.VSC:
      return vsCodeIcon;
    case windowTypes.PHOTOSHOP:
      return photoshopIcon;
    case windowTypes.CHROME:
      return chromeIcon;
    case windowTypes.TERMINAL:
      return consoleIcon;
    case windowTypes.PAINT:
      return paintIcon;
    case windowTypes.ALERT:
      return windowsIcon;
    case windowTypes.NOTEPAD:
      return notepadIcon;
    case windowTypes.IRFAN_VIEW:
      return irfanViewIcon;
    default:
      return folderIcon;
  }
};

const Icon: FC<IconProps> = ({ name }) => {
  const iconPath = useMemo(() => getIconPath(name), [name]);
  return <img alt="icon" src={iconPath} />;
};

export { Icon };
