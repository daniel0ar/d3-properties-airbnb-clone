"use client";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});
import { getListing } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import React, { useEffect, useState } from "react";
import ListingPhotos from "./components/ListingPhotos";
import ListingAmenties from "./components/ListingAmenties";
import ListingMap from "./components/ListingMap";
import TripScheduler from "./components/TripScheduler";
import Footer from "airbnb/components/footer/Footer";
import { IoMdClose } from "react-icons/io";

const page = ({ params: { listing } }) => {
  const { currentListing, setCurrentListing } = useAppStore();
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getListing(listing);
      setCurrentListing(data);
    };

    if (listing) {
      getData();
    }
  }, [listing, setCurrentListing]);

  return (
    currentListing && (
      <div>
        <Navbar></Navbar>
        <div
          className="px-8 md:px-20 pt-10 text-d3prop-light-black grid gap-10"
          style={{ gridTemplateColumns: "70fr 30fr" }}
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-5xl">{currentListing.title}</h2>
              <span className="text-lg underline">
                in {currentListing.locationData.landmark}
              </span>
              <button
                className="md:hidden bg-d3prop-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer w-full"
                onClick={() => setIsSchedulerOpen(true)}
              >
                Reserve
              </button>
            </div>
            <ListingPhotos></ListingPhotos>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold">
                  {currentListing?.locationType} hosted by{" "}
                  {currentListing?.listingCreatedBy?.firstName}{" "}
                  {currentListing?.listingCreatedBy?.lastName}
                </h3>
                <ul className="flex gap-5">
                  {Object.keys(currentListing.placeSpace).map((type) => (
                    <li
                      key={type}
                      className="border border-gray-300 p-3 rounded-lg flex flex-col justify-start items-start w-32"
                    >
                      <span className="text-2xl font-semibold">
                        {currentListing.placeSpace[type]}
                      </span>
                      <span className="capitalize"> {type}</span>
                    </li>
                  ))}
                </ul>
                <p>{currentListing.description}</p>
                <ListingAmenties></ListingAmenties>
                <ListingMap></ListingMap>
              </div>
            </div>
          </div>
          <div className="hidden md:inline-block">
            <TripScheduler></TripScheduler>
          </div>
          {isSchedulerOpen && (
            <div className="md:hidden justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
              <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-[600px] lg:h-auto md:h-auto bg-white">
                <div
                  className="flex items-center p-6 rounded-t justify-center relative"
                >
                  <div
                    className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                  >
                    <button
                      className="p-1 hover:opacity-70 absolute z-10"
                      onClick={() => setIsSchedulerOpen(false)}
                    >
                      <IoMdClose size={24} />
                    </button>
                    <TripScheduler></TripScheduler>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer></Footer>
      </div>
    )
  );
};

export default page;
