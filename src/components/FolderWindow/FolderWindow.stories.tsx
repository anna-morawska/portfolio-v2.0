import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { FolderWindow } from "../";

export default {
  title: "FolderWindow",
  component: FolderWindow,
  decorators: [rootDecorator]
};

export const Main = () => (
  <FolderWindow
    content={{
      loading: false,
      id: 162412633,
      name: "build-tool-cli",
      html_url: "https://github.com/anna-morawska/build-tool-cli",
      fork: false
    }}
    name="example"
    title="React Native Pizza App"
    onClick={action("clicked")}
  ></FolderWindow>
);
