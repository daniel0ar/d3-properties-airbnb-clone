"use client"
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "airbnb/components/footer/Footer";
import { useAppStore } from "airbnb/store/store";
import { getUserListings } from "airbnb/lib/lisitng";
import ListingCard from "airbnb/components/ListingCard";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), { ssr: false });


const page = () => {

  const { userInfo, userListings, setUserListings } = useAppStore();

  useEffect(() => {
    const getData = async () => {
      const data = await getUserListings(userInfo.id);
      setUserListings(data);
    }

    if (userInfo) {
      getData();
    }

  }, [userInfo])

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {
          userListings.map((listing, index) => (
            <ListingCard data={listing} key={listing.id} isMyListing></ListingCard>
          ))
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
