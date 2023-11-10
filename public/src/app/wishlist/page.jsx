"use client";
import React, { useState, useEffect } from "react";
import AuthModal from "airbnb/components/auth/AuthModal";
import Footer from "airbnb/components/footer/Footer";
import ListingCard from "airbnb/components/ListingCard";
import { getUserWishlists } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});

const page = () => {
  const { isAuthModalOpen, userInfo, wishlistsPage, setWishlistsPage } =
    useAppStore();

  useEffect(() => {
    const getData = async () => {
      const wishlists = await getUserWishlists(userInfo?.id);
      setWishlistsPage(wishlists);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[82.5vh] flex justify-start items-start">
        {wishlistsPage.length > 0 ? (
          <div className="p-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {wishlistsPage?.map(({ listing, id }, index) => (
              <ListingCard
                data={listing}
                key={index}
                isWishlist={true}
                _wishlistId={id}
              ></ListingCard>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h1>
              No listing has been aded to your wishlist. Add some by clicking
              the heart button
            </h1>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
