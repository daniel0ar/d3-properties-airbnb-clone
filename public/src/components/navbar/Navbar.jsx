"use client";
import React, {useState} from "react";
import AirbnbLogo from 'airbnb/svg/airbnb-logo'
import { FiGlobe } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import Image from "next/image";
import ContextMenu from "../common/ContextMenu";
import {useAppStore} from "airbnb/store/store"

const Navbar = () => {

  const {setAuthModal} = useAppStore();

  const [isContesxtMenuVisible, setIsContesxtMenuVisible] = useState(false);
  
  const contextMenuOptions = [{
    name: "Login",
    callBack: () => {
      setAuthModal();
      setIsContesxtMenuVisible(false)
    }
  },
  {
    name: "Signup",
    callBack: () => {
      setAuthModal();
      setIsContesxtMenuVisible(false)
    }
  },
  {
    name: "D3Properties",
    callBack: () => {
      setIsContesxtMenuVisible(false)
    }
  },
  {
    name: "Help",
    callBack: () => {
      setIsContesxtMenuVisible(false)
    }
  }
  ]

  return (
    <header className="w-full flex flex-col justify-center transition-all duration-300 h-20 shadow-[0_0_15px_-5px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between px-20">
        <div className="flex-grow basis-0">
          <div className="w-max cursor-pointer">
            <AirbnbLogo></AirbnbLogo>
          </div>
        </div>
        <div className="flex-grow basis-0">
          <ul className="flex items-center justify-end gap-6 font-medium">
            <li className="cursor-pointer">
              <span>Sell on D3 Properties</span>
            </li>
            <li className="cursor-pointer">
              <FiGlobe></FiGlobe>
            </li>
            <li className="flex cursor-pointer items-center gap-2 border border-grey-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500" onClick={() => {setIsContesxtMenuVisible(!isContesxtMenuVisible)}}>
              <RxHamburgerMenu></RxHamburgerMenu>
              <span>
                <Image src='/empty-profile.png' alt="profile" height={30} width={30}/>
              </span>
            </li>
          </ul>
        </div>
      </div>
      { isContesxtMenuVisible && 
        <ContextMenu
          contextMenu={isContesxtMenuVisible}
          setContextMenu={setIsContesxtMenuVisible}
          cordinates={{
            x: window.innerWidth - 250,
            y: 70
          }}
          options={contextMenuOptions}>
        </ContextMenu>}
    </header>
  );
};

export default Navbar;
