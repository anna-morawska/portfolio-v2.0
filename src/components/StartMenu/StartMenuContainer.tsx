import React, { useMemo, forwardRef } from "react";
import { useDispatch } from "react-redux";
import {
  IOpenAlertAction,
  IOpenWindowAction,
} from "../../store/actions/layout";

import { StartMenu } from "./StartMenu";
import { startMenuItemsList } from "./StartMenuItemsList";

interface IStartMenuContainer {}

const StartMenuContainer = forwardRef<HTMLDivElement, IStartMenuContainer>(
  (props, ref) => {
    const dispatch = useDispatch();

    const onClickHandler = (
      action: IOpenAlertAction | IOpenWindowAction
    ) => () => {
      dispatch(action);
    };

    const startMenuItemsListWithClick = useMemo(() => {
      return startMenuItemsList.map((item) => {
        return { ...item, onClick: onClickHandler(item.action) };
      });
    }, []);

    return (
      <StartMenu forwardedRef={ref} menuItems={startMenuItemsListWithClick} />
    );
  }
);

export { StartMenuContainer };
