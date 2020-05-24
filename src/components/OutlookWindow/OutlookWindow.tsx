import React, { FC } from "react";

import { Window, translate } from "../";
import { withResizable } from "../../hoc/withResizable";
import { withDraggable } from "../../hoc/withDraggable";

import emailIcon from "../../assets/newEmail.png";

import styles from "./OutlookWindow.module.scss";

interface PropsOutlookWindow {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  handleEmailSubmit?: (event: React.FormEvent) => void;
  onInputChangeHandler?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const $OutlookWindow: FC<PropsOutlookWindow> = ({
  onClick,
  name,
  handleEmailSubmit,
  onInputChangeHandler,
}) => {
  return (
    <Window
      name={name}
      showMenu={true}
      onClick={onClick}
      title={translate("outlookWindow.newMessage")}
    >
      <form
        className={styles.main}
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleEmailSubmit}
      >
        <div className={styles.address}>
          <div className={styles.addressInputs}>
            <div>
              <span>{translate("outlookWindow.sender")}:</span>
              <input
                name="email"
                onChange={onInputChangeHandler}
                required
                type="email"
              />
            </div>
            <div>
              <span>{translate("outlookWindow.receiver")}:</span>
              <input
                type="email"
                onChange={onInputChangeHandler}
                value="ania.morawska92@gmail.com"
              />
            </div>
            <div>
              <span>{translate("outlookWindow.topic")}:&nbsp;&nbsp;</span>
              <input name="topic" onChange={onInputChangeHandler} type="text" />
            </div>
          </div>
          <button title="Please enter your email address">
            <img src={emailIcon} alt="Send Email" />
            <p>{translate("outlookWindow.send")}</p>
          </button>
        </div>
        <textarea name="message" onChange={onInputChangeHandler} required />
      </form>
    </Window>
  );
};

const OutlookWindow = withDraggable<PropsOutlookWindow>(
  withResizable<PropsOutlookWindow>($OutlookWindow)
);

export { $OutlookWindow, OutlookWindow };
