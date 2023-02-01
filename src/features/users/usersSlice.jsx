import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const USER_URL = 'https://jsonplaceholder.typicode.com/users';
const initialState = [];

export const fetchUser = createAsyncThunk('/user/fetchUsers', async () => {
  const response = await axios.get(USER_URL);
  return response.data;
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const allUsers = (state) => state.users;

export default userSlice.reducer;
