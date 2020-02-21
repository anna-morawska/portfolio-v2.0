import {
  IOpenStartMenuAction,
  ICloseFolderAction,
  IOpenFolderAction,
  IOpenAlertAction,
  ICloseAlertAction
} from "../actions/layout";
import { ActionTypes } from "../types";

const initialState = {
  isStartMenuOpen: false,
  openedFolders: [],
  openedAlerts: []
};

//   activeWindowId: "uuid",
//   openWindowsId: ["uuid"]

export interface ILayoutState {
  isStartMenuOpen: boolean;
  openedFolders: string[];
  openedAlerts: string[];
}

const layoutReducer = (
  state: ILayoutState = initialState,
  action:
    | IOpenStartMenuAction
    | ICloseFolderAction
    | IOpenFolderAction
    | IOpenAlertAction
    | ICloseAlertAction
) => {
  switch (action.type) {
    case ActionTypes.OPEN_START_MENU:
      return {
        ...state,
        isStartMenuOpen: action.payload
      };
    case ActionTypes.OPEN_FOLDER:
      if (state.openedFolders.includes(action.name)) return state;
      return {
        ...state,
        openedFolders: state.openedFolders.concat([action.name])
      };
    case ActionTypes.CLOSE_FOLDER:
      return {
        ...state,
        openedFolders: state.openedFolders.filter(name => name !== action.name)
      };
    case ActionTypes.OPEN_ALERT:
      if (state.openedAlerts.includes(action.name)) return state;
      return {
        ...state,
        openedAlerts: state.openedAlerts.concat([action.name])
      };
    case ActionTypes.CLOSE_ALERT:
      return {
        ...state,
        openedAlerts: state.openedAlerts.filter(name => name !== action.name)
      };

    default:
      return state;
  }
};

export { layoutReducer };
