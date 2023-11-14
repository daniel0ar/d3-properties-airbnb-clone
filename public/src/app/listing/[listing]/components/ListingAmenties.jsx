import { AmenetiesType } from "airbnb/data/Amenities";
import { useAppStore } from "airbnb/store/store";
import React from "react";

const ListingAmenties = () => {
  const { currentListing } = useAppStore();

  function getSvgPath(name) {
    for (const amenity of AmenetiesType) {
      for (const data of amenity.data) {
        if (data.name === name) {
          return data.svgPath;
        }
      }
    }
    return null;
  }

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xl font-semibold">Amenities</h4>
      <ul className="grid grid-cols-5 gap-2">
        {currentListing.placeAmeneties.map((amenity) => (
          <li
            key={amenity}
            className="border border-gray-300 p-3 rounded-lg flex flex-col items-start justify-between"
          >
            <div className="w-8 h-8">
              {getSvgPath(amenity)}
            </div>
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingAmenties;
