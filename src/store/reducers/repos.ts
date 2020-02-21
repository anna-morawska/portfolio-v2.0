import { IRepo, IFetchReposAction } from "../actions/repos";
import { ActionTypes } from "../types";

export type TReposState = IRepo[];

const reposReducer = (state: TReposState = [], action: IFetchReposAction) => {
  switch (action.type) {
    case ActionTypes.FETCHED_REPOS:
      return action.payload;

    default:
      return state;
  }
};

export { reposReducer };
