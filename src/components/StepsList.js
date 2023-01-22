import React, { useEffect } from "react";

function StepsList(props) {
  useEffect(() => {
    const steps = document.querySelectorAll(".step");

    steps.forEach((step) => {
      step.onclick = (e) => {
        steps.forEach((step) => {
          step.children[0].classList.remove("active");
        });
        step.children[0].classList.add("active");
      };
    });
  }, []);

  return (
    <li className="step">
      <h4 className="stepNumber">{props.stepNum}</h4>
      <div className="stepInfo">
        <p>step {props.stepNum}</p>
        <h4>{props.stepName}</h4>
      </div>
    </li>
  );
}

export default StepsList;
