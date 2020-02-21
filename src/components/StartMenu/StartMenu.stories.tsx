import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { StartMenu } from "../";

export default {
  title: "StartMenu",
  component: StartMenu,
  decorators: [rootDecorator]
};

export const Main = () => (
  <StartMenu onClickOutsideHandler={action("clicked outside")} />
);
