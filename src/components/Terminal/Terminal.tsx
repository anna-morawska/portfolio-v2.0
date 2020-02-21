import React, { FC, ReactNode } from "react";

import { Window } from "../";
import { withResizable } from "../../hoc/withResizable";
import { withDraggable } from "../../hoc/withDraggable";
import { TypedText } from "./TypedText";
import terminalIcon from "../../assets/console.png";
import styles from "./Terminal.module.scss";

interface PropsTerminalWindow {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  name: string;
}

const $Terminal: FC<PropsTerminalWindow> = ({ onClick, name }) => {
  return (
    <Window
      name={name}
      showMenu={false}
      onClick={onClick}
      iconPath={terminalIcon}
      title="Terminal"
    >
      <div className={styles.main}>
        <TypedText />
      </div>
    </Window>
  );
};

const Terminal = withDraggable<PropsTerminalWindow>(
  withResizable<PropsTerminalWindow>($Terminal)
);

export { Terminal };
