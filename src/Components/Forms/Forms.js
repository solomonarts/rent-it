import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";

function Forms() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    let nxt = step + 1;

    setStep(nxt);
  };

  const prevStep = () => {
    let prev = step - 1;

    setStep(prev);
  };
  return (
    <div className="form">
      <div className="form-container">
        {/* <!-- Sidebar start --> */}
        <div className="form-sidebar">
          <div className={`step ${step === 1 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(1)}>
              1
            </div>
            <div className="step-content">
              <span>Step 1</span>
              <b>Your info</b>
            </div>
          </div>
          <div className={`step ${step === 2 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(2)}>
              2
            </div>
            <div className="step-content">
              <span>Step 2</span>
              <b>Property Info</b>
            </div>
          </div>
          <div className={`step ${step === 3 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(3)}>
              3
            </div>
            <div className="step-content">
              <span>Step 3</span>
              <b>Category</b>
            </div>
          </div>
          <div className={`step ${step === 4 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(4)}>
              4
            </div>
            <div className="step-content">
              <span>Step 4</span>
              <b>Description</b>
            </div>
          </div>
          <div className={`step ${step === 5 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(5)}>
              5
            </div>
            <div className="step-content">
              <span>Step 5</span>
              <b>Location</b>
            </div>
          </div>
          <div className={`step ${step === 6 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(6)}>
              6
            </div>
            <div className="step-content">
              <span>Step 6</span>
              <b>Faciliies</b>
            </div>
          </div>
          <div className={`step ${step === 7 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(7)}>
              7
            </div>
            <div className="step-content">
              <span>Step 7</span>
              <b>Images</b>
            </div>
          </div>
          <div className={`step ${step === 8 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(8)}>
              8
            </div>
            <div className="step-content">
              <span>Step 8</span>
              <b>Summary</b>
            </div>
          </div>
          <div className={`step ${step === 9 ? "active" : ""}`}>
            <div className="circle cursor-pointer" onClick={() => setStep(9)}>
              9
            </div>
            <div className="step-content">
              <span>Step 9</span>
              <b>Thank You</b>
            </div>
          </div>
        </div>
        {/* <!-- Sidebar end --> */}

        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Step5 nextStep={nextStep} prevStep={prevStep} />}
        {step === 6 && <Step6 nextStep={nextStep} prevStep={prevStep} />}
        {step === 7 && <Step7 nextStep={nextStep} prevStep={prevStep} />}
        {step === 8 && <Step8 nextStep={nextStep} prevStep={prevStep} />}
        {step === 9 && <Step9 nextStep={nextStep} prevStep={prevStep} />}
      </div>
    </div>
  );
}

export default Forms;
