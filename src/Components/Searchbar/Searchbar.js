import React from "react";

function Searchbar() {
  return (
    <div className="search__section shadow-md h-1/2">
      <div className="search__input flex w-full justify-center h-full m-auto">
        <input
          placeholder="Search a rental unit"
          className="bg-stone-200 w-1/2 h-[50px] mt-[4%] rounded-full px-10"
        />
      </div>
    </div>
  );
}

export default Searchbar;
