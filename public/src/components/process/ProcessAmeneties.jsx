import { AmenetiesType } from "airbnb/data/Amenities";
import { useAppStore } from "airbnb/store/store";
import React from "react";

const ProcessAmeneties = () => {
  const { placeAmenities, setPlaceAmenities } = useAppStore();

  const addAmenity = (name) => setPlaceAmenities([...placeAmenities, name])

  const removeAmenity = (name) => {
    const index = placeAmenities.findIndex((a) => a === name);
    if (index !== -1) {
      const clonedAmenities = [...placeAmenities];
      clonedAmenities.splice(index, 1);
      setPlaceAmenities(clonedAmenities);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Tell guests what your place has to offer
        </h2>
        <p>You can always add more amenities later.</p>
        <div className="flex flex-col gap-4 max-h-[65vh] overflow-auto scroll no-scrollbar">
          {
            AmenetiesType.map(({ type, data }) => <div key={type} className="flex flex-col gap-5">
              {
                type === "advanced" &&
                <span className="text-lg font-medium">Do you have any standout amenities?</span>
              }
              {
                type === "safety" &&
                <span className="text-lg font-medium">Do you have any safety items?</span>
              }
              <div className="grid grid-cols-3 gap-5">
                {
                  data.map(({ name, svgPath }) => (
                    <button
                      key={name}
                      className={`flex flex-col justify-start font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300 ${placeAmenities?.includes(name) && "border-gray-950 bg-gray-50"}`}
                      onClick={() => placeAmenities?.includes(name) ? removeAmenity(name) : addAmenity(name)}>
                      {svgPath}
                      <span className="text-d3prop-light-black font-medium">{name}</span>
                    </button>
                  ))
                }
              </div>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProcessAmeneties;
