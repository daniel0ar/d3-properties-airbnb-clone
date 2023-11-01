export const createListingSlice = (set, get) => ({
    listings: [],
    isMapView: false,
    userListings: [],
    setListings: (listings) => set({ listings }),
    setIsMapView: () => set({ isMapView: ! get().isMapView }),
    setUserListings: (userListings) => set({ userListings }),
});