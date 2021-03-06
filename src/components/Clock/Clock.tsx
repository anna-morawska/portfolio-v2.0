import React, { FC, useState, useEffect } from "react";

interface PropsClock {}

const Clock: FC<PropsClock> = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect((): void => {
    setInterval(() => tick(), 1000);
  }, []);

  const tick = (): void => {
    setDate(new Date());
  };

  return <div>{date.toLocaleTimeString()}</div>;
};

export { Clock };
