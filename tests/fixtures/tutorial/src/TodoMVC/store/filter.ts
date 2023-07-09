import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum VisibilityFilters {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
}

export const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VisibilityFilters.ALL,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<VisibilityFilters>) {
      return action.payload;
    },
  },
});

export const filterActions = filtersSlice.actions;
