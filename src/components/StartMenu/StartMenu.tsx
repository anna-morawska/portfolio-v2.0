import React, { FC, useRef } from "react";
import styles from "./StartMenu.module.scss";
import { translate, StartMenuItem } from "../";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { startMenuItemsList } from "./StartMenuItemsList";

import rightArrowIcon from "../../assets/right.png";
import userPhotoIcon from "../../assets/user.jpg";

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: wrapperRef, onClickOutsideHandler });

  return (
    <div ref={wrapperRef} className={styles.startMenu}>
      <header className={styles.header}>
        <img src={userPhotoIcon} />
        <span>{translate("startMenu.username")}</span>
      </header>
      <main className={styles.main}>
        <div className={styles.column_left}>
          {leftSideMenu.map(item => (
            <StartMenuItem
              key={item.iconPath}
              iconPath={item.iconPath}
              onClick={item.onClick}
              title={item.title}
            />
          ))}
          <div className={styles.other}>
            <span>{translate("startMenu.allPrograms")}</span>
            <img src={rightArrowIcon} />
          </div>
        </div>
        <div className={styles.column_right}>
          {rightSideMenu.map(item => (
            <StartMenuItem
              key={item.iconPath}
              iconPath={item.iconPath}
              onClick={item.onClick}
              title={item.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export { StartMenu };
