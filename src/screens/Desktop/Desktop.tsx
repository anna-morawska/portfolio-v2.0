import React, { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  openWindow,
  closeAlert,
  closeWindow,
  openReadmeAction,
  openImageAction,
} from "../../store/actions/layout";
import { fetchedFolderContent } from "../../store/actions/repos";
import { IStore } from "../../store/reducers/rootReducer";
import { windowTypes } from "../../components/StartMenu/StartMenuItemsList";
import Cv from "../../assets/files/anna_morawska_cv.pdf";

import {
  DraggableFile,
  IconType,
  Layout,
  Alert,
  translate,
  FolderWindow,
  OutlookWindow,
  Terminal,
  NotepadWindow,
  IrfanViewWindow,
} from "../../components";

import styles from "./Desktop.module.scss";

const Desktop: React.FC = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state: IStore) => state.repos);
  const alerts = useSelector((state: IStore) => state.layout.openedAlerts);
  const windows = useSelector((state: IStore) => state.layout.openedWindows);
  const readmeContent = useSelector(
    (state: IStore) => state.layout.readmeContent
  );
  const imagePreviewContent = useSelector(
    (state: IStore) => state.layout.imagePreviewContent
  );

  const onClickAlertHandler = useCallback(
    (name: string) => () => {
      dispatch(closeAlert(name));
    },
    [dispatch]
  );

  const openReadmeHandler = useCallback(
    (name: string, content: string) => () => {
      dispatch(openWindow(windowTypes.NOTEPAD));
      dispatch(openReadmeAction(name, content));
    },
    [dispatch]
  );

  const openImageHandler = useCallback(
    (name: string, imageUrl: string) => () => {
      dispatch(openWindow(windowTypes.IRFAN_VIEW));
      dispatch(openImageAction(name, imageUrl));
    },
    [dispatch]
  );

  const onClickFolderHandler = useCallback(
    (name: string) => () => {
      dispatch(fetchedFolderContent(name));
      dispatch(openWindow(name));
    },
    [dispatch]
  );

  const onCloseWindowHandler = useCallback(
    (name: string) => () => {
      dispatch(closeWindow(name));
    },
    [dispatch]
  );

  return (
    <Layout>
      <div className={styles.icons}>
        {windows.map((windowName) => {
          if (windowName === windowTypes.OUTLOOK) {
            return (
              <OutlookWindow
                name={windowName}
                key={windowName}
                onClick={onCloseWindowHandler(windowName)}
              />
            );
          } else if (windowName === windowTypes.TERMINAL) {
            return (
              <Terminal
                name={windowName}
                key={windowName}
                onClick={onCloseWindowHandler(windowName)}
              />
            );
          } else if (windowName === windowTypes.NOTEPAD) {
            return (
              <NotepadWindow
                content={readmeContent}
                name={windowName}
                key={windowName}
                onClick={onCloseWindowHandler(windowName)}
              />
            );
          } else if (
            windowName === windowTypes.IRFAN_VIEW &&
            imagePreviewContent
          ) {
            return (
              <IrfanViewWindow
                imgUrl={imagePreviewContent}
                name={windowName}
                key={windowName}
                onClick={onCloseWindowHandler(windowName)}
              />
            );
          }
          return (
            <FolderWindow
              name={windowName}
              key={windowName}
              title={windowName}
              content={repos.find((repo) => repo.name === windowName)}
              onClick={onCloseWindowHandler(windowName)}
              openReadmeHandler={openReadmeHandler}
              openImageHandler={openImageHandler}
            ></FolderWindow>
          );
        })}
        {alerts.map((alertName) => (
          <Alert
            name={windowTypes.ALERT}
            key={alertName}
            onClick={onClickAlertHandler(alertName)}
            title={translate("alert.title")}
            text={translate("alert.text")}
          />
        ))}
        {repos.map((repo) => (
          <DraggableFile
            key={repo.id}
            fileName={repo.name}
            type={IconType.folder}
            onClick={onClickFolderHandler(repo.name)}
          ></DraggableFile>
        ))}
        <a href={Cv} target="_blank">
          <DraggableFile
            fileName="anna_morawska_CV"
            type={IconType.pdf}
          ></DraggableFile>
        </a>
      </div>
    </Layout>
  );
};

export { Desktop };
