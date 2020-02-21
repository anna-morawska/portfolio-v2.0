import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { OutlookWindow } from "../";

export default {
  title: "OutlookWindow",
  component: OutlookWindow,
  decorators: [rootDecorator]
};

export const Main = () => (
  <OutlookWindow name="example" onClick={action("clicked")} />
);
