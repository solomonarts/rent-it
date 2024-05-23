import React from "react";
import Catcard from "./Catcard";
import { cardimages } from "../GlobalUtils";

const categories = [
  {
    catid: 123,
    catname: "Category 1",
    catimage: cardimages["bg-01.webp"],
    catdescription: "Stand alone houses",
    catitems: [
      cardimages["bg-06.webp"],
      cardimages["bg-05.webp"],
      cardimages["bg-04.webp"],
      cardimages["bg-03.webp"],
      cardimages["bg-02.webp"],
      cardimages["bg-01.webp"],
      cardimages["bg-06.webp"],
    ],
  },
  {
    catid: 123,
    catname: "Category 1",
    catimage: cardimages["bg-02.webp"],
    catdescription: "Stand alone houses",
    catitems: [
      cardimages["bg-05.webp"],
      cardimages["bg-04.webp"],
      cardimages["bg-03.webp"],
      cardimages["bg-02.webp"],
      cardimages["bg-01.webp"],
      cardimages["bg-06.webp"],
      cardimages["bg-05.webp"],
      cardimages["bg-03.webp"],
      cardimages["bg-02.webp"],
    ],
  },
  {
    catid: 123,
    catname: "Category 1",
    catimage: cardimages["bg-03.webp"],
    catdescription: "Stand alone houses",
    catitems: [
      cardimages["bg-04.webp"],
      cardimages["bg-03.webp"],
      cardimages["bg-02.webp"],
      cardimages["bg-01.webp"],
      cardimages["bg-06.webp"],
      cardimages["bg-05.webp"],
      cardimages["bg-04.webp"],
    ],
  },
  {
    catid: 123,
    catname: "Category 1",
    catimage: cardimages["bg-04.webp"],
    catdescription: "Stand alone houses",
    catitems: [
      cardimages["bg-03.webp"],
      cardimages["bg-02.webp"],
      cardimages["bg-05.webp"],
    ],
  },
  {
    catid: 123,
    catname: "Category 1",
    catimage: cardimages["bg-05.webp"],
    catdescription: "Stand alone houses",
    catitems: [
      cardimages["bg-06.webp"],
      cardimages["bg-05.webp"],
      cardimages["bg-04.webp"],
      cardimages["bg-03.webp"],
      cardimages["bg-02.webp"],
    ],
  },
  {
    catid: 123,
    catname: "Category 1",
    catimage: cardimages["bg-06.webp"],
    catdescription: "Stand alone houses",
    catitems: [
      cardimages["bg-01.webp"],
      cardimages["bg-06.webp"],
      cardimages["bg-05.webp"],
      cardimages["bg-04.webp"],
      cardimages["bg-03.webp"],
      cardimages["bg-02.webp"],
    ],
  },
];

function Categories() {
  return (
    <div className="category__container absolute left-0 right-0 top-[55%] -translate-y-[55%]">
      
      {categories?.length > 0
        ? categories.map((category, catindex) => {
            return <Catcard indx={category.catid} category={category} />;
          })
        : ""}
    </div>
  );
}

export default Categories;
