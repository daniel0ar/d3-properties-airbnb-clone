import { useAppStore } from "airbnb/store/store";
import Image from "next/image";
import React, { useState } from "react";

const ListingPhotos = () => {
  const { currentListing } = useAppStore();
  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <div className="flex gap-5 flex-col">
      <div className="relative w-full max-h-[60vh] overflow-hidden">
        <Image
          alt="listing"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          src={currentListing.photos[currentPhoto]}
        ></Image>
      </div>
      {currentListing.photos.length > 1 && (
        <ul className="flex gap-5 flex-wrap">
          {currentListing.photos.map((photo, index) => (
            <li
              key={photo}
              className="relative w-48 h-32 cursor-pointer"
              onClick={() => setCurrentPhoto(index)}
            >
              <Image src={photo} alt="listing" fill></Image>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListingPhotos;
