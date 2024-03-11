import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = true;
    },

    setError: (state, action) => {
      state.isError = true;
      state.isLoading = false;
    },

    setUsers: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },
  },
});

export const { setLoading, setError, setUsers } = userSlice.actions;
export default userSlice.reducer;