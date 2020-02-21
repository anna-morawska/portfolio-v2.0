import React, { FC, ReactNode } from "react";
import styles from "./StartMenuItem.module.scss";

interface PropsStartMenuItem {
  iconPath: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  title: string | ReactNode;
  side?: StartMenuItemSide;
}

enum StartMenuItemSide {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

const StartMenuItem: FC<PropsStartMenuItem> = ({
  iconPath,
  onClick,
  title
}) => (
  <div className={styles.startMenuItem} onClick={onClick}>
    <img src={iconPath} />
    <span>{title}</span>
  </div>
);

export { StartMenuItem, StartMenuItemSide };
