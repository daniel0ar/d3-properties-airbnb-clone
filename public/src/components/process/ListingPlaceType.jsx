import { useAppStore } from "airbnb/store/store";
import House from "airbnb/svg/lisitngTypes/house";
import Room from "airbnb/svg/lisitngTypes/room";
import SharedRoom from "airbnb/svg/lisitngTypes/shared-room";
import React from "react";

const ListingPlaceType = () => {

  const {placeType, setPlaceType} = useAppStore();

  const data = [
    {
      title: "An entire place",
      subTitle: "Guests have the whole place to themselves",
      svg: <House></House>,
    },
    {
      title: "A room",
      subTitle: "Guests have their own room in a house, plus acces to shared spaces",
      svg: <Room></Room>,
    },
    {
      title: "A shared room",
      subTitle: "Guests sleep in a room or common area that may be shared with you or others",
      svg: <SharedRoom></SharedRoom>,
    }
  ]

  return (
    <div className="flex items-center justify-center flex-col h-full gap-10">
      <h2 className="font-semibold text-4xl">
        Which of these best describes your place?
      </h2>
      <ul className="flex flex-col gap-5 w-[800px]">
        {data.map((place)=> (
          <li key={place.title} className={`flex border-gray-300 rounded-md p-7 justify-between border cursor-pointer hover:border-gray-950 transition-all duration-300 
          ${place.title === placeType?.title && "border-gray-500 bg-slate-100"
        }`}
              onClick={() => setPlaceType(place)}>
            <div>
              <h4 className="font-semibold">{place.title}</h4>
              <p>{place.subTitle}</p>
            </div>
            {place.svg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingPlaceType;
