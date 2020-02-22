import React, { FC, ReactNode } from "react";
import { Icon } from "../";
import styles from "./WindowTitle.module.scss";

interface PropsWindowTitle {
  title: string | ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

const WindowTitle: FC<PropsWindowTitle> = ({ title, onClick, name }) => (
  <header className={styles.windowTitle}>
    <Icon name={name} />
    <span>{title}</span>
    <button onClick={onClick}>X</button>
  </header>
);

export { WindowTitle };
