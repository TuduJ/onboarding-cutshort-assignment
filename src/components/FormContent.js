import React from "react";
import CustomCard from "./CustomCard";

const FormContent = (props) => {
  const { activeStep } = props;

  function renderContent() {
    switch (activeStep) {
      case 0:
        return (
          <>
            <div className="text-center col-10 mx-auto">
              <h2>Welcome! First things first...</h2>
              <p>You can always change them later.</p>
            </div>

            <div className="mt-5 d-grid gap-3 col-8 mx-auto">
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Steve Jobs"
                ></input>
              </div>

              <div>
                <label className="form-label">Display Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Steve"
                ></input>
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="text-center col-10 mx-auto">
              <h2>Lets set up a home for all your work</h2>
              <p>You can always change them later.</p>
            </div>

            <div className="mt-5 d-grid gap-3 col-8 mx-auto">
              <div>
                <label className="form-label">Workspace Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Eden"
                ></input>
              </div>

              <div>
                <label className="form-label">
                  Workspace URL <span className="fw-lighter">(optional)</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text">www.eden.com/</span>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Example"
                  ></input>
                </div>
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="text-center col-10 mx-auto">
              <h2>How are you planning to use Eden?</h2>
              <p>We will streamline your experience accordingly.</p>
            </div>

            <div className="row justify-content-center">
            <CustomCard/>
            <CustomCard/>
            </div>
            {/* <div className="mt-5 row col-8 mx-auto">
              <div className="col-6">
                <div className="card">
                  <div className="card-body">
                    <img src={userIcon} className="icon-2 mb-3"></img>
                    <h5 className="card-title">For myself</h5>
                    <p className="card-text fw-light fs-6">
                      Write better. Think more clearly. Stay organized
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card" style={{}}>
                  <div className="card-body">
                    <img src={userGroup} className="icon-2 mb-3"></img>
                    <h5 className="card-title">With my team</h5>
                    <p className="card-text fw-light">
                      {"Wikis, docs, tasks & projects, all in one place."}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </>
        );
    }
  }

  return (
    <div className="mt-5">
      <div>{renderContent()}</div>
    </div>
  );
};

export default FormContent;
