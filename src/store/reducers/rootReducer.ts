import { combineReducers } from "redux";
import { loadingReducer } from "./loading";
import { layoutReducer, ILayoutState } from "./layout";
import { reposReducer, TReposState } from "./repos";

export interface IStore {
  loading: boolean;
  repos: TReposState;
  layout: ILayoutState;
}

const rootReducer = combineReducers<IStore>({
  loading: loadingReducer,
  repos: reposReducer,
  layout: layoutReducer
});

export { rootReducer };
