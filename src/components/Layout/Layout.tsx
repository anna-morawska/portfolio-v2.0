import React, { createContext, useRef, Context } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  openStartMenuAction,
  setActiveWindow
} from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";
import { changeLanguage, Languages } from "../../store/actions/language";

import { Startbar, StartMenu } from "../../components";

import styles from "./Layout.module.scss";

export const ClickOutsideContext: Context<any> = createContext(null);

const Layout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const language = useSelector((state: IStore) => state.language);
  const isStartMenuOpen = useSelector(
    (state: IStore) => state.layout.isStartMenuOpen
  );
  const openedWindows = useSelector(
    (state: IStore) => state.layout.openedWindows
  );
  const startButtonRef = useRef(null);

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

  return (
    <ClickOutsideContext.Provider value={startButtonRef}>
      <div className={styles.desktop}>
        <Startbar
          setWindowActive={setWindowActive}
          openedWindows={openedWindows}
          language={language}
          changeLanguageHandler={changeLanguageHandler}
          toggleStartMenu={toggleStartMenu}
        />
        {isStartMenuOpen && (
          <StartMenu onClickOutsideHandler={closeStartMenu} />
        )}
        {children}
      </div>
    </ClickOutsideContext.Provider>
  );
};

export { Layout };
