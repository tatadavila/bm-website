// @vendorss
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {},
});

//export const {} = dataSlice.actions;

export default dataSlice.reducer;
