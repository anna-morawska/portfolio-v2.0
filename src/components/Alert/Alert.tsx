import React, { FC, ReactNode } from "react";
import styles from "./Alert.module.scss";
import { Window } from "../";
import alertIcon from "../../assets/alert.png";
import { withDraggable } from "../../hoc/withDraggable";

interface AlertProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string | ReactNode;
  text: string | ReactNode;
  name: string;
}

const $Alert: FC<AlertProps> = ({ onClick, title, text, name }) => {
  return (
    <Window name={name} alert showMenu={false} onClick={onClick} title={title}>
      <div className={styles.main}>
        <div>
          <img src={alertIcon} alt="Alert Icon" />
          <p>{text}</p>
        </div>
        <button onClick={onClick} className={styles.okBtn}>
          Ok
        </button>
      </div>
    </Window>
  );
};

const Alert = withDraggable<AlertProps>($Alert);

export { Alert };
