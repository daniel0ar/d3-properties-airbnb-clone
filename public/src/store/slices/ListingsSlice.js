export const createListingSlice = (set, get) => ({
    listings: [],
    isMapView: false,
    setListings: (listings) => set({ listings }),
    setIsMapView: () => set({ isMapView: ! get().isMapView }),
});