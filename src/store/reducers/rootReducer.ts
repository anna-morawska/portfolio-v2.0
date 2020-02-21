import { combineReducers } from "redux";
import { loadingReducer } from "./loading";
import { errorReducer } from "./error";
import { layoutReducer, ILayoutState } from "./layout";
import { reposReducer, TReposState } from "./repos";

export interface IStore {
  loading: boolean;
  error: boolean;
  repos: TReposState;
  layout: ILayoutState;
}

const rootReducer = combineReducers<IStore>({
  loading: loadingReducer,
  error: errorReducer,
  repos: reposReducer,
  layout: layoutReducer
});

export { rootReducer };
