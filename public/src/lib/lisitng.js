import { createUrl, post } from "./http"

export const createListingApi = async (listingData) => {
    const result = (await post(createUrl("/api/listings"), {
        ...listingData
    })).catch(() => null)?.data;

    if (!result.data) {
        return alert("Could not create listing");
    }
    return result;
}