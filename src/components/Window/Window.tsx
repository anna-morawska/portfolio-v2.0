import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import { WindowTitle } from "../";
import { WindowMenu } from "../WindowMenu/WindowMenu";
import styles from "./Window.module.scss";

interface PropsWindow {
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
}) => (
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

export { Window };
