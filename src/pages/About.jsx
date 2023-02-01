import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const context = useContext(noteContext);
  return <h1>This ia about {context.name}</h1>;
};

export default About;
