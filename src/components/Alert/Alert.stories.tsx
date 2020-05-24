import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { $Alert as Alert, translate } from "../";

export default {
  title: "Alert",
  component: Alert,
  decorators: [rootDecorator],
};

export const Main = () => (
  <Alert
    style={{ position: "relative" }}
    name="example"
    text={translate("alert.text")}
    title={translate("alert.title")}
    onClick={action("clicked")}
  ></Alert>
);
