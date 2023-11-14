import { useAppStore } from "airbnb/store/store";
import React, { useEffect } from "react";
import ListingCard from "../ListingCard";
import { getUserWishlists } from "airbnb/lib/lisitng";

const ListView = () => {

  const { listings, userInfo, setWishlists, wishlists,
    wishlistsPage } = useAppStore();
  
  useEffect(() => {
    const getWishlists = async () => {
      if(userInfo) {
        const wishlists = await getUserWishlists(userInfo?.id);
        const wishlistsId = wishlists?.map(({listing}) => listing.id);
        setWishlists(wishlistsId);
      }
    }
    getWishlists();
  }, []);

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
