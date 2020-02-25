import React, { FC } from "react";
import { Window } from "../";
import { withResizable } from "../../hoc/withResizable";
import { withDraggable } from "../../hoc/withDraggable";

import styles from "./IrfanViewWindow.module.scss";

interface PropsIrfanViewWindow {
  imgUrl: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

const $IrfanViewWindow: FC<PropsIrfanViewWindow> = ({
  imgUrl,
  onClick,
  name
}) => (
  <Window name={name} image showMenu={true} onClick={onClick} title="InfraView">
    <div className={styles.main}>
      <div>
        <img alt="preview" src={imgUrl} />
      </div>
    </div>
  </Window>
);

const IrfanViewWindow = withDraggable<PropsIrfanViewWindow>(
  withResizable<PropsIrfanViewWindow>($IrfanViewWindow)
);

export { IrfanViewWindow };
