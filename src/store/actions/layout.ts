import { ActionTypes } from "../types";

export interface IOpenStartMenuAction {
  type: ActionTypes.OPEN_START_MENU;
  payload: boolean;
}

export interface IOpenWindowAction {
  type: ActionTypes.OPEN_WINDOW;
  name: string;
}

export interface ICloseFolderAction {
  type: ActionTypes.CLOSE_WINDOW;
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

export interface ISetActiveWindowAction {
  type: ActionTypes.SET_ACTIVE_WINDOW;
  name: string;
}

export const openStartMenuAction = (open: boolean) =>
  <IOpenStartMenuAction>{
    type: ActionTypes.OPEN_START_MENU,
    payload: open
  };

export const openWindow = (name: string) =>
  <IOpenWindowAction>{
    type: ActionTypes.OPEN_WINDOW,
    name
  };

export const closeWindow = (name: string) =>
  <ICloseFolderAction>{
    type: ActionTypes.CLOSE_WINDOW,
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

export const setActiveWindow = (name: string) =>
  <ISetActiveWindowAction>{
    type: ActionTypes.SET_ACTIVE_WINDOW,
    name
  };
