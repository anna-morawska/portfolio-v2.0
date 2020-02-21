import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { WindowTitle, WindowMenu } from "../";

import styles from "./Window.module.scss";

interface PropsWindow {
  name: string;
  children: ReactNode;
  showMenu: boolean;
  iconPath: string;
  title: string | ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  alert?: boolean;
  image?: boolean;
}

const Window: FC<PropsWindow> = ({
  children,
  showMenu,
  iconPath,
  title,
  onClick,
  alert,
  image
}) => {
  return (
    <div
      className={classNames(styles.window, {
        [styles.alert]: alert,
        [styles.imageWindow]: image
      })}
    >
      <WindowTitle iconPath={iconPath} title={title} onClick={onClick} />
      {showMenu && <WindowMenu />}
      {children}
    </div>
  );
};

export { Window };
