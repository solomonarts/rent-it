import React from "react";

function Step1({ nextStep }) {
  return (
    <>
      {/* <-- step 1 start --!> */}
      <div className="stp step-1">
        <div className="header">
          <h1 className="title">Personal info</h1>
          <p className="exp">
            Please provide Owner name, email address, and contact number.
          </p>
        </div>
        <form>
          <div className="label">
            <label for="name">Name</label>
            <p className="error">This Field Is Required</p>
          </div>
          <input required type="text" id="name" placeholder="e.g. Stephen" />
          <div className="label">
            <label for="email">Email Address</label>
            <p className="error">This Field Is Required</p>
          </div>
          <input
            required
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <div className="label">
            <label for="phone">Phone Number</label>
            <p className="error">This Field Is Required</p>
          </div>
          <input
            required
            type="tel"
            id="phone"
            placeholder="e.g. +256 234 567 890"
          />
        </form>
        <div className="btns">
          <button className="next-stp" type="submit" onClick={nextStep}>
            Next Step
          </button>
        </div>
      </div>
      {/* <!-- Step 1 end --> */}
    </>
  );
}

export default Step1;
