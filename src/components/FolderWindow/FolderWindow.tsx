import React, { FC, ReactNode } from "react";
import { Window, File, IconType } from "../";
import { withResizable } from "../../hoc/withResizable";
import { withDraggable } from "../../hoc/withDraggable";
import { IRepo } from "../../store/actions/repos";
import styles from "./FolderWindow.module.scss";

interface PropsFolderWindow {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  title: string | ReactNode;
  name: string;
  content?: IRepo;
  openReadmeHandler?: (name: string, content: string) => () => void;
  openImageHandler?: (name: string, imageUrl: string) => () => void;
}

const $FolderWindow: FC<PropsFolderWindow> = ({
  onClick,
  title,
  name,
  content,
  openReadmeHandler,
  openImageHandler
}) => {
  return (
    <Window name={name} showMenu={true} onClick={onClick} title={title}>
      <div className={styles.folderWindow}>
        {content?.html_url && (
          <File
            fileName={`${content.name}.html`}
            type={IconType.ie}
            href={content.html_url}
          ></File>
        )}
        {content?.readme && openReadmeHandler && (
          <File
            fileName={`readme.txt`}
            type={IconType.note}
            onClick={openReadmeHandler(content.name, content.readme)}
          ></File>
        )}
        {content?.imageUrl && openImageHandler && (
          <File
            fileName={`preview.jpg`}
            type={IconType.image}
            onClick={openImageHandler(content.name, content.imageUrl)}
          ></File>
        )}
      </div>
    </Window>
  );
};

const FolderWindow = withDraggable<PropsFolderWindow>(
  withResizable<PropsFolderWindow>($FolderWindow)
);

export { $FolderWindow, FolderWindow };
