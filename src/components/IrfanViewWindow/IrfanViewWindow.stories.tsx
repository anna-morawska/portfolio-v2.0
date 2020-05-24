import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { $IrfanViewWindow as IrfanViewWindow } from "../";

export default {
  title: "IrfanViewWindow",
  component: IrfanViewWindow,
  decorators: [rootDecorator],
};

export const Main = () => (
  <IrfanViewWindow
    name="example"
    imgUrl="https://raw.githubusercontent.com/anna-morawska/react-native-pizza-builder/master/assets/readme-1.jpg"
    onClick={action("clicked")}
  />
);
