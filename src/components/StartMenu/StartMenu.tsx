import React, { FC } from "react";
import { translate, StartMenuItem } from "../";

import rightArrowIcon from "../../assets/right.png";
import userPhotoIcon from "../../assets/user.jpg";

import { IStartMenuItem, StartMenuItemSide } from "./StartMenuItemsList";
import styles from "./StartMenu.module.scss";

interface IMenuItem extends IStartMenuItem {
  onClick?: () => void;
}

interface IStartMenu {
  menuItems: IMenuItem[];
  forwardedRef:
    | React.MutableRefObject<HTMLDivElement>
    | ((instance: HTMLDivElement) => void);
}

const StartMenu: FC<IStartMenu> = ({ menuItems, forwardedRef }) => {
  return (
    <div ref={forwardedRef} className={styles.startMenu}>
      <header className={styles.header}>
        <img alt="user" src={userPhotoIcon} />
        <span>{translate("startMenu.username")}</span>
      </header>
      <main className={styles.main}>
        <div className={styles.column_left}>
          {menuItems
            .filter((item) => item.side === StartMenuItemSide.LEFT)
            .map((item) => (
              <StartMenuItem
                key={item.title?.toString()}
                name={item.title}
                onClick={item.onClick}
                title={item.title.toString()}
              />
            ))}
          <div className={styles.other}>
            <span>{translate("startMenu.allPrograms")}</span>
            <img alt="all programs" src={rightArrowIcon} />
          </div>
        </div>
        <div className={styles.column_right}>
          {menuItems
            .filter((item) => item.side === StartMenuItemSide.RIGHT)
            .map((item) => (
              <StartMenuItem
                key={item.title.toString()}
                name={item.title.toString()}
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
