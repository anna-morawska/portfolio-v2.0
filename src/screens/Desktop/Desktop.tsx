import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { openFolder, closeAlert } from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";

import { File, IconType, Layout, Alert, translate } from "../../components";

import styles from "./Desktop.module.scss";

const Desktop: React.FC = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state: IStore) => state.repos);
  const alerts = useSelector((state: IStore) => state.layout.openedAlerts);

  const onClickFolderHandler = (name: string, id: number) => () => {
    dispatch(openFolder(name, id));
  };

  const onClickAlertHandler = (name: string) => () => {
    dispatch(closeAlert(name));
  };

  return (
    <Layout>
      <div className={styles.icons}>
        {alerts.map(alertName => (
          <Alert
            onClick={onClickAlertHandler(alertName)}
            title={translate("alert.title")}
            text={translate("alert.text")}
          />
        ))}
        {repos.map(repo => (
          <File
            key={repo.id}
            fileName={repo.name}
            type={IconType.folder}
            onClick={onClickFolderHandler(repo.name, repo.id)}
          ></File>
        ))}
      </div>
    </Layout>
  );
};

export { Desktop };
