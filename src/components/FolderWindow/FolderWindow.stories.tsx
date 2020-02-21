import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { FolderWindow, File, IconType } from "../";

export default {
  title: "FolderWindow",
  component: FolderWindow,
  decorators: [rootDecorator]
};

export const Main = () => (
  <FolderWindow
    name="example"
    title="React Native Pizza App"
    onClick={action("clicked")}
  >
    <File
      fileName="readme.txt"
      type={IconType.note}
      onClick={action("clicked")}
    ></File>
    <File
      fileName="sth.txt"
      type={IconType.note}
      onClick={action("clicked")}
    ></File>
    <File
      fileName="secret.txt"
      type={IconType.note}
      onClick={action("clicked")}
    ></File>
    <File
      fileName="anna_morawska_CV"
      type={IconType.pdf}
      onClick={action("clicked")}
    ></File>
    <File
      fileName="photo.jpg"
      type={IconType.image}
      onClick={action("clicked")}
    ></File>
  </FolderWindow>
);
