import React, { FC, ReactNode } from "react";
import { Icon } from "../";

import styles from "./StartMenuItem.module.scss";

interface PropsStartMenuItem {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  title: string | ReactNode;
  side?: StartMenuItemSide;
}

enum StartMenuItemSide {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

const StartMenuItem: FC<PropsStartMenuItem> = ({ name, onClick, title }) => (
  <div className={styles.startMenuItem} onClick={onClick}>
    <Icon name={name} />
    <span>{title}</span>
  </div>
);

export { StartMenuItem, StartMenuItemSide };
