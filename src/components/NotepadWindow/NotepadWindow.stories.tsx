import React from "react";
import { action } from "@storybook/addon-actions";

import { rootDecorator } from "../../../.storybook/decorators";
import { NotepadWindow } from "../";

export default {
  title: "NotepadWindow",
  component: NotepadWindow,
  decorators: [rootDecorator]
};

export const Main = () => (
  <NotepadWindow
    name="example"
    content="Landing page created for small accounting office. It is one of my first ever creacted websites."
    onClick={action("clicked")}
  />
);
