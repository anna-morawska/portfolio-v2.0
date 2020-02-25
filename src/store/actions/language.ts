import { ActionTypes } from "../types";

export interface IChangeLanguageAction {
  type: ActionTypes.CHANGE_LANGUAGE;
  payload: Languages;
}

export enum Languages {
  ENGLISH = "en",
  POLISH = "pl"
}

export const changeLanguage = (language: Languages): IChangeLanguageAction => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  payload: language
});
