import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { openStartMenuAction } from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";

import { Startbar, StartMenu } from "../../components";

import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const isStartMenuOpen = useSelector(
    (state: IStore) => state.layout.isStartMenuOpen
  );

  const toggleStartMenu = () => {
    dispatch(openStartMenuAction(!isStartMenuOpen));
  };

  const closeStartMenu = () => {
    dispatch(openStartMenuAction(false));
  };

  return (
    <div className={styles.desktop}>
      <Startbar onClick={toggleStartMenu} />
      {isStartMenuOpen && <StartMenu onClickOutsideHandler={closeStartMenu} />}
      {children}
    </div>
  );
};

export { Layout };
