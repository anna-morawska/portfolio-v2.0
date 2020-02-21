import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { Startbar } from "../";

export default {
  title: "Startbar",
  component: Startbar,
  decorators: [rootDecorator]
};

export const Main = () => <Startbar onClick={action("clicked")} />;
