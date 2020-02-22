import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  openWindow,
  closeAlert,
  closeWindow
} from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";
import { windowTypes } from "../../components/StartMenu/StartMenuItemsList";

import {
  File,
  IconType,
  Layout,
  Alert,
  translate,
  FolderWindow,
  OutlookWindow,
  Terminal
} from "../../components";

import styles from "./Desktop.module.scss";

const Desktop: React.FC = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state: IStore) => state.repos);
  const alerts = useSelector((state: IStore) => state.layout.openedAlerts);
  const windows = useSelector((state: IStore) => state.layout.openedWindows);

  const onClickFolderHandler = (name: string, close: boolean = false) => () => {
    close ? dispatch(closeWindow(name)) : dispatch(openWindow(name));
  };

  const onClickAlertHandler = (name: string) => () => {
    dispatch(closeAlert(name));
  };

  return (
    <Layout>
      <div className={styles.icons}>
        {windows.map(windowName => {
          if (windowName === windowTypes.OUTLOOK) {
            return (
              <OutlookWindow
                name={windowName}
                key={windowName}
                onClick={onClickFolderHandler(windowName, true)}
              />
            );
          } else if (windowName === windowTypes.TERMINAL) {
            return (
              <Terminal
                name={windowName}
                key={windowName}
                onClick={onClickFolderHandler(windowName, true)}
              />
            );
          }
          return (
            <FolderWindow
              name={windowName}
              key={windowName}
              title={windowName}
              onClick={onClickFolderHandler(windowName, true)}
            />
          );
        })}
        {alerts.map(alertName => (
          <Alert
            name={windowTypes.ALERT}
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
