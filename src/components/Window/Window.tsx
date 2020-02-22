import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { WindowTitle, WindowMenu } from "../";

import styles from "./Window.module.scss";

interface PropsWindow {
  name: string;
  children: ReactNode;
  showMenu: boolean;
  title: string | ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  alert?: boolean;
  image?: boolean;
}

const Window: FC<PropsWindow> = ({
  children,
  showMenu,
  title,
  onClick,
  alert,
  image,
  name
}) => {
  return (
    <div
      className={classNames(styles.window, {
        [styles.alert]: alert,
        [styles.imageWindow]: image
      })}
    >
      <WindowTitle name={name} title={title} onClick={onClick} />
      {showMenu && <WindowMenu />}
      {children}
    </div>
  );
};

export { Window };
