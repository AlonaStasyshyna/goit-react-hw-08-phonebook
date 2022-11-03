import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.user = {
        name: '',
        email: '',
      };
      state.token = null;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
