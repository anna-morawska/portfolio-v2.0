import React, { useCallback, forwardRef } from "react";

import { Languages } from "../../store/actions/language";

import { Clock, Icon } from "../";
import styles from "./Startbar.module.scss";

interface PropsStartbar {
  setWindowActive: (name: string) => void;
  language: Languages;
  openedWindows: string[];
  toggleStartMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  changeLanguageHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Startbar = forwardRef<HTMLButtonElement, PropsStartbar>(
  (
    {
      changeLanguageHandler,
      toggleStartMenu,
      language,
      openedWindows,
      setWindowActive,
    },
    ref
  ) => {
    const setWindowActiveHandler = useCallback(
      (name: string) => () => {
        setWindowActive(name);
      },
      [setWindowActive]
    );

    return (
      <div className={styles.startBar}>
        <button
          ref={ref}
          onClick={toggleStartMenu}
          className={styles.startButton}
        >
          Start
        </button>
        {openedWindows.map((openedWindow) => (
          <div
            key={openedWindow}
            className={styles.startbarTitle}
            onClick={setWindowActiveHandler(openedWindow)}
          >
            <Icon name={openedWindow} />
            <p>{openedWindow}</p>
          </div>
        ))}
        <div className={styles.clock}>
          <div onClick={changeLanguageHandler} className={styles.language}>
            <p>{language}</p>
            <div className={styles[language]} />
          </div>
          <Clock />
        </div>
      </div>
    );
  }
);

export { Startbar };
