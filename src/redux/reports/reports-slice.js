import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryName: '',
  storeDate: '',
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    categoryChange: (state, { payload }) => {
      console.log('state.categoryChange: ', state.categoryChange);
      console.log('categoryChange payload: ', payload);
      state.categoryName = payload;
    },
    dateChange: (state, { payload }) => {
      console.log('state.realDate: ', state.realDate);
      console.log('dateChange payload: ', payload);
      state.storeDate = payload;
    },
  },
});

export const { categoryChange, dateChange } = reportsSlice.actions;
export default reportsSlice.reducer;
