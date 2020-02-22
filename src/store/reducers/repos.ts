import {
  IRepo,
  IFetchReposAction,
  IFetchedFolderContentAction,
  ILoadFolderContentAction
} from "../actions/repos";
import { ActionTypes } from "../types";

export type TReposState = IRepo[];

const updateRepo = (repos: TReposState, repoName: string, properties: any) => {
  return repos.map(repo =>
    repo.name === repoName
      ? {
          ...repo,
          ...properties
        }
      : repo
  );
};

const reposReducer = (
  state: TReposState = [],
  action:
    | IFetchReposAction
    | IFetchedFolderContentAction
    | ILoadFolderContentAction
) => {
  switch (action.type) {
    case ActionTypes.FETCHED_REPOS:
      return action.payload;
    case ActionTypes.FETCHED_FOLDER_CONTENT:
      return updateRepo(state, action.name, {
        readme: action.readme,
        imageUrl: action.imageUrl
      });

    case ActionTypes.LOAD_FOLDER_CONTENT:
      return updateRepo(state, action.name, { loading: action.loading });

    default:
      return state;
  }
};

export { reposReducer };
