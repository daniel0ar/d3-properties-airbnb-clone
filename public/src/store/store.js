import { create } from 'zustand';
import { createAuthSlice } from './slices/AuthSlice';
import { createProcessSlice } from './slices/ProcessSlice';

export const useAppStore = create()((...a) => ({
    ...createAuthSlice(...a),
    ...createProcessSlice(...a),
}));