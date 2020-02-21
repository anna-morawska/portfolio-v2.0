import { ActionTypes } from "../types";

export interface IOpenStartMenuAction {
  type: ActionTypes.OPEN_START_MENU;
  payload: boolean;
}

export interface IOpenFolderAction {
  type: ActionTypes.OPEN_FOLDER;
  name: string;
}

export interface ICloseFolderAction {
  type: ActionTypes.CLOSE_FOLDER;
  name: string;
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

export const openFolder = (name: string) =>
  <IOpenFolderAction>{
    type: ActionTypes.OPEN_FOLDER,
    name
  };

export const closeFolder = (name: string) =>
  <ICloseFolderAction>{
    type: ActionTypes.CLOSE_FOLDER,
    name
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
