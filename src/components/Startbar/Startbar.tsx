import React, { FC, useContext } from "react";

import { ClickOutsideContext } from "../../components";
import { Languages } from "../../store/actions/language";

import { Clock } from "../";
import styles from "./Startbar.module.scss";

interface PropsStartbar {
  language: Languages;
  toggleStartMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  changeLanguageHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Startbar: FC<PropsStartbar> = ({
  changeLanguageHandler,
  toggleStartMenu,
  language
}) => {
  const startButtonRef = useContext(ClickOutsideContext);

  return (
    <div className={styles.startBar}>
      <button
        ref={startButtonRef}
        onClick={toggleStartMenu}
        className={styles.startButton}
      >
        Start
      </button>
      <div className={styles.clock}>
        <div onClick={changeLanguageHandler} className={styles.language}>
          <p>{language}</p>
          <div className={styles[language]} />
        </div>
        <Clock />
      </div>
    </div>
  );
};

export { Startbar };
