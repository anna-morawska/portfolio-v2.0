import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import messages from "./i18n";
import { fetchRepos } from "./store/actions/repos";
import { IStore } from "./store/reducers/rootReducer";

import { Loading, Desktop, Error } from "./screens";

import "./styles/global.scss";

const App: React.FC = () => {
  const loading = useSelector((state: IStore) => state.loading);
  const error = useSelector((state: IStore) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  return (
    <IntlProvider locale="en" messages={messages["en"]}>
      {error ? <Error /> : loading ? <Loading /> : <Desktop />}
    </IntlProvider>
  );
};

export default App;
