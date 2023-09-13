"use client"
import AuthModal from "airbnb/components/auth/AuthModal";
import Footer from "airbnb/components/footer/Footer";
import Navbar from "airbnb/components/navbar/Navbar";
import { useAppStore } from "airbnb/store/store";
import React from "react";

const page = () => {

  const { isAuthModalOpen } = useAppStore();

  return (
    <div>
      <Navbar></Navbar>
      <Footer></Footer>
      {
        isAuthModalOpen &&
        <AuthModal></AuthModal>
      }
    </div>
    );
};

export default page;
