import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import updatedSlice from './slices/updatedSlice';

export default configureStore({
  reducer: { userSlice, updatedSlice },
});