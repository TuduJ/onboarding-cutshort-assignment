import React from "react";
import CustomCard from "./CustomCard";
import { cardData, contentData } from "../JSONData/ContentJSON";
import ContentHeader from "./ContentHeader";
import { Button } from "@mui/material";
import successTick from "../check-circle-fill.svg";
import InputField from "./InputField";

const FormContent = (props) => {
  const { activeStep, handleNext, userData, changetext } = props;

  function renderContent() {
    switch (activeStep) {
      case 0:
        return (
          <>
            <div className="mt-5 d-grid gap-3 col-sm-10 col-lg-8 mx-auto">
              <InputField
                keyVal="name"
                labelText="Full Name"
                placeholderText="Steve Jobs"
                optional={false}
                typeEmail={false}
                changetext={changetext}
                value={userData.name}
              />
              <InputField
                keyVal="displayName"
                labelText="Display Name"
                placeholderText="Steve"
                optional={false}
                typeEmail={false}
                changetext={changetext}
                value={userData.displayName}
              />
              <div className="mt-2 d-grid">
                <Button variant="contained" onClick={() => handleNext()}>
                  {contentData[activeStep].buttonText}
                </Button>
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="mt-5 d-grid gap-3 col-sm-10 col-lg-8 mx-auto">
              <InputField
                keyVal="workspaceName"
                labelText="Workspace Name"
                placeholderText="Eden"
                optional={false}
                typeEmail={false}
                changetext={changetext}
                value={userData.workspaceName}
              />

              <InputField
                keyVal="companyURL"
                labelText="Workspace URL"
                placeholderText="www.eden.com/"
                optional={true}
                typeEmail={true}
                changetext={changetext}
                value={userData.companyURL}
              />
              <div className="mt-2 d-grid">
                <Button variant="contained" onClick={() => handleNext()}>
                  {contentData[activeStep].buttonText}
                </Button>
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="row justify-content-center mt-4">
              {cardData.map((item) => {
                return (
                  <CustomCard
                    id={item.id}
                    icon={item.icon}
                    heading={item.heading}
                    description={item.description}
                  />
                );
              })}
            </div>
            <div className="mt-2 d-grid col-sm-10 col-lg-8 mx-auto ">
              <Button variant="contained" onClick={() => handleNext()}>
                {contentData[activeStep].buttonText}
              </Button>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="d-grid col-1 mx-auto my-5 pt-5">
              <img src={successTick} style={{ width: "60px" }}></img>
            </div>

            <ContentHeader
              heading={`Congratulations, ${userData.displayName}!`}
              subHeading={contentData[activeStep].subHeading}
            />
            <div className="mt-2 d-grid col-sm-10 col-lg-8 mx-auto pt-3">
              <Button variant="contained" onClick={() => handleNext()}>
                {contentData[activeStep].buttonText}
              </Button>
            </div>
          </>
        );
    }
  }

  return (
    <div className="mt-5">
      {activeStep < 3 ? (
        <ContentHeader
          heading={contentData[activeStep].heading}
          subHeading={contentData[activeStep].subHeading}
        />
      ) : null}
      <div>{renderContent()}</div>
    </div>
  );
};

export default FormContent;
