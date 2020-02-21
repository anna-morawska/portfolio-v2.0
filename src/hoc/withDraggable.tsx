import React, { FC } from "react";
import Draggable from "react-draggable";

function withDraggable<T>(WrappedComponent: FC<T>) {
  return function(props: T) {
    return (
      <Draggable bounds="parent" cancel=".react-resizable-handle">
        <div>
          <WrappedComponent {...props} />
        </div>
      </Draggable>
    );
  };
}

export { withDraggable };
