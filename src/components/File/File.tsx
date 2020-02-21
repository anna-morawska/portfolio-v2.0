import React, { FC, ReactNode, useMemo } from "react";
import styles from "./File.module.scss";

import noteIcon from "../../assets/note.png";
import pdfIcon from "../../assets/pdficon.png";
import ieIcon from "../../assets/explorer.png";
import folderIcon from "../../assets/folder.png";
import imgIcon from "../../assets/image-icon.png";

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

const File: FC<PropsFile> = ({ fileName, type, onClick }) => {
  const icon = useMemo(() => getIcon(type), [type]);

  return (
    <div className={styles.file} onClick={onClick}>
      <img className={styles.icon} src={icon} />
      <span className={styles.fileName}>{fileName}</span>
    </div>
  );
};

export { File, IconType };
