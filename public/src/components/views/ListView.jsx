import { useAppStore } from "airbnb/store/store";
import React from "react";
import ListingCard from "../ListingCard";

const ListView = () => {

  const { listings } = useAppStore();

  return (
    <div className="grid grid-cols-5 px-20 gap-5 py-10 justify-start">
      {
        listings.map((listing, index) => (
          <ListingCard key={listing.id} data={listing}></ListingCard>
        ))
      }
    </div>
  );
};

export default ListView;
