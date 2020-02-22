import React, { FC } from "react";
import { Window } from "../";
import irfanViewIcon from "../../assets/IrfanView.png";

import styles from "./IrfanViewWindow.module.scss";

interface PropsIrfanViewWindow {
  imgUrl: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

const IrfanViewWindow: FC<PropsIrfanViewWindow> = ({
  imgUrl,
  onClick,
  name
}) => (
  <Window name={name} image showMenu={true} onClick={onClick} title="InfraView">
    <div className={styles.main}>
      <img src={imgUrl} />
    </div>
  </Window>
);

export { IrfanViewWindow };
