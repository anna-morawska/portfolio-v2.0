import React, { FC } from "react";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";
import { setActiveWindow } from "../store/actions/layout";
import { IStore } from "../store/reducers/rootReducer";

function withDraggable<T>(WrappedComponent: FC<T>) {
  return function(props: T & { name?: string }) {
    const dispatch = useDispatch();

    const numberOfOpenedWindows = useSelector(
      (state: IStore) => state.layout.numberOfOpenedWindows
    );
    const isActive = useSelector(
      (state: IStore) => state.layout.activeWindowName === props.name
    );

    const defaultPosition = {
      x: 0 + numberOfOpenedWindows * 50,
      y: 0 + numberOfOpenedWindows * 50
    };

    const onClickHandler = () => {
      props.name && dispatch(setActiveWindow(props.name));
    };

    return (
      <Draggable
        defaultPosition={defaultPosition}
        bounds="parent"
        cancel=".react-resizable-handle"
      >
        <div onClick={onClickHandler} style={{ zIndex: isActive ? 10 : 1 }}>
          <WrappedComponent {...props} />
        </div>
      </Draggable>
    );
  };
}

export { withDraggable };
