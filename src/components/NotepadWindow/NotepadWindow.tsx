import React, { FC } from "react";
import { Window } from "../";
import noteIcon from "../../assets/note.png";

import styles from "./NotepadWindow.module.scss";

interface PropsNotepad {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NotepadWindow: FC<PropsNotepad> = ({ text, onClick }) => {
  return (
    <Window
      showMenu={true}
      onClick={onClick}
      iconPath={noteIcon}
      title="readme.txt"
    >
      <div className={styles.main}>
        <p>-------------------------------------</p>
        <p>-------------|| ReadMe ||------------</p>
        <p>-------------------------------------</p>
        <br />
        {text}
      </div>
    </Window>
  );
};

export { NotepadWindow };
