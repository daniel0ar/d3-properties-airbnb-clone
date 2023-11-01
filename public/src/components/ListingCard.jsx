import Image from "next/image";
import React, { useState } from "react";
import { AmenetiesType } from "airbnb/data/Amenities";


const ListingCard = ({ data }) => {

  let counter = 0;

  const getSvgFromName = (name) => {
    AmenetiesType.forEach((a) => {
      a.data.forEach((icon) => {
        if (icon.name === name)
          console.log(icon.svgPath)
      })
    })
    return null
  }

  return (
    <div className="shadow-lg p-4 rounded-lg">
      <div className="aspect-square rounded-lg shadow-lg overflow-hidden">
        <img className="object-cover h-full w-full" src={data.photos[0]} />
      </div>
      <div className="w-full flex mt-2 mb-1">
        <h5 className="w-3/4 block overflow-clip text-lg font-medium text-blue-gray-900">
          {data.title}
        </h5>
        <p className="w-1/4 flex items-center justify-end gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="-mt-0.5 h-4 w-4 text-yellow-300"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          5.0
        </p>
      </div>
      <p className="block text-gray-700">
        {data.locationData?.place}
      </p>
      <p className="block text-gray-700">
        <span className="font-bold">${data.price}</span> noche
      </p>
      <div className="inline-flex flex-wrap items-center gap-2 mt-8 group">
        {
          data.placeAmeneties?.map((amenity) => (
            AmenetiesType.map((a) => (
              a.data.map((icon) => {
                if (icon.name === amenity && counter < 4) {
                  counter = counter + 1;
                  return (
                    <span
                      key={amenity}
                      title={amenity}
                      className="w-9 h-9 p-1 rounded-full border border-pink-500/5 bg-pink-500/5 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      {icon.svgPath}
                    </span>
                  );
                }
                else if (icon.name === amenity && counter === 4){
                  counter = counter + 1;
                  const restingAmenities = data.placeAmeneties.length - 4;
                  return (
                    <span
                      key="more"
                      title={`And ${restingAmenities} more`}
                      className="w-9 h-9 p-1 rounded-full border border-pink-500/5 bg-pink-500/5 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      +{restingAmenities}
                    </span>
                  )
                }
              })
            ))
          ))
        }
      </div>
    </div>
  );
};

export default ListingCard;
