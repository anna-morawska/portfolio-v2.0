import React, { FC, useState } from "react";
import { Layout, Alert, translate } from "../../components";
import styles from "./Error.module.scss";

interface ErrorProps {}

const Error: FC<ErrorProps> = () => {
  const [isBlueScreenVisible, setIsBlueScreenVisible] = useState(false);

  return isBlueScreenVisible ? (
    <div className={styles.blueScreen} />
  ) : (
    <Layout>
      <Alert
        name="example"
        onClick={() => setIsBlueScreenVisible(true)}
        title={translate("alert.error")}
        text={translate("alert.error.text")}
      />
    </Layout>
  );
};

export { Error };
