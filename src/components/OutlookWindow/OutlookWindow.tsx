import React, { FC } from "react";

import { Window, translate } from "../";
import { withResizable } from "../../hoc/withResizable";
import { withDraggable } from "../../hoc/withDraggable";

import emailIcon from "../../assets/newEmail.png";

import styles from "./OutlookWindow.module.scss";

interface PropsOutlookWindow {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

const $OutlookWindow: FC<PropsOutlookWindow> = ({ onClick, name }) => {
  return (
    <Window
      name={name}
      showMenu={true}
      onClick={onClick}
      title={translate("outlookWindow.newMessage")}
    >
      <form className={styles.main}>
        <div className={styles.adress}>
          <div className={styles.adressInputs}>
            <div>
              <span>{translate("outlookWindow.sender")}:</span>
              <input type="email" />
            </div>
            <div>
              <span>{translate("outlookWindow.receiver")}:</span>
              <input type="email" value="ania.morawska92@gmail.com" />
            </div>
            <div>
              <span>{translate("outlookWindow.topic")}:&nbsp;&nbsp;</span>
              <input type="text" />
            </div>
          </div>
          <button title="Please enter your email address">
            <img src={emailIcon} alt="Send Email" />
            <p>{translate("outlookWindow.send")}</p>
          </button>
        </div>
        <textarea />
      </form>
    </Window>
  );
};

const OutlookWindow = withDraggable<PropsOutlookWindow>(
  withResizable<PropsOutlookWindow>($OutlookWindow)
);

export { OutlookWindow };
