import React, { useEffect, useState } from "react";
import { AmenetiesType } from "airbnb/data/Amenities";
import { AiFillDelete } from "react-icons/ai";
import { useAppStore } from "airbnb/store/store"
import { useRouter } from "next/navigation";
import { addToWishlistAPI, removeFromWishlistAPI, deleteListingAPI } from "airbnb/lib/lisitng";


const ListingCard = ({
  data,
  isMyListing = false,
  isWishlist = false,
  _wishlistId = undefined,
}) => {
  let counter = 0;

  const {
    removeUserListing,
    userInfo,
    addToWishlist,
    wishlists,
    wishlistsPage,
    setWishlistsPage,
  } = useAppStore();

  const [isWish, setIsWish ] = useState(isWishlist);
  const [wishlistId, setWishlistId] = useState(_wishlistId);

  // const pathName = usePathName();
  const router = useRouter();

  const handleAddToWishlist = async () => {
    setIsWish(true);
    const addedWishlist = await addToWishlistAPI(data.id, userInfo?.id);
    setWishlistId(addedWishlist.id);
    addToWishlist(data.id);
  };

  const handleRemoveFromWishlist = async () => {
    setIsWish(false);
    await removeFromWishlistAPI(wishlistId);
    const index = wishlistsPage.findIndex((list) => list.id === wishlistId);
    if (index !== -1){
      wishlistsPage.splice(index, 1);
      setWishlistsPage(wishlistsPage);
    }
  }

  const handleDelete = async () => {
    const response = await deleteListingAPI(data.id);
    if (response)
      removeUserListing(data.id);
  };

  const getRandomFloat = (min, max, decimals) => {
    const str = (Math.random() * (max - min) + min).toFixed(
      decimals,
    );
    return parseFloat(str);
  }

  useEffect(() => {
    if (wishlists?.includes(data.id)){
      setIsWish(true);
    }
  }, [wishlists]);

  return (
    <div className="shadow-lg p-4 rounded-lg cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/listing/${data.id}`);
      }}>
      <div className="relative aspect-square rounded-lg shadow-lg overflow-hidden">
        <img className="object-cover h-full w-full" src={data.photos[0]} />
        {!isMyListing && userInfo && (
          <button
            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (!isWish) handleAddToWishlist()
              else handleRemoveFromWishlist();
            }}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isWish ? "currentColor" : "rgb(86 86 86 / 0.7)"}
                aria-hidden="true"
                className="w-6 h-6 stroke-white stroke-2"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
              </svg>
            </span>
          </button>
        )}
        {isMyListing && (
          <button
            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xl font-medium uppercase text-gray-500 bg-white transition-all hover:bg-black hover:text-white active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={(e)=> {
              e.stopPropagation();
              handleDelete();
            }}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <AiFillDelete></AiFillDelete>
            </span>
          </button>
        )}
      </div>
      <div className="w-full flex mt-2 mb-1">
        <h5 className="w-3/4 whitespace-nowrap text-ellipsis overflow-clip text-lg font-medium text-blue-gray-900">
          {data.title}
        </h5>
        <p className="w-1/4 flex items-center justify-end gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="-mt-0.5 h-4 w-4 text-yellow-300"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          {getRandomFloat(3,5,1)}
        </p>
      </div>
      <p className="block text-gray-700">{data.locationData?.place}</p>
      <p className="block text-gray-700">
        <span className="font-bold">${data.price}</span> noche
      </p>
      <div className="inline-flex flex-wrap items-center gap-2 mt-3 group">
        {data.placeAmeneties?.map((amenity) =>
          AmenetiesType.map((a) =>
            a.data.map((icon) => {
              if (icon.name === amenity && counter < 4) {
                counter = counter + 1;
                return (
                  <span
                    key={amenity}
                    title={amenity}
                    className="w-9 h-9 p-1 rounded-full border border-pink-500/5 bg-pink-500/5 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                  >
                    {icon.svgPath}
                  </span>
                );
              } else if (icon.name === amenity && counter === 4) {
                counter = counter + 1;
                const restingAmenities = data.placeAmeneties.length - 4;
                return (
                  <span
                    key="more"
                    title={`And ${restingAmenities} more`}
                    className="w-9 h-9 p-1 rounded-full border border-pink-500/5 bg-pink-500/5 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                  >
                    +{restingAmenities}
                  </span>
                );
              }
            })
          )
        )}
      </div>
    </div>
  );
};

export default ListingCard;
