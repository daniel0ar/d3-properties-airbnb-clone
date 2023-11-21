"use client";
import React, { useState } from "react";
import AirbnbLogo from 'airbnb/svg/airbnb-logo'
import { FiGlobe } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import Image from "next/image";
import ContextMenu from "../common/ContextMenu";
import { useAppStore } from "airbnb/store/store"
import { useRouter } from "next/navigation";
import Search from "./Search";
import SearchModal from "./SearchModal";

const Navbar = () => {

  const { setAuthModal, userInfo, setUserInfo } = useAppStore();
  const router = useRouter();
  const [isContesxtMenuVisible, setIsContesxtMenuVisible] = useState(false);

  const contextMenuOptions = [{
    name: "Login",
    callBack: () => {
      setAuthModal();
      setIsContesxtMenuVisible(false);
    }
  },
  {
    name: "Signup",
    callBack: () => {
      setAuthModal();
      setIsContesxtMenuVisible(false);
    }
  },
  {
    name: "D3Properties",
    callBack: () => {
      setIsContesxtMenuVisible(false);
    }
  },
  {
    name: "Help",
    callBack: () => {
      setIsContesxtMenuVisible(false);
    }
  }
  ];

  const authenticatedMenuOptions = [
    {
      name: "Messages",
      callBack: () => {
        setIsContesxtMenuVisible(false);
      }
    },
    {
      name: "Notifications",
      callBack: () => {
        setIsContesxtMenuVisible(false);
      }
    },
    {
      name: "Trips",
      callBack: () => {
        setIsContesxtMenuVisible(false);
        router.push("/trips");
      }
    },
    {
      name: "Wishlists",
      callBack: () => {
        setIsContesxtMenuVisible(false);
        router.push("/wishlist");
      }
    },
    {
      name: "Manage Listings",
      callBack: () => {
        setIsContesxtMenuVisible(false);
        router.push("/my-listings");
      }
    },
    {
      name: "Help",
      callBack: () => {
        setIsContesxtMenuVisible(false);
      }
    },
    {
      name: "Logout",
      callBack: () => {
        setUserInfo(null);
        setIsContesxtMenuVisible(false);
        localStorage.clear();
      }
    },
  ]

  return (
    <header className="w-full flex flex-col justify-center transition-all duration-300 h-20 shadow-[0_0_15px_-5px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between px-20">
        <div className="flex-grow basis-0">
          <div className="w-max cursor-pointer" onClick={() => router.push('/')}>
            <AirbnbLogo></AirbnbLogo>
          </div>
        </div>
        <div>
          <Search></Search>
          <SearchModal></SearchModal>
        </div>
        <div className="flex-grow basis-0">
          <ul className="flex items-center justify-end gap-6 font-medium">
            {
              userInfo &&
              <li className="cursor-pointer" onClick={() => router.push("./new-listing")}>
                <span>Sell on D3 Properties</span>
              </li>
            }
            <li className="cursor-pointer">
              <FiGlobe></FiGlobe>
            </li>
            <li className="flex cursor-pointer items-center gap-2 border border-grey-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500" onClick={() => { setIsContesxtMenuVisible(!isContesxtMenuVisible) }}>
              <RxHamburgerMenu></RxHamburgerMenu>
              {
                userInfo ? (
                  <span className="flex justify-center items-center bg-black text-white h-7 w-7 text-sm rounded-full">
                    {userInfo.firstName?.split("").shift().toUpperCase()}
                  </span>
                ) :
                  (
                    <span>
                      <Image src='/empty-profile.png' alt="profile" height={30} width={30} />
                    </span>
                  )
              }
            </li>
          </ul>
        </div>
      </div>
      {isContesxtMenuVisible &&
        <ContextMenu
          contextMenu={isContesxtMenuVisible}
          setContextMenu={setIsContesxtMenuVisible}
          cordinates={{
            x: window.innerWidth - 250,
            y: 70
          }}
          options={userInfo ? authenticatedMenuOptions : contextMenuOptions}>
        </ContextMenu>}
    </header>
  );
};

export default Navbar;
