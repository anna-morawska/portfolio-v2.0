import { Languages, IChangeLanguageAction } from "../actions/language";
import { ActionTypes } from "../types";

const languageReducer = (
  state: Languages = Languages.ENGLISH,
  action: IChangeLanguageAction
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return action.payload;

    default:
      return state;
  }
};

export { languageReducer };
