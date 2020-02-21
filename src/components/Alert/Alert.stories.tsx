import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { Alert, translate } from "../";

export default {
  title: "Alert",
  component: Alert,
  decorators: [rootDecorator]
};

export const Main = () => (
  <Alert
    text={translate("alert.text")}
    title={translate("alert.title")}
    onClick={action("clicked")}
  ></Alert>
);
