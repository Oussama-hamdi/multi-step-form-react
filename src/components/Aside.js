import React from "react";
import StepsList from "./StepsList";

function Aside() {
  return (
    <aside>
      <ul>
        <StepsList stepNum={1} stepName="your info" />
        <StepsList stepNum={2} stepName="select plan" />
        <StepsList stepNum={3} stepName="add-ons" />
        <StepsList stepNum={4} stepName="summary" />
      </ul>
    </aside>
  );
}

export default Aside;
