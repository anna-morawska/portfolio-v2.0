import { ActionTypes } from "../types";

export interface IOpenStartMenuAction {
  type: ActionTypes.OPEN_START_MENU;
  payload: boolean;
}

export interface IOpenFolderAction {
  type: ActionTypes.OPEN_FOLDER;
  name: string;
  id: number;
}

export interface ICloseFolderAction {
  type: ActionTypes.CLOSE_FOLDER;
  id: number;
}

export const openStartMenuAction = (open: boolean) =>
  <IOpenStartMenuAction>{
    type: ActionTypes.OPEN_START_MENU,
    payload: open
  };

export const openFolder = (name: string, id: number) =>
  <IOpenFolderAction>{
    type: ActionTypes.OPEN_FOLDER,
    name,
    id
  };

export const closeFolder = (id: number) =>
  <ICloseFolderAction>{
    type: ActionTypes.CLOSE_FOLDER,
    id
  };
