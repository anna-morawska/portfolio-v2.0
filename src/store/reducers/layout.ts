import {
  IOpenStartMenuAction,
  ICloseFolderAction,
  IOpenFolderAction
} from "../actions/layout";
import { ActionTypes } from "../types";

const initialState = {
  isStartMenuOpen: false,
  openedFolders: []
};

//   activeWindowId: "uuid",
//   openWindowsId: ["uuid"]

export interface ILayoutState {
  isStartMenuOpen: boolean;
  openedFolders: number[];
}

const layoutReducer = (
  state: ILayoutState = initialState,
  action: IOpenStartMenuAction | ICloseFolderAction | IOpenFolderAction
) => {
  switch (action.type) {
    case ActionTypes.OPEN_START_MENU:
      return {
        ...state,
        isStartMenuOpen: action.payload
      };
    case ActionTypes.OPEN_FOLDER:
      return {
        ...state,
        openedFolders: state.openedFolders.concat([action.id])
      };
    case ActionTypes.CLOSE_FOLDER:
      return {
        ...state,
        openedFolders: state.openedFolders.filter(id => id !== action.id)
      };

    default:
      return state;
  }
};

export { layoutReducer };
