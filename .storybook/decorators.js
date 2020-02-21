import React from "react";
import { IntlProvider } from "react-intl";
import "../src/styles/global.scss";

import messages from "../src/i18n/";

const styles = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const darkStyle = {
  background: "#1B1E20"
};

const darkTheme = storyFn => <div style={darkStyle}>{storyFn()}</div>;

const rootDecorator = storyFn => (
  <IntlProvider locale="en" messages={messages["en"]}>
    <div style={styles}>{storyFn()}</div>
  </IntlProvider>
);

export { rootDecorator, darkTheme };
