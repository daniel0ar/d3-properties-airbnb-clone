import { useAppStore } from "airbnb/store/store";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {

  const { onOpen } = useAppStore();

  return (
    <div onClick={onOpen} className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-2 flex-1 text-center">
          Any Week
        </div>
        <div className="tex-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-d3prop-theme-color rounded-full text-white">
            <BiSearch size={18}></BiSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
