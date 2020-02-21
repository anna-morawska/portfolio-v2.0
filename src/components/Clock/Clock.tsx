import React, { FC, useState, useEffect } from "react";
import styles from "./Clock.module.scss";

interface PropsClock {}

const Clock: FC<PropsClock> = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect((): void => {
    setInterval(() => tick(), 1000);
  }, []);

  const tick = (): void => {
    setDate(new Date());
  };

  return <div className={styles.clock}>{date.toLocaleTimeString()}</div>;
};

export { Clock };
