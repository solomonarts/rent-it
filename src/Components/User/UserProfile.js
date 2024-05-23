import React from "react";
import { Route, Routes } from "react-router-dom";
import LegalNotice from "./LegalNotice";
import AccountSettings from "./AccountSettings";
import UserAddress from "./UserAddress";
import YourSearches from "./YourSearches";
import ChangePassword from "./ChangePassword";
import UserSidebar from "./UserSidebar";
import SingleBanner from "./SingleBanner";
import { cardimages } from "../GlobalUtils";

const UserProfile = () => {
  //   alert(activepage);
  return (
    <div className="userprofile">
      {/* <Navbar/> */}
      <SingleBanner
        heading={`My Profile`}
        bannerimage={cardimages["bg-06.webp"]}
      />
      {/* UserProfile , showing {activepage} */}
      <div className="userprofilein">
        <div className="left">
          <UserSidebar />
        </div>
        <div className="right">
          <Routes>
            <Route
              path="/accountsettings"
              element={<AccountSettings />}
            />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/yourorders" element={<YourSearches />} />
            <Route path="/address" element={<UserAddress />} />
            <Route path="/legalnotice" element={<LegalNotice />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
