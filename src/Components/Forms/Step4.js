import React from "react";

function Step4({ nextStep, prevStep }) {
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
            <label for="name">Property Name</label>
            <p className="error">This Field Is Required</p>
          </div>
          <input
            required
            type="text"
            id="name"
            placeholder="e.g. Mulawa Heights"
          />
          <div className="label">
            <label for="location">Location</label>
            <p className="error">This Field Is Required</p>
          </div>
          <input
            required
            type="text"
            id="location"
            placeholder="Location"
          />
          <div className="label">
            <label for="desc">Custom Description</label>
            <p className="error">This Field Is Required</p>
          </div>
          <input
            required
            type="text"
            id="desc"
            placeholder="Write a custom description"
          />
        </form>
        <div className="btns">
          <button className="prev-stp" type="button" onClick={prevStep}>
            Go Back
          </button>
          <button className="next-stp" type="submit" onClick={nextStep}>
            Next Step
          </button>
        </div>
      </div>
      {/* <!-- Step 4 end --> */}
    </>
  );
}

export default Step4;
