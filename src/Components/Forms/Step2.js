import React from "react";

function Step2({ nextStep, prevStep }) {
  return (
    <>
      {/* <!-- * Step 2 start --> */}
      <div className="stp step-2">
        <div className="header">
          <h1 className="title">Select your Property type</h1>
          <p className="exp">
            Choose a type that best describes your Property.
          </p>
        </div>
        <form>
          <div className="plan-card selected">
            <img src="./assets/images/icon-arcade.svg" alt="arcade" />
            <div className="plan-info chosen">
              <b>Appartment</b>
              {/* <span className="plan-priced">$9/mo</span> */}
            </div>
          </div>
          <div className="plan-card">
            <img src="./assets/images/icon-advanced.svg" alt="arcade" />
            <div className="plan-info">
              <b>Standalone</b>
              {/* <span className="plan-priced">$12/mo</span> */}
            </div>
          </div>
          <div className="plan-card">
            <img src="./assets/images/icon-pro.svg" alt="arcade" />
            <div className="plan-info">
              <b>Semi-Detatched</b>
              {/* <span className="plan-priced">$15/mo</span> */}
            </div>
          </div>
        </form>
        {/* <div className="switcher">
          <p className="monthly sw-active">Monthly</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p className="yearly">Yearly</p>
        </div> */}
        <div className="btns">
          <button className="prev-stp" type="button" onClick={prevStep}>
            Go Back
          </button>
          <button className="next-stp" type="submit" onClick={nextStep}>
            Next Step
          </button>
        </div>
      </div>
      {/* <!-- Step 2 end --> */}
    </>
  );
}

export default Step2;
