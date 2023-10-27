import { createListingApi } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Confetti from "react-confetti";

const ListingCreated = () => {

  const router = useRouter();
  const {
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    placeAmeneties,
    photos,
    title,
    description,
    price, } = useAppStore();

  useEffect(() => {
    createListingApi({
      locationType: locationType.name,
      placeType: placeType.title,
      mapData,
      locationData,
      placeSpace,
      placeAmeneties,
      photos,
      title,
      description,
      price,
      listingCreatedBy: {id: userInfo?.id},
    });
  }, [userInfo, locationType, placeType, mapData, locationData, placeSpace, placeAmeneties, photos, title, description])

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-4xl">Great!</h2>
        <p>You have succcesfully created your listing!</p>
        <div className="flex gap-5">
          <button className="bg-d3prop-light-black py-3 mt-5 px-10 text-white hover:bg-gray-700 text-base font-medium rounded-md"
            onClick={() => router.push('/')}>
            Visit Home Page
          </button>
          <button className="bg-d3prop-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md hover:bg-d3prop-gradient-alt"
            onClick={() => router.push('/my-listings')}>
            View your Listings
          </button>
        </div>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
          tweenDuration={15000}></Confetti>
      </div>
    </div>
  );
};

export default ListingCreated;
