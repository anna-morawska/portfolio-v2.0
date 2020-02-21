import { useEffect, MutableRefObject } from "react";

interface IOnClickOutside {
  ref: MutableRefObject<any>;
  onClickOutsideHandler: () => void;
}

const useOnClickOutside = ({
  ref,
  onClickOutsideHandler
}: IOnClickOutside): void => {
  const handleClickOutside = (event: Event) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      onClickOutsideHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

export { useOnClickOutside };
