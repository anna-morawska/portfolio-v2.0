import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Window } from "../";
import { withResizable } from "../../hoc/withResizable";
import { withDraggable } from "../../hoc/withDraggable";

import styles from "./NotepadWindow.module.scss";

interface PropsNotepad {
  content?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

const $NotepadWindow: FC<PropsNotepad> = ({ content, onClick, name }) => {
  return (
    <Window name={name} showMenu={true} onClick={onClick} title="readme.txt">
      <div className={styles.main}>
        <ReactMarkdown skipHtml={true} source={content} />
      </div>
    </Window>
  );
};

const NotepadWindow = withDraggable<PropsNotepad>(
  withResizable<PropsNotepad>($NotepadWindow)
);

export { NotepadWindow };
