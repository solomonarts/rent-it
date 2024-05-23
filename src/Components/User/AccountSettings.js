import { Divider } from "antd";
import React from "react";

const AccountSettings = () => {
  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Personal Information</h1>
      <Divider
        orientation="center"
        type="horizontal"
        className="bg-slate-200 mb-4"
      />{" "}
      <div className="h-fit py-10">
        <div>
          <table className="yourorderstable">
            <thead>
              <tr>
                <th scope="col">User Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Name</td>
                <td>Solomon Tusuubira</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>Solomon231@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+256 7880 133 123</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Solomon Tusuubira</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
