import React, { FC, ReactNode } from "react";
import styles from "./Alert.module.scss";
import { Window } from "../";
import windowsIcon from "../../assets/windows_icon.png";
import alertIcon from "../../assets/alert.png";
import { withDraggable } from "../../hoc/withDraggable";

interface AlertProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string | ReactNode;
  text: string | ReactNode;
}

const $Alert: FC<AlertProps> = ({ onClick, title, text }) => {
  return (
    <Window
      alert
      showMenu={false}
      onClick={onClick}
      iconPath={windowsIcon}
      title={title}
    >
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
