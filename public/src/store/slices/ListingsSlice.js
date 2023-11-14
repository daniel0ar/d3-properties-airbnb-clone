export const createListingSlice = (set, get) => ({
    listings: [],
    isMapView: false,
    userListings: [],
    wishlists: [],
    wishlistsPage: [],
    currentListing: undefined,
    setListings: (listings) => set({ listings }),
    setIsMapView: () => set({ isMapView: ! get().isMapView }),
    setUserListings: (userListings) => set({ userListings }),
    removeUserListing: (listing) => {
        const listings = get().userListings;
        const index = listings.findIndex((list) => list.id === listing);
        if (index !== -1){
            listings.splice(index, 1);
        }
        set({ userListings: listings });
    },
    setWishlists: (wishlists) => set({ wishlists }),
    addToWishlist: (id) => {
        const lists = get().wishlists;
        lists.push(id);
        set({ wishlists: lists });
    },
    setWishlistsPage: (wishlistsPage) => set({ wishlistsPage }),
    setCurrentListing: (currentListing) => set({ currentListing }),
});