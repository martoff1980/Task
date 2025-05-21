import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  status: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

// Selectors

export const selectStatusFilter = (state) => state.filters.status;
