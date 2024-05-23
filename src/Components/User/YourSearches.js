import React from "react";
import HomeCard from "../Homes/HomeCard";
import { BiBed } from "react-icons/bi";
import { Divider } from "antd";
import { CgGym } from "react-icons/cg";
import { MdPool } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { cardimages } from "../GlobalUtils";

const YourSearches = () => {
  const properties = [
    {
      homeid: "01A",
      name: "2 Bedroom Private Space",
      image: "bg-01.webp",
      category_location: "Apartment | Kira",
      price: "ugx 750,000",
    },
    {
      homeid: "05A",
      name: "2 Bedroom Condo",
      image: "bg-05.webp",
      category_location: "Condo | Wakiso",
      price: "ugx 450,000",
    },
    {
      homeid: "04b",
      name: "1 Bedroom Stand-alone",
      image: "bg-06.webp",
      category_location: "House | Kireka",
      price: "ugx 1,400,000",
    },
  ];
  return (
    <div className="yourorders">
      <h1 className="mainhead1">Recently Viewed</h1>
      <Divider orientation="center" type="horizontal" className="bg-slate-200 mb-4" />{" "}
      <div className="grid grid-flow-col grid-cols-2 gap-6">
        {properties?.length > 0
          ? properties.map((details, pindx) => {
              return (
                <a href="/single-home">
                  <div
                    key={pindx + "/" + details.name}
                    className="grid grid-flow-col gap-4 border-[1px] rounded-md p-1"
                  >
                    <div
                      className="w-32 h-auto aspect-square overflow-hidden bg-center bg-cover rounded-tl-md rounded-bl-md"
                      style={{
                        backgroundImage: `url(${cardimages[details.image]})`,
                      }}
                    >
                      {/* <div className="home__amenitites flex gap-2 items-center">
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
                      </div> */}
                      {/* <img src={cardimages[details.image]} alt="property pic" className="object-cover object-center"/> */}
                    </div>
                    <div className="home__card__txt h-full flex flex-col justify-center">
                      <p className="text-[18px] font-thin">
                        {details.category_location}
                      </p>
                      <h2 className="text-[14px] font-thin line-clamp-1">
                        {details.name}
                      </h2>
                      <h4 className="text-[14px] font-semibold">
                        {details.price}
                      </h4>
                    </div>
                  </div>
                </a>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default YourSearches;
