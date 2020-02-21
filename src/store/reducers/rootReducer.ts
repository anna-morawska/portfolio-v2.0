import { combineReducers } from "redux";
import { loadingReducer } from "./loading";
import { errorReducer } from "./error";
import { languageReducer } from "./language";
import { Languages } from "../actions/language";
import { layoutReducer, ILayoutState } from "./layout";
import { reposReducer, TReposState } from "./repos";

export interface IStore {
  loading: boolean;
  error: boolean;
  language: Languages;
  repos: TReposState;
  layout: ILayoutState;
}

const rootReducer = combineReducers<IStore>({
  loading: loadingReducer,
  error: errorReducer,
  language: languageReducer,
  repos: reposReducer,
  layout: layoutReducer
});

export { rootReducer };
