import React, { FC, useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { translate, StartMenuItem, ClickOutsideContext } from "../";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import {
  IOpenAlertAction,
  IOpenWindowAction
} from "../../store/actions/layout";

import { startMenuItemsList } from "./StartMenuItemsList";

import rightArrowIcon from "../../assets/right.png";
import userPhotoIcon from "../../assets/user.jpg";

import styles from "./StartMenu.module.scss";

interface IStartMenu {
  onClickOutsideHandler: () => void;
}

enum StartMenuItemSide {
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

const leftSideMenu = startMenuItemsList.filter(
  item => item.side === StartMenuItemSide.LEFT
);

const rightSideMenu = startMenuItemsList.filter(
  item => item.side === StartMenuItemSide.RIGHT
);

const StartMenu: FC<IStartMenu> = ({ onClickOutsideHandler }) => {
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const startButtonRef = useContext(ClickOutsideContext);
  useOnClickOutside({
    ref: wrapperRef,
    onClickOutsideHandler,
    ignoreRef: startButtonRef
  });

  const onClickHandler = (
    action: IOpenAlertAction | IOpenWindowAction
  ) => () => {
    dispatch(action);
  };

  return (
    <div ref={wrapperRef} className={styles.startMenu}>
      <header className={styles.header}>
        <img alt="user" src={userPhotoIcon} />
        <span>{translate("startMenu.username")}</span>
      </header>
      <main className={styles.main}>
        <div className={styles.column_left}>
          {leftSideMenu.map(item => (
            <StartMenuItem
              key={item.title?.toString()}
              name={item.title?.toString()}
              onClick={onClickHandler(item.action)}
              title={item.title}
            />
          ))}
          <div className={styles.other}>
            <span>{translate("startMenu.allPrograms")}</span>
            <img alt="all programs" src={rightArrowIcon} />
          </div>
        </div>
        <div className={styles.column_right}>
          {rightSideMenu.map(item => (
            <StartMenuItem
              key={item.title?.toString()}
              name={item.title?.toString()}
              onClick={onClickHandler(item.action)}
              title={item.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export { StartMenu };
