export const createProcessSlice = (set, get) => ({
    locationType: undefined,
    placeType: undefined,
    mapData: undefined,
    locationData: undefined,
    placeSpace: { bathrooms: 1, beds:1, guests: 4 },
    setLocationType: (locationType) => set({locationType}),
    setPlaceType: (placeType) => set({placeType}),
    setMapData: (mapData) => set({mapData}),
    setLocationData: (locationData) => set({locationData}),
    setPlaceSpace: (placeSpace) => set({placeSpace})
});