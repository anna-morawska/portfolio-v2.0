import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { Loading } from "./Loading";

export default {
  title: "screens/Loading",
  component: Loading,
  decorators: [rootDecorator]
};

export const Main = () => <Loading />;
