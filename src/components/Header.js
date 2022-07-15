import React from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import logo from "../logo.svg";

const Header = (props) => {
  const { steps } = props;
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <img src={logo} href="#" className="w-25" />
      </div>
      <div className=" mt-3 d-flex justify-content-center">
        <Box sx={{ width: "60%" }}>
          <Stepper>
            {steps.map((label) => {
              return (
                <Step key={label}>
                  <StepLabel></StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </div>
    </div>
  );
};

export default Header;
