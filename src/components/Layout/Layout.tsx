import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { openStartMenuAction } from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";
import { changeLanguage, Languages } from "../../store/actions/language";

import { Startbar, StartMenu } from "../../components";

import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const language = useSelector((state: IStore) => state.language);
  const isStartMenuOpen = useSelector(
    (state: IStore) => state.layout.isStartMenuOpen
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

  return (
    <div className={styles.desktop}>
      <Startbar
        language={language}
        changeLanguageHandler={changeLanguageHandler}
        toggleStartMenu={toggleStartMenu}
      />
      {isStartMenuOpen && <StartMenu onClickOutsideHandler={closeStartMenu} />}
      {children}
    </div>
  );
};

export { Layout };
