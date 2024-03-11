import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../action';

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const updatedSlice = createSlice({
  name: 'updated',
  initialState,
  // thunk aksiyonun çalıştırdğı "pending / fufilled / rejected"
  // erişmek ve bu askiyonların state günceleyyeceğini söylemek içib
  // extraReducers kullanılmalı
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default updatedSlice.reducer;