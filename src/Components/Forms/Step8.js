import React from "react";

function Step8({ nextStep, prevStep }) {
  return (
    <>
      {/* <!-- * Step 4 start --> */}
      <div className="stp step-4">
        <div className="header">
          <h1 className="title">Finishing up</h1>
          <p className="exp">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <form>
          <div className="label">
            <label for="name">Property Details</label>
            {/* <p className="error">This Field Is Required</p> */}
          </div>
          
        </form>
        <div className="btns">
		<button className="prev-stp" type="button" onClick={prevStep}>
            Go Back
          </button>
          <button className="next-stp" type="submit" onClick={nextStep}>
            Submit
          </button>
        </div>
      </div>
      {/* <!-- Step 4 end --> */}
    </>
  );
}

export default Step8;
