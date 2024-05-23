import React from "react";
import HomeCard from "./HomeCard";
import SideFilter from "./SideFilter";

function Homes() {
  const properties = [
    {
      homeid: "01A",
      name: "2 Bedroom Private Space",
      image: "bg-01.webp",
      category_location: "Apartment | Kira",
      price: "ugx 750,000",
    },
    {
      homeid: "02A",
      name: "1 Bedroom Studio",
      image: "bg-02.webp",
      category_location: "Studio | Seguku",
      price: "ugx 450,000",
    },
    {
      homeid: "01b",
      name: "3 Bedroom Stand-alone",
      image: "bg-03.webp",
      category_location: "House | Gayaza",
      price: "ugx 1,400,000",
    },
    {
      homeid: "01X",
      name: "2 Bedroom Flat",
      image: "bg-04.webp",
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
    <div className="homes__main">
      <div data-text="Featured" className="top__divider"></div>
      <div className="grid grid-flow-col grid-cols-12 px-10 py-8">
        <div className="col-span-2">
          <SideFilter />
        </div>
        <div className="homes__items col-span-10">
          {properties?.length > 0
            ? properties.map((property, pindx) => {
                return <HomeCard details={property} index={pindx} />;
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Homes;
