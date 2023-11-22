"use client";
import React, { useState } from "react";
import AirbnbLogo from "airbnb/svg/airbnb-logo";
import { FiGlobe } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import ContextMenu from "../common/ContextMenu";
import { useAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";
import Search from "./Search";
import SearchModal from "./SearchModal";
import AirBnbLogoShort from "airbnb/svg/airbnb-logo-short";
import AirBnbLogo from "airbnb/svg/airbnb-logo";

const Navbar = () => {
  const { setAuthModal, userInfo, setUserInfo } = useAppStore();
  const router = useRouter();
  const [isContesxtMenuVisible, setIsContesxtMenuVisible] = useState(false);

  const contextMenuOptions = [
    {
      name: "Login",
      callBack: () => {
        setAuthModal();
        setIsContesxtMenuVisible(false);
      },
    },
    {
      name: "Signup",
      callBack: () => {
        setAuthModal();
        setIsContesxtMenuVisible(false);
      },
    },
    {
      name: "D3Properties",
      callBack: () => {
        setIsContesxtMenuVisible(false);
      },
    },
    {
      name: "Help",
      callBack: () => {
        setIsContesxtMenuVisible(false);
      },
    },
  ];

  const authenticatedMenuOptions = [
    {
      name: "Messages",
      callBack: () => {
        setIsContesxtMenuVisible(false);
      },
    },
    {
      name: "Notifications",
      callBack: () => {
        setIsContesxtMenuVisible(false);
      },
    },
    {
      name: "Trips",
      callBack: () => {
        setIsContesxtMenuVisible(false);
        router.push("/trips");
      },
    },
    {
      name: "Wishlists",
      callBack: () => {
        setIsContesxtMenuVisible(false);
        router.push("/wishlist");
      },
    },
    {
      name: "Manage Listings",
      callBack: () => {
        setIsContesxtMenuVisible(false);
        router.push("/my-listings");
      },
    },
    {
      name: "Help",
      callBack: () => {
        setIsContesxtMenuVisible(false);
      },
    },
    {
      name: "Logout",
      callBack: () => {
        setUserInfo(null);
        setIsContesxtMenuVisible(false);
        localStorage.clear();
      },
    },
  ];

  return (
    <header className="w-full flex flex-col justify-center transition-all duration-300 h-20 shadow-[0_0_15px_-5px_rgba(0,0,0,0.15)]">
      <nav className="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
        <div className="inline-flex">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <div className="hidden md:block">
              <AirBnbLogo></AirBnbLogo>
            </div>
            <div className="block md:hidden">
              <AirBnbLogoShort></AirBnbLogoShort>
            </div>
          </div>
        </div>
        <div className="flex-shrink flex-grow-0 justify-start px-2">
          <Search></Search>
          <SearchModal></SearchModal>
        </div>

        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="hidden sm:flex mr-4 items-center">
              <div
                className="inline-block cursor-pointer py-2 px-3 hover:bg-gray-200 rounded-full"
                onClick={() => router.push("./new-listing")}
              >
                <div className="flex items-center relative whitespace-nowrap">
                  Sell on D3 Properties
                </div>
              </div>
              <div className="block relative">
                <div
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
                >
                  <div className="flex items-center h-5">
                    <FiGlobe></FiGlobe>
                  </div>
                </div>
              </div>
            </div>

            <div className="block">
              <div
                className="flex cursor-pointer items-center gap-2 border border-grey-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500"
                onClick={() => {
                  setIsContesxtMenuVisible(!isContesxtMenuVisible);
                }}
              >
                <RxHamburgerMenu></RxHamburgerMenu>
                {userInfo ? (
                  <span className="flex justify-center items-center bg-black text-white h-7 w-7 text-sm rounded-full">
                    {userInfo.firstName?.split("").shift().toUpperCase()}
                  </span>
                ) : (
                  <span>
                    <Image
                      src="/empty-profile.png"
                      alt="profile"
                      height={30}
                      width={30}
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
            {isContesxtMenuVisible && (
              <ContextMenu
                contextMenu={isContesxtMenuVisible}
                setContextMenu={setIsContesxtMenuVisible}
                cordinates={{
                  x: window.innerWidth - 200,
                  y: 70,
                }}
                options={
                  userInfo ? authenticatedMenuOptions : contextMenuOptions
                }
              ></ContextMenu>
            )}
      </nav>
    </header>
  );
};

export default Navbar;
