import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { Startbar } from "../";
import { Languages } from "../../store/actions/language";

export default {
  title: "Startbar",
  component: Startbar,
  decorators: [rootDecorator]
};

export const Main = () => (
  <Startbar
    language={Languages.ENGLISH}
    changeLanguageHandler={action("clicked")}
    toggleStartMenu={action("clicked")}
  />
);
