import React, { FC, ReactNode } from "react";
import { Window } from "../";
import { withResizable } from "../../hoc/withResizable";
import { withDraggable } from "../../hoc/withDraggable";
import folderIcon from "../../assets/folder.png";
import styles from "./FolderWindow.module.scss";

interface PropsFolderWindow {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  title: string | ReactNode;
  name: string;
}

const $FolderWindow: FC<PropsFolderWindow> = ({
  onClick,
  children,
  title,
  name
}) => {
  return (
    <Window name={name} showMenu={true} onClick={onClick} title={title}>
      <div className={styles.folderWindow}>{children}</div>
    </Window>
  );
};

const FolderWindow = withDraggable<PropsFolderWindow>(
  withResizable<PropsFolderWindow>($FolderWindow)
);

export { $FolderWindow, FolderWindow };
