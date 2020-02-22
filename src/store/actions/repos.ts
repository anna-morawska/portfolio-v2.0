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
  readme?: string;
  imageUrl?: string;
  loading: boolean;
}

export interface IFetchReposAction {
  type: ActionTypes.FETCHED_REPOS;
  payload: IRepo[];
}

interface IResponse {
  content: string;
}

export interface IFetchedFolderContentAction {
  type: ActionTypes.FETCHED_FOLDER_CONTENT;
  readme: string;
  imageUrl: string;
  name: string;
}

export interface ILoadFolderContentAction {
  type: ActionTypes.LOAD_FOLDER_CONTENT;
  name: string;
  loading: boolean;
}

export const fetchRepos = () => async (dispatch: Dispatch) => {
  try {
    dispatch<ILoadingAction>(loadingAction(true));

    // keep loading for at least n number of ms to show loading screeen
    const response = await parallel<IRepo[]>(api<IRepo[]>(URL), 3000);

    const payload = response
      .filter(({ fork }) => fork === false)
      .map(({ id, name, html_url, fork }) => ({
        loading: true,
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

export const loadFolderContent = (name: string, loading: boolean) =>
  <ILoadFolderContentAction>{
    type: ActionTypes.LOAD_FOLDER_CONTENT,
    name,
    loading
  };

export const fetchedFolderContent = (name: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch<ILoadFolderContentAction>(loadFolderContent(name, true));

    const readmeUlr = `https://raw.githubusercontent.com/anna-morawska/${name}/master/readme.md`;
    const imageUrl = `https://raw.githubusercontent.com/anna-morawska/${name}/master/readme.jpg`;

    const content = await api<string>(readmeUlr, "text");

    dispatch<IFetchedFolderContentAction>({
      type: ActionTypes.FETCHED_FOLDER_CONTENT,
      readme: content,
      imageUrl,
      name
    });

    dispatch<ILoadFolderContentAction>(loadFolderContent(name, false));
  } catch (err) {
    dispatch<IFetchedFolderContentAction>({
      type: ActionTypes.FETCHED_FOLDER_CONTENT,
      readme: "",
      imageUrl: "",
      name
    });
  }
};
