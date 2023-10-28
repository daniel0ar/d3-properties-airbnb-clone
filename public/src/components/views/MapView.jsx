import { useAppStore } from "airbnb/store/store";
import React, { useState, useMemo } from "react";
import { Map, GeolocateControl, Marker, Popup } from "react-map-gl";
import Pin from "../common/Pin";
import ListingCard from "../ListingCard";

const MapView = () => {
  const { listings } = useAppStore();

  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(() =>
    listings.map((data, index) => (
      <Marker
        key={`marker-${data.id}`}
        longitude={data.mapData.longitude}
        latitude={data.mapData.latitude}
        anchor="top"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupInfo(data);
        }}
      >
        <Pin></Pin>
      </Marker>
    ))
  );

  return (
    <div className="h-[72.5vh] max-w-[100vw] pt-2">
      <Map
        initialViewState={{
          latitude: -2.9001348,
          longitude: -79.0100997,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.mapData.longitude}
            latitude={popupInfo.mapData.latitude}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <ListingCard data={popupInfo}></ListingCard>
            </div>
          </Popup>
        )}
        <GeolocateControl></GeolocateControl>
      </Map>
    </div>
  );
};

export default MapView;
