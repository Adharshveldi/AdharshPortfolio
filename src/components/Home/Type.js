import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI & Machine Learning Enthusiast",
          "LLM Developer",
          "Cloud & Data Analytics Engineer",
          "NLP & Chatbot Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
