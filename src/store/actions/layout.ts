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

export interface IOpenAlertAction {
  type: ActionTypes.OPEN_ALERT;
  name: string;
}

export interface ICloseAlertAction {
  type: ActionTypes.CLOSE_ALERT;
  name: string;
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

export const openAlert = (name: string) =>
  <IOpenAlertAction>{
    type: ActionTypes.OPEN_ALERT,
    name
  };

export const closeAlert = (name: string) =>
  <ICloseAlertAction>{
    type: ActionTypes.CLOSE_ALERT,
    name
  };
