import React, { FC } from "react";

import { translate } from "../";
import styles from "./WindowMenu.module.scss";

interface PropsWindowMenu {}

const WindowMenu: FC<PropsWindowMenu> = props => {
  return (
    <div className={styles.windowMenu}>
      <span>{translate("windowMenu.file")}</span>
      <span>{translate("windowMenu.edit")}</span>
      <span>{translate("windowMenu.tools")}</span>
      <span>{translate("windowMenu.view")}</span>
      <span>{translate("windowMenu.help")}</span>
    </div>
  );
};

export { WindowMenu };
