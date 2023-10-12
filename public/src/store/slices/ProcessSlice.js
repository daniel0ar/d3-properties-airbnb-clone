export const createProcessSlice = (set, get) => ({
    locationType: undefined,
    placeType: undefined,
    mapData: undefined,
    locationData: undefined,
    setLocationType: (locationType) => set({locationType}),
    setPlaceType: (placeType) => set({placeType}),
    setMapData: (mapData) => set({mapData}),
    setLocationData: (locationData) => set({locationData}),
});