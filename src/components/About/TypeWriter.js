import React from "react";
import TypewriterComponent from "typewriter-effect";

export default function Type({ translate }) {
  return (
    <TypewriterComponent
      options={{
        strings: translate
          ? ["I am a beginner frontend developer."]
          : ["Я начинающий фронтенд разработчик."],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
