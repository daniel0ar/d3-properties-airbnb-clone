import { useAppStore } from "airbnb/store/store";
import Daimond from "airbnb/svg/daimond";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { addDays } from "date-fns";
import { addTrip } from "airbnb/lib/lisitng";

const TripScheduler = () => {
  const router = useRouter();
  const { currentListing, userInfo } = useAppStore();
  const [state, setState] = useState({
    startDate: new Date().toISOString().slice(0, 10),
    endDate: addDays(new Date(), 7).toISOString().slice(0, 10),
  });

  const [guests, setGuests] = useState(0);

  const calculateDaysDiff = () => {
    const startDate = new Date(state.startDate);
    const endDate = new Date(state.endDate);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };

  const handleReservation = async () => {
    if (userInfo) {
      const data = {
        listingId: currentListing.id,
        userId: userInfo?.id,
        tripInfo: {
          startDate: state.startDate,
          endDate: state.endDate,
          price: `$${currentListing.price * calculateDaysDiff()}`,
        },
      };
      const response = await addTrip(data);
      if (response) {
        router.push("/trips");
      }
    }
  };

  return (
    <div className="sticky top-0 w-full flex flex-col gap-6 items-center justify-center">
      <div className="border border-gray-400 rounded-lg shadow-lg flex p-4 gap-2 items-start px-8 flex-col w-full">
        <div className="flex gap-1 text-lg">
          <span className="font-bold text-lg">${currentListing.price}</span>
          <span>night</span>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col gap-1 border border-gray-200 p-2 rounded-tl-md cursor-pointer">
              <label className="font-semibold text-xs">CHECK-IN</label>
              <input
                type="date"
                className="text-sm accent-d3prop-theme-color"
                value={state.startDate.toString()}
                name="startDate"
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-1 border border-gray-300 p-2 rounded-tr-md cursor-pointer">
              <label className="font-semibold text-xs">CHECK-OUT</label>
              <input
                type="date"
                className="text-sm accent-d3prop-theme-color"
                value={state.endDate.toString()}
                name="endDate"
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col gap-1 border border-gray-300 p-2 rounded-b-md cursor-pointer">
                <label className="font-semibold text-xs">GUESTS</label>
                <input
                  type="number"
                  className="text-sm px-1 py-1 border-none outline-none"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-d3prop-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer w-full"
          onClick={handleReservation}
        >
          Reserve
        </button>
        <span className="text-center w-full">You won't be charged yet</span>
        <div className="flex justify-between w-full">
          <span>
            ${currentListing.price} x {calculateDaysDiff()} nights
          </span>
          <span>${currentListing.price * calculateDaysDiff()}</span>
        </div>
        <div className="flex justify-between w-full">
          <span>Total before taxes</span>
          <span>${currentListing.price * calculateDaysDiff()}</span>
        </div>
      </div>
      <div className="flex border border-gray-400 rounded-lg p-4 gap-2 items-start px-8">
        <span>
          <strong>This is a rare find</strong>
          <br></br>
          {currentListing?.listingCreatedBy?.firstName}'s place on D3Properties
          is usually fully booked
        </span>
        <Daimond></Daimond>
      </div>
      <div className="flex gap-3 items-center cusor-pointer">
        <span>
          <BsFillFlagFill></BsFillFlagFill>
        </span>
        <span className="underline font-semibold">Report this listing</span>
      </div>
    </div>
  );
};

export default TripScheduler;
