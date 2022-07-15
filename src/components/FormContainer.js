import React from "react";
import Header from "./Header";

const steps = ["welcome", "setup", "type", "sucess"];

function FormContainer() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 ">
        <Header steps={steps} />
      </div>
    </div>
  );
}

export default FormContainer;
