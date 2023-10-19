import { useAppStore } from "airbnb/store/store";
import React from "react";
import FormInput from "../common/FormInput";

const PlaceDetails = () => {

  const { locationData, setLocationData } = useAppStore();

  const handleChange = (name, value) => {
    setLocationData({...locationData, [name]: value});
  }

  return (
    <div className="flex justify-center items-center h-full flex-col gap-2 w-full">
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-4xl">Confirm your address</div>
        <p>
          Your address is only shared with guests after they have made a reservation.
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-3 h-full overflow-auto no-scrollbar pb-20 pt-5">
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="neighborhood"
            placeholder="House, flat, building, etc."
            setValue={handleChange}
            type="text"
            value={locationData?.neighborhood}>
          </FormInput>
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="place"
            placeholder="Area, village (if any)"
            setValue={handleChange}
            type="text"
            value={locationData?.place}>
          </FormInput>
          <FormInput
            isListing
            name="locality"
            placeholder="Street address"
            setValue={handleChange}
            type="text"
            value={locationData?.locality}>
          </FormInput>
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="landmark"
            placeholder="Nearby landmark (if any)"
            setValue={handleChange}
            type="text"
            value={locationData?.landmark}>
          </FormInput>
          <FormInput
            isListing
            name="district"
            placeholder="City / town"
            setValue={handleChange}
            type="text"
            value={locationData?.district}>
          </FormInput>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
