import React from "react";

function Step3({ nextStep, prevStep }) {
  return (
    <>
      {/* <!-- * Step 3 start --> */}
      <div className="stp step-3">
        <div className="header">
          <h1 className="title">Number of Bedrooms</h1>
          <p className="exp">Indicating this helps enhance your visibility and user search.</p>
        </div>
        <form>
          <div className="box" data-id="1">
            <input type="checkbox" id="online" />
            <div className="description">
              <label for="online">Single</label>
              <small>1 bedroom</small>
            </div>
            {/* <p className="price">+$1/mo</p> */}
          </div>
          <div className="box" data-id="2">
            <input type="checkbox" id="larger" />
            <div className="description">
              <label for="larger">Double</label>
              <small>2 Bedroms</small>
            </div>
            {/* <p className="price">+$2/mo</p> */}
          </div>
          <div className="box" data-id="3">
            <input type="checkbox" id="profile" />
            <div className="description">
              <label for="profile">3 + Bedrooms</label>
              <small>Indicate number if more that 2</small>
            </div>
            <p className="price">
				<input type="number" className="outline-none border-[1px] rounded-md w-16" />
			</p>
          </div>
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
      {/* <!-- Step 3 end --> */}
    </>
  );
}

export default Step3;
