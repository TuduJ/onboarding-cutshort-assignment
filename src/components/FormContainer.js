import React, { useEffect, useState } from "react";
import Header from "./Header";
import FormContent from './FormContent';
import { TextField } from "@mui/material";

const steps = ["welcome", "setup", "type", "sucess"];


const FormContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({
      name: "",
      displayName: "",
      workspaceName: "",
      companyURL: "",
  });
  const [selectedCardData, setSelectedCardData] = useState({
    individual: false,
    team: false,
  });

  const changetext = (key) => (event) => {
    setUserData({...userData, [key] : event.target.value});
  };

  const handleNext = () => {
    switch(activeStep){

    }

    if(activeStep < steps.length-1) {
      setActiveStep(activeStep + 1);
    }
  }


  return (
    <div className="row justify-content-center pt-5">
      <div className="col-lg-8 pt-5">
        <Header steps={steps} activeStep={activeStep} />

        <div className="col-sm-10 col-xs-12 mx-auto">
        <FormContent activeStep={activeStep} handleNext={handleNext} userData={userData} changetext={changetext}/>
        </div>  
        <div className="mt-4 d-grid gap-2 col-lg-6 col-sm-8 col-xs-10 mx-auto">
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
