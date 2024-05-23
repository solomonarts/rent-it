import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Categories from "../Categories/Categories";

function Filter() {
  return (
    <div className="relative h-[65vh]">
      <Searchbar />
      <Categories />
    </div>
  );
}

export default Filter;
