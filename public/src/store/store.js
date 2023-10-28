import { create } from 'zustand';
import { createAuthSlice } from './slices/AuthSlice';
import { createProcessSlice } from './slices/ProcessSlice';
import { createListingSlice } from './slices/ListingsSlice';

export const useAppStore = create()((...a) => ({
    ...createAuthSlice(...a),
    ...createProcessSlice(...a),
    ...createListingSlice(...a),
}));