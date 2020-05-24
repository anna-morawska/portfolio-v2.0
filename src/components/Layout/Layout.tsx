import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  openStartMenuAction,
  setActiveWindow,
} from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";
import { changeLanguage, Languages } from "../../store/actions/language";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { Startbar, StartMenuContainer as StartMenu } from "../../components";

import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const language = useSelector((state: IStore) => state.language);
  const isStartMenuOpen = useSelector(
    (state: IStore) => state.layout.isStartMenuOpen
  );
  const openedWindows = useSelector(
    (state: IStore) => state.layout.openedWindows
  );

  const changeLanguageHandler = () => {
    const changeToLanguage =
      language === Languages.POLISH ? Languages.ENGLISH : Languages.POLISH;
    dispatch(changeLanguage(changeToLanguage));
  };

  const toggleStartMenu = () => {
    dispatch(openStartMenuAction(!isStartMenuOpen));
  };

  const closeStartMenu = () => {
    dispatch(openStartMenuAction(false));
  };

  const setWindowActive = (name: string) => {
    dispatch(setActiveWindow(name));
  };

  const startMenuRef = useRef<HTMLDivElement | null>(null);
  const startButtonRef = useRef<HTMLButtonElement | null>(null);

  useOnClickOutside({
    ref: startMenuRef,
    onClickOutsideHandler: closeStartMenu,
    ignoreRef: startButtonRef,
  });

  return (
    <div className={styles.desktop}>
      <Startbar
        ref={startButtonRef}
        setWindowActive={setWindowActive}
        openedWindows={openedWindows}
        language={language}
        changeLanguageHandler={changeLanguageHandler}
        toggleStartMenu={toggleStartMenu}
      />
      {isStartMenuOpen && <StartMenu ref={startMenuRef} />}
      {children}
    </div>
  );
};

export { Layout };
