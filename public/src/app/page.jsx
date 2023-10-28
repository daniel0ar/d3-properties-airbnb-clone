"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import Footer from "airbnb/components/footer/Footer";
import Navbar from "airbnb/components/navbar/Navbar";
import ListView from "airbnb/components/views/ListView";
import MapView from "airbnb/components/views/MapView";
import ViewSwitchBadge from "airbnb/components/views/ViewSwitchBadge";
import { listingTypes } from "airbnb/data/listingTypes";
import { getAllListingsAPI } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import React, { useEffect, useRef } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"

const page = () => {
  const { isAuthModalOpen, setListings, isMapView } = useAppStore();
  const ref = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllListingsAPI();
      setListings(data);
    };

    getData();
  }, []);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="max-h-[100vh] h-[100vh]">
      <Navbar></Navbar>
      <div className="relative flex items-center justify-center">
        {/* TODO: Fix scroll horizontal*/}
        <div className="w-[85vw] overflow-auto no-scrollbar scroll-smooth mt-3 px-10" ref={ref}>
          <ul className="flex gap-5 h-full">
            {listingTypes.map((data) => (
              <li
                key={data.name}
                className="w-max flex flex-col items-center justify-between h-16 cursor-pointer brightness-[4] text-gray-900 hover:filter-none"
              >
                <span className="h-10 w-10 flex itmes-center justify-center">
                  {data.svgPath}
                </span>
                <div className="text-xs font-semibold break-keep w-[inherit]">
                  {data.name}
                </div>
              </li>
            ))}
          </ul>
          <button className="absolute top-1/3 left-16 rounded-full border p-2 bg-white" onClick={() => scroll("-500")}><BiChevronLeft></BiChevronLeft></button>
          <button className="absolute top-1/3 right-16 rounded-full border p-2 bg-white" onClick={() => scroll("500")}><BiChevronRight></BiChevronRight></button>
        </div>
      </div>
      <ViewSwitchBadge></ViewSwitchBadge>
      {isMapView ? <MapView></MapView> : <ListView></ListView>}
      <Footer></Footer>
      {isAuthModalOpen && <AuthModal></AuthModal>}
    </div>
  );
};

export default page;
