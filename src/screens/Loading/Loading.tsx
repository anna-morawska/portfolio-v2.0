import React, { FC } from "react";
import styles from "./Loading.module.scss";
import Logo from "../../assets/boot-screen.png";

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
  return (
    <div className={styles.main}>
      <img className={styles.boot} src={Logo} alt="Alert Icon" />
      <div className={styles.loader}>
        <div className={styles.progress}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export { Loading };
