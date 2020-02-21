import React, { FC, ReactNode, useMemo } from "react";
import { withDraggable } from "../../hoc/withDraggable";

import noteIcon from "../../assets/note.png";
import pdfIcon from "../../assets/pdficon.png";
import ieIcon from "../../assets/explorer.png";
import folderIcon from "../../assets/folder.png";
import imgIcon from "../../assets/image-icon.png";

import styles from "./File.module.scss";

interface PropsFile {
  fileName: string | ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  type: IconType;
}

enum IconType {
  note = "note",
  image = "image",
  folder = "folder",
  ie = "ie",
  pdf = "pdf"
}
const getIcon = (type: IconType) => {
  switch (type) {
    case IconType.note:
      return noteIcon;
    case IconType.pdf:
      return pdfIcon;
    case IconType.ie:
      return ieIcon;
    case IconType.folder:
      return folderIcon;
    case IconType.image:
      return imgIcon;
  }
};

const $File: FC<PropsFile> = ({ fileName, type, onClick }) => {
  const icon = useMemo(() => getIcon(type), [type]);

  return (
    <div className={styles.file} onDoubleClick={onClick}>
      <img className={styles.icon} src={icon} draggable="false" />
      <span className={styles.fileName}>{fileName}</span>
    </div>
  );
};

const File = withDraggable<PropsFile>($File);

export { File, IconType };
