import { Avatar } from "@nextui-org/react";
import React from "react";

const SingleBanner = ({ bannerimage, heading }) => {
  return (
    <div className="singlebanner">
      <div className="bannerimgfilter"></div>
      <Avatar
        isBordered
        color="success"
        radius="lg"
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        className="absolute -bottom-0 left-[200px] w-[130px] h-auto aspect-square"
      />
      <img className="bannerimg" src={bannerimage} alt="noimg" />
      <div className="bannerheading">
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default SingleBanner;
