import React, { Component } from "react";
import { useParams } from "react-router-dom";

function processOperation(op, n1, n2) {
  switch (op) {
    case "add":
      return `${n1} + ${n2} = ${n1 + n2}`;
    case "subtract":
      return `${n1} - ${n2} = ${n1 - n2}`;
    case "divide":
      return `${n1} / ${n2} = ${n1 / n2}`;
    case "multiply":
      return `${n1} * ${n2} = ${n1 * n2}`;
    default:
      return "Incorrect operation";
  }
}

function MathOperations(props) {
  let { operation, n1, n2 } = useParams();

  return <p>{processOperation(operation, parseInt(n1), parseInt(n2))}</p>;
}

export default MathOperations;
