"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import Footer from "airbnb/components/footer/Footer";
import ListView from "airbnb/components/views/ListView";
import MapView from "airbnb/components/views/MapView";
import ViewSwitchBadge from "airbnb/components/views/ViewSwitchBadge";
import { listingTypes } from "airbnb/data/listingTypes";
import { getAllListingsAPI } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"
import dynamic from "next/dynamic";
import EmptyState from "airbnb/components/common/EmptyState";
import CategoryBox from "airbnb/components/common/CategoryBox";
import { useSearchParams, usePathname } from "next/navigation";
const Navbar = dynamic(()=> import("airbnb/components/navbar/Navbar"), {ssr: false});

const page = () => {
  const { isAuthModalOpen, setListings, isMapView } = useAppStore();
  const ref = useRef(null);
  const params = useSearchParams();
  const query = {};
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    params?.forEach((value, key) => {
      query[key] = value;
    });

    const getData = async () => {
      const data = await getAllListingsAPI(query);
      setListings(data);
      if (data.length === 0) setIsEmpty(true);
      else setIsEmpty(false);
    };

    getData();
  }, [setListings, setIsEmpty, params]);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="max-h-[100vh] h-[100vh]">
      <Navbar></Navbar>
      <div className="relative flex items-center justify-center">
        <div className="w-[85vw] overflow-auto no-scrollbar scroll-smooth mt-3 px-10" ref={ref}>
          <ul className="flex gap-5 h-full">
            {listingTypes.map((data, index) => (
              <CategoryBox key={index} selected={query.locationType === data.name} icon={data.svgPath} name={data.name}></CategoryBox>
            ))}
          </ul>
          <button className="absolute top-1/3 left-16 rounded-full border p-2 bg-white" onClick={() => scroll("-500")}><BiChevronLeft></BiChevronLeft></button>
          <button className="absolute top-1/3 right-16 rounded-full border p-2 bg-white" onClick={() => scroll("500")}><BiChevronRight></BiChevronRight></button>
        </div>
      </div>
      {
        isEmpty ?
        <EmptyState showReset></EmptyState>
        :
        (
        <>
          <ViewSwitchBadge></ViewSwitchBadge>
            {isMapView ? <MapView></MapView> : <ListView></ListView>}
        </>
        )
      }
      
      <Footer></Footer>
      {isAuthModalOpen && <AuthModal></AuthModal>}
    </div>
  );
};

export default page;
