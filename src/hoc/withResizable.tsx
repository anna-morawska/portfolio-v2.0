import React, { FC, useState, useRef, useEffect, SyntheticEvent } from "react";
import { Resizable, ResizeCallbackData } from "react-resizable";

function withResizable<T>(WrappedComponent: FC<T>) {
  return function(props: T) {
    const [height, setHeight] = useState(350);
    const [width, setWidth] = useState(500);
    const [availableWidth, setAvailableWidth] = useState(1000);
    const [availableHeight, setAvailableHeight] = useState(1000);
    const [isDesktop, setIsDesktop] = useState(false);
    const openedWindow = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      isDesktopCheck();
      window.addEventListener("resize", isDesktopCheck);
      return () => window.removeEventListener("resize", isDesktopCheck);
    }, []);

    const isDesktopCheck = () => {
      window.innerWidth > 600 || window.innerHeight > 700
        ? setIsDesktop(true)
        : setIsDesktop(false);
    };

    const setAvailableSpace = () => {
      if (openedWindow.current) {
        const countAvailableWidth =
          window.innerWidth -
          openedWindow.current.getBoundingClientRect().right +
          width;

        const countAvailableHeight =
          window.innerHeight -
          openedWindow.current.getBoundingClientRect().bottom +
          height;

        setAvailableWidth(width + countAvailableWidth);
        setAvailableHeight(countAvailableHeight);
      }
    };

    const onResize = (e: SyntheticEvent, data: ResizeCallbackData): void => {
      const {
        size: { height, width }
      } = data;

      setAvailableSpace();
      setHeight(height);
      setWidth(width);
    };

    return isDesktop ? (
      <Resizable
        lockAspectRatio={true}
        onResize={onResize}
        height={height}
        width={width}
        minConstraints={[350, 250]}
        maxConstraints={[availableWidth, availableHeight]}
      >
        <div
          style={{
            width: width + "px",
            height: height + "px",
            position: "absolute"
          }}
          ref={openedWindow}
        >
          <WrappedComponent {...props} />
        </div>
      </Resizable>
    ) : (
      <WrappedComponent {...props} />
    );
  };
}

export { withResizable };
