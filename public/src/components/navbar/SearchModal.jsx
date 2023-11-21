"use client";
import { useAppStore } from "airbnb/store/store";
import Modal from "./Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useMemo } from "react";
import { formatISO } from "date-fns";
import CountrySelect from "../common/CountrySelect";
import { Map } from "react-map-gl";
import Calendar from "../common/Calendar";
import Counter from "../common/Counter";
import qs from "query-string";

const SearchModal = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { isOpen, onClose, onOpen } = useAppStore();

  const [location, setLocation] = useState({
    flag: "🇪🇨",
    label: "Ecuador",
    region: "Americas",
    value: "EC",
    latlng: [-2.9001348, -79.0100997],
  });
  const [step, setStep] = useState(0);
  const [guests, setGuests] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== 2) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      country: location?.label,
      guests,
      beds,
      bathrooms,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });
    setStep(0);
    onClose();
    router.push(url);
  }, [
    step,
    onClose,
    location,
    router,
    guests,
    beds,
    bathrooms,
    dateRange,
    onNext,
    params,
  ]);

  const actionLabel = useMemo(() => {
    if (step === 2) {
      return "Search";
    }
    return "Next";
  }, [step]);

  const secActionLabel = useMemo(() => {
    if (step === 0) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl leading-normal font-semibold text-d3prop-light-black">
        Where do you want to go?
      </h3>
      <p className="text-gray-500">Find the perfect location</p>
      <CountrySelect
        value={location}
        onChange={(value) => setLocation(value)}
      ></CountrySelect>
      <hr />
      <div className="h-[300px] w-full pt-2">
        <Map
          initialViewState={{
            latitude: location?.latlng[0],
            longitude: location?.latlng[1],
            zoom: 5,
          }}
          latitude={location?.latlng[0]}
          longitude={location?.latlng[1]}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        ></Map>
      </div>
    </div>
  );

  if (step === 1) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <h3 className="text-2xl leading-normal font-semibold text-d3prop-light-black">
          When do you plan to go?
        </h3>
        <p className="text-gray-500">Make sure veryone is free!</p>
        <Calendar
          value={dateRange}
          onChange={(value) => setDateRange(value.selection)}
        ></Calendar>
      </div>
    );
  }

  if (step === 2) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <h3 className="text-2xl leading-normal font-semibold text-d3prop-light-black">
          More information
        </h3>
        <p className="text-gray-500">Find your perfect place</p>
        <Counter
          title="Guests"
          subtitle="How many guests are coming?"
          value={guests}
          onChange={(value) => setGuests(value)}
        ></Counter>
        <Counter
          title="Beds"
          subtitle="How many beds do you need?"
          value={beds}
          onChange={(value) => setBeds(value)}
        ></Counter>
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you need?"
          value={bathrooms}
          onChange={(value) => setBathrooms(value)}
        ></Counter>
      </div>
    );
  }

  return (
    <Modal
      first
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      title="Filters"
      actionLabel={actionLabel}
      secondaryActionLabel={secActionLabel}
      secondaryAction={step === 0 ? undefined : onBack}
      body={bodyContent}
    ></Modal>
  );
};

export default SearchModal;
