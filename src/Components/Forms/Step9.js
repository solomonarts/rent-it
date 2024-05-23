import React from "react";

function Step9({ nextStep, prevStep }) {
  return (
    <>
      {/* <!-- * Step 4 start --> */}
      <div class="stp step-5">
        {/* <img src="./assets/images/icon-thank-you.svg" alt="" /> */}
        <div class="header">
          <h1 class="title">Thank you!</h1>
          <p class="exp">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@trove.com.
          </p>
        </div>
        <button class="next-stp"></button>
      </div>
      {/* <!-- Step 4 end --> */}
    </>
  );
}

export default Step9;
