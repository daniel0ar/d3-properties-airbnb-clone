import qs from "qs";
import { createUrl, post, get } from "./http"

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