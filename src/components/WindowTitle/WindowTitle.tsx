import React, { FC, ReactNode } from "react";
import styles from "./WindowTitle.module.scss";

interface PropsWindowTitle {
  title: string | ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  iconPath: string;
}

const WindowTitle: FC<PropsWindowTitle> = ({ title, onClick, iconPath }) => (
  <header className={styles.windowTitle}>
    <img src={iconPath} />
    <span>{title}</span>
    <button onClick={onClick}>X</button>
  </header>
);

export { WindowTitle };
