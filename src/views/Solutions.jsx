import React from "react";
import { useParams } from "react-router-dom";

const Solutions = () => {
  const { solutionTitle } = useParams();
  console.log(solutionTitle);
};

export default Solutions;
