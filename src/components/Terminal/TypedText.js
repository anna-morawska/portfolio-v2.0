import React from "react";
import TypeIt from "typeit-react";

const TypedText = () => {
  return (
    <>
      <span>&lt;anka_m&gt;:</span>
      <TypeIt
        options={{
          speed: 80
        }}
        getBeforeInit={instance => {
          instance
            .type("This will be typed in a `span` element! ")
            .pause(1050)
            .type("Some random text ")
            .pause(1050)
            .type("ex!");

          return instance;
        }}
      />
    </>
  );
};

export { TypedText };
