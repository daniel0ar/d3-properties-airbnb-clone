import qs from "qs";
import { createUrl, post, get, del } from "./http"

export const createListingApi = async (listingData) => {
    let result = null;
    let errorMessage = '';
    post(createUrl("/api/listings"), {
        ...listingData
    }).then(res => {
        result = res;
        return res
    }).catch(err => {
        errorMessage = err;
        console.log(errorMessage);
        return err
    });
}

export const getAllListingsAPI = async () => {
    
    const result = await get((createUrl(`/api/listings`)));

    if (!result) {
        alert("Could not get all listings!");
        return [];
    }
    return result.data;
};

export const getUserListings = async (userId) => {
    const query = qs.stringify({
        where: {listingCreatedBy: {id: userId}},
    });

    const result = await get(createUrl(`/api/listings?${query}`));
    if (!result) {
        alert('Could not get your listings!')
        return [];
    }
    return result.data;
};

export const deleteListingAPI = async (id) => {
    const result = await del(createUrl(`/api/listings/${id}`));
    if (!result) {
        alert("Could not delete listing");
    }
    return result;
}

export const getUserWishlists = async (userId) => {
    const query = qs.stringify({
        where:{
            user: { id: userId },
        },
        select: {
            listing: true,
        },
    });
    const result = await get(createUrl(`api/wishlists?${query}`));
    return result?.data; 
}

export const addToWishlistAPI = async (id, userId) => {
    const query = {
        listing: { id },
        user: { id: userId },
    };

    const result = await post(createUrl("api/wishlists"), {...query});

    if (!result.data) {
        alert("Could not add to wishlist");
    }
    return result.data;
}

export const removeFromWishlistAPI = async (id) => {
    const result = await del(createUrl(`api/wishlists/${id}`));
    if (!result) {
        alert("Could not remove listing from wishlist");
    }
    return result;
}