import React from "react";
import { cardimages } from "../GlobalUtils";
import { BiBed } from "react-icons/bi";
import { TbPool } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { Divider } from "antd";
import { MdPool } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { Link } from "@nextui-org/react";

function HomeCard({ details, index }) {
  return (
    <a href="/single-home">
      <div key={index + "/" + details.name} className="home__card">
        <div data-text="Property description" className="home__card__img">
          <div className="home__amenitites flex gap-2 items-center">
            <BiBed size={20} /> 2{" "}
            <Divider
              orientation="center"
              type="vertical"
              className="bg-white"
            />{" "}
            <CgGym size={20} />{" "}
            <Divider
              orientation="center"
              type="vertical"
              className="bg-white"
            />{" "}
            <MdPool size={20} />
            <Divider
              orientation="center"
              type="vertical"
              className="bg-white"
            />{" "}
            <FaParking />
          </div>
          <img src={cardimages[details.image]} alt="property pic" />
        </div>
        <div className="home__card__txt">
          <p>{details.category_location}</p>
          <h2>{details.name}</h2>
          <h4>{details.price}</h4>
        </div>
      </div>
    </a>
  );
}

export default HomeCard;
