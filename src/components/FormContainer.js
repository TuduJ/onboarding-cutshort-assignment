import React, { useEffect, useState } from "react";
import Header from "./Header";
import FormContent from './FormContent';

const steps = ["welcome", "setup", "type", "sucess"];

function FormContainer() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if(activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  }

  const handlePrev = () => {
    if(activeStep > 0){
      setActiveStep(activeStep - 1);
    }
  }

  return (
    <div className="row justify-content-center pt-5">
      <div className="col-lg-6 col-md-8 pt-5">
        <Header steps={steps} activeStep={activeStep} />

        <FormContent activeStep={activeStep}/>
        <div className="mt-4 d-grid gap-2 col-8 mx-auto">
          <button className="btn btn-primary" type="button" onClick={handleNext} >
            Next
          </button>
          <button className="btn btn-primary" type="button" onClick={handlePrev} >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
