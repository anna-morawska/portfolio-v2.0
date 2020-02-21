import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { File, IconType } from "../";

export default {
  title: "File",
  component: File,
  decorators: [rootDecorator]
};

export const Readme = () => (
  <File
    fileName="readme.txt"
    type={IconType.note}
    onClick={action("clicked")}
  ></File>
);

export const Folder = () => (
  <File
    fileName="React Native App"
    type={IconType.folder}
    onClick={action("clicked")}
  ></File>
);

export const PDF = () => (
  <File
    fileName="anna_morawska_CV"
    type={IconType.pdf}
    onClick={action("clicked")}
  ></File>
);
