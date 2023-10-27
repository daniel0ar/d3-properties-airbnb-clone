import { createUrl, post } from "./http"

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