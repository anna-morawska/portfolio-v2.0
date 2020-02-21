import React, { FC, ReactNode } from "react";
import { Window } from "../";
import folderIcon from "../../assets/folder.png";
import styles from "./FolderWindow.module.scss";

interface PropsFolderWindow {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  title: string | ReactNode;
}

const FolderWindow: FC<PropsFolderWindow> = ({ onClick, children, title }) => {
  return (
    <Window
      showMenu={true}
      onClick={onClick}
      iconPath={folderIcon}
      title={title}
    >
      <div className={styles.folderWindow}>{children}</div>
    </Window>
  );
};

export { FolderWindow };
