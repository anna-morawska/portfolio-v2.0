import React, { createRef } from "react";

import { rootDecorator } from "../../../.storybook/decorators";
import { StartMenu } from "../";
import { startMenuItemsList } from "./StartMenuItemsList";

export default {
  title: "StartMenu",
  component: StartMenu,
  decorators: [rootDecorator],
};

export const Main = () => {
  const startMenuRef = createRef<HTMLDivElement>();

  return (
    <StartMenu forwardedRef={startMenuRef} menuItems={startMenuItemsList} />
  );
};
