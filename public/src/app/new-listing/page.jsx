"use client"
import ListingPlaceType from "airbnb/components/process/ListingPlaceType";
import ListingTypeSelector from "airbnb/components/process/ListingTypeSelector";
import Overview from "airbnb/components/process/Overview";
import PlaceLocation from "airbnb/components/process/PlaceLocation";
import PlaceDetails from "airbnb/components/process/PlaceDetails";
import StepOneStarter from "airbnb/components/process/StepOneStarter";
import AirBnbLogoShort from "airbnb/svg/airbnb-logo-short";
import React, { useState } from "react";
import FloorPlan from "airbnb/components/process/FloorPlan";
import StepTwoStarter from "airbnb/components/process/StepTwoStarter";
import ProcessAmeneties from "airbnb/components/process/ProcessAmeneties";
import Photos from "airbnb/components/process/Photos";
import Title from "airbnb/components/process/Title";
import Description from "airbnb/components/process/Description";
import StepThreeStarter from "airbnb/components/process/StepThreeStarter";
import Price from "airbnb/components/process/Price";
import ListingCreated from "airbnb/components/process/ListingCreated";

const page = () => {

  const [step, setStep] = useState(0);

  const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview></Overview>
      case 1:
        return <StepOneStarter></StepOneStarter>
      case 2:
        return <ListingTypeSelector></ListingTypeSelector>
      case 3:
        return <ListingPlaceType></ListingPlaceType>
      case 4:
        return <PlaceLocation></PlaceLocation>
      case 5:
        return <PlaceDetails></PlaceDetails>
      case 6:
        return <FloorPlan></FloorPlan>
      case 7:
        return <StepTwoStarter></StepTwoStarter>
      case 8:
        return <ProcessAmeneties></ProcessAmeneties>
      case 9:
        return <Photos></Photos>
      case 10:
        return <Title></Title>
      case 11:
        return <Description></Description>
      case 12:  
        return <StepThreeStarter></StepThreeStarter>
      case 13:
        return <Price></Price>
      case 14:
        return <ListingCreated></ListingCreated>
      default:
        return <></>
    }
  }

  const handlePrevius = () => {
    setStep(step-1);
  }

  const handleNext = () => {
    setStep(step+1);
  }

  return (<div className="grid grid-rows-new-listing h-[100vh]">
    <header className="flex items-center px-20 justify-between">
      <div className="cursor-pointer">
        <AirBnbLogoShort></AirBnbLogoShort>
      </div>
      {
        step <= 13 &&
        <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:border-gray-700 cursor-pointer">
          Save
        </button>
      }
    </header>

    {getComponent()}

    <footer className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300 ${step > 0 ? "justify-between" : "justify-end"}`}>
      {
        step>=1 && (
          <button className="py-3 mt-5 px-10 text-d3prop-light-black shadow-inner shadow-slate-300 hover:bg-gray-200 text-base font-medium rounded-md"
      onClick={handlePrevius}>
        Back
      </button>
        ) 
      }
      {
        step !== 0 ? (
          <button className="bg-d3prop-light-black py-3 mt-5 px-10 text-white hover:bg-gray-700 text-base font-medium rounded-md"
      onClick={handleNext}>
        Next
      </button>
        )
        :
<button className="bg-d3prop-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md hover:bg-d3prop-gradient-alt"
      onClick={handleNext}>
        Get Started
      </button>
      }
      
      
    </footer>
  </div>);
};
export default page;
