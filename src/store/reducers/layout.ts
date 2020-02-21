import {
  IOpenStartMenuAction,
  ICloseFolderAction,
  IOpenWindowAction,
  IOpenAlertAction,
  ICloseAlertAction,
  ISetActiveWindowAction
} from "../actions/layout";
import { ActionTypes } from "../types";

const initialState = {
  activeWindowName: "",
  numberOfOpenedWindows: 0,
  isStartMenuOpen: false,
  openedWindows: [],
  openedAlerts: []
};

export interface ILayoutState {
  activeWindowName: string;
  numberOfOpenedWindows: number;
  isStartMenuOpen: boolean;
  openedWindows: string[];
  openedAlerts: string[];
}

const layoutReducer = (
  state: ILayoutState = initialState,
  action:
    | IOpenStartMenuAction
    | ICloseFolderAction
    | IOpenWindowAction
    | IOpenAlertAction
    | ICloseAlertAction
    | ISetActiveWindowAction
) => {
  switch (action.type) {
    case ActionTypes.OPEN_START_MENU:
      return {
        ...state,
        isStartMenuOpen: action.payload
      };
    case ActionTypes.OPEN_WINDOW:
      if (state.openedWindows.includes(action.name)) return state;
      return {
        ...state,
        openedWindows: state.openedWindows.concat([action.name]),
        numberOfOpenedWindows: state.numberOfOpenedWindows + 1,
        activeWindowName: action.name
      };
    case ActionTypes.CLOSE_WINDOW:
      return {
        ...state,
        openedWindows: state.openedWindows.filter(name => name !== action.name),
        numberOfOpenedWindows: state.numberOfOpenedWindows - 1
      };
    case ActionTypes.OPEN_ALERT:
      if (state.openedAlerts.includes(action.name)) return state;
      return {
        ...state,
        openedAlerts: state.openedAlerts.concat([action.name]),
        numberOfOpenedWindows: state.numberOfOpenedWindows + 1,
        activeWindowName: action.name
      };
    case ActionTypes.CLOSE_ALERT:
      return {
        ...state,
        openedAlerts: state.openedAlerts.filter(name => name !== action.name),
        numberOfOpenedWindows: state.numberOfOpenedWindows - 1
      };
    case ActionTypes.SET_ACTIVE_WINDOW:
      return {
        ...state,
        activeWindowName: action.name
      };

    default:
      return state;
  }
};

export { layoutReducer };
