import React, { useState } from "react";
import { Map, Marker, GeolocateControl } from "react-map-gl";
import GeocoderControl from "./geocoder-control";
import { useAppStore } from "airbnb/store/store";

const PlaceLocation = () => {

  const { setMapData, setLocationData } = useAppStore();
  const [marker, setMarker] = useState({
    latitude: -2.9001348,
    longitude: -79.0100997
  });

  const getResults = ({ result }) => {

    const [longitude, latitude] = result?.geometry?.coordinates;

    const data = {
      landmark: result?.text,
      neighborhood: "",
      postcode: "",
      locality: "",
      place: "",
      district: "",
      region: "",
      country: "",
    }

    result?.context?.forEach(item => {
      Object.keys(data)?.forEach(key => {
        if (item?.id?.startsWith(key + ".")) {
          data[key] = item?.text;
        }
      });
    });

    setMarker({ longitude, latitude });
    setMapData({ longitude, latitude });
    setLocationData({ ...data });

  }

  const handleDragEnd = (e) => {
    setMapData({
      longitude: e.viewState.longitude,
      latitude: e.viewState.latitude
    });
  }

  const handleDrag = (e) => {
    setMarker({
      longitude: e.viewState.longitude,
      latitude: e.viewState.latitude
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <h2 className="font-semibold text-4xl">
        Which of these best describes your place?
      </h2>
      <p>
        Your address is only shared with guests after they have made a reservation.
      </p>
      <div className="h-[400px] w-[700px]">
        <Map
          initialViewState={{
            latitude: -2.9001348,
            longitude: -79.0100997,
            zoom: 13,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          onDragEnd={(e) => handleDragEnd(e)}
          onDrag={(e) => handleDrag(e)}
        >
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            on
          >
          </Marker>
          <GeocoderControl
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            position="top-left"
            proximity={marker}
            onLoading={() => { }}
            onResults={() => { }}
            onResult={getResults}
            onError={() => { }}>
          </GeocoderControl>
          <GeolocateControl
            onGeolocate={(e) => 
              setMarker({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude
              })}/>
        </Map>
      </div>
    </div>
  );
};

export default PlaceLocation;
