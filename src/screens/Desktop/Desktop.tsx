import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { openFolder } from "../../store/actions/layout";
import { IStore } from "../../store/reducers/rootReducer";

import { File, IconType, Layout } from "../../components";

import styles from "./Desktop.module.scss";

const Desktop: React.FC = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state: IStore) => state.repos);

  const onClickHandler = (name: string, id: number) => () => {
    dispatch(openFolder(name, id));
  };

  return (
    <Layout>
      <div className={styles.icons}>
        {repos.map(repo => (
          <File
            key={repo.id}
            fileName={repo.name}
            type={IconType.folder}
            onClick={onClickHandler(repo.name, repo.id)}
          ></File>
        ))}
      </div>
    </Layout>
  );
};

export { Desktop };
