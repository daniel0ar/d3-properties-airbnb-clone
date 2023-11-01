import { useAppStore } from "airbnb/store/store";
import React from "react";
import ListingCard from "../ListingCard";

const ListView = () => {

  const { listings } = useAppStore();

  return (
    <div className="p-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {
        listings.map((listing, index) => (
          <ListingCard key={listing.id} data={listing}></ListingCard>
        ))
      }
    </div>
  );
};

export default ListView;
