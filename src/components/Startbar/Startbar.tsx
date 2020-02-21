import React, { FC } from "react";

import { Clock } from "../";
import styles from "./Startbar.module.scss";

interface PropsStartbar {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Startbar: FC<PropsStartbar> = ({ onClick }) => (
  <div className={styles.startBar}>
    <button onClick={onClick} className={styles.startButton}>
      Start
    </button>
    <Clock />
  </div>
);

export { Startbar };
