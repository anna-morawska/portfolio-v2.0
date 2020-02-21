import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  openFolder,
  closeAlert,
  closeFolder
} from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";

import {
  File,
  IconType,
  Layout,
  Alert,
  translate,
  FolderWindow
} from "../../components";

import styles from "./Desktop.module.scss";

const Desktop: React.FC = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state: IStore) => state.repos);
  const alerts = useSelector((state: IStore) => state.layout.openedAlerts);
  const folders = useSelector((state: IStore) => state.layout.openedFolders);

  const onClickFolderHandler = (name: string, close: boolean = false) => () => {
    close ? dispatch(closeFolder(name)) : dispatch(openFolder(name));
  };

  const onClickAlertHandler = (name: string) => () => {
    dispatch(closeAlert(name));
  };

  return (
    <Layout>
      <div className={styles.icons}>
        {folders.map(folderName => (
          <FolderWindow
            key={folderName}
            title={folderName}
            onClick={onClickFolderHandler(folderName, true)}
          />
        ))}
        {alerts.map(alertName => (
          <Alert
            key={alertName}
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
            onClick={onClickFolderHandler(repo.name)}
          ></File>
        ))}
      </div>
    </Layout>
  );
};

export { Desktop };
