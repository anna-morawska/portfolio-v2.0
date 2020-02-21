import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { openFolder } from "../../store/actions/layout";
import { openStartMenuAction } from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";

import { Startbar, StartMenu, File, IconType } from "../../components";

import styles from "./Desktop.module.scss";

const Desktop: React.FC = () => {
  const dispatch = useDispatch();
  const isStartMenuOpen = useSelector(
    (state: IStore) => state.layout.isStartMenuOpen
  );
  const repos = useSelector((state: IStore) => state.repos);

  const toggleStartMenu = () => {
    dispatch(openStartMenuAction(!isStartMenuOpen));
  };

  const closeStartMenu = () => {
    dispatch(openStartMenuAction(false));
  };

  const onClickHandler = (name: string, id: number) => () => {
    dispatch(openFolder(name, id));
  };

  // TODO: onclickhandler for folders x
  const clodeFolder = () => {};

  return (
    <div className={styles.desktop}>
      <Startbar onClick={toggleStartMenu} />
      {isStartMenuOpen && <StartMenu onClickOutsideHandler={closeStartMenu} />}
      <div className={styles.icons}>
        {repos.map(repo => (
          <File
            key={repo.id}
            fileName={repo.name}
            type={IconType.folder}
            onClick={onClickHandler(repo.name, repo.id)}
          ></File>
        ))}
      </div>
    </div>
  );
};

export { Desktop };
