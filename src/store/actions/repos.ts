import { Dispatch } from "redux";
import { api, parallel } from "../../utils/utils";
import { ActionTypes } from "../types";
import { errorAction, IErrorAction } from "./error";
import { loadingAction, ILoadingAction } from "./loading";

const URL = "https://api.github.com/users/anna-morawska/repos";

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
  fork: boolean;
}

export interface IFetchReposAction {
  type: ActionTypes.FETCHED_REPOS;
  payload: IRepo[];
}

export const fetchRepos = () => async (dispatch: Dispatch) => {
  try {
    dispatch<ILoadingAction>(loadingAction(true));

    // keep loading for at least n number of ms to show loading screeen
    const response = await parallel<IRepo[]>(api<IRepo[]>(URL), 3000);

    const payload = response
      .filter(({ fork }) => fork === false)
      .map(({ id, name, html_url, fork }) => ({
        id,
        name,
        html_url,
        fork
      }));

    dispatch<IFetchReposAction>({
      type: ActionTypes.FETCHED_REPOS,
      payload
    });

    dispatch<ILoadingAction>(loadingAction(false));
  } catch (err) {
    dispatch<IErrorAction>(errorAction(true));
  }
};
