import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null,
        authenticated: false
    },
    reducers: {
        login: (state, action) => {
          state.status = 'login';
          state.uid = action.payload.uid;
          state.displayName = action.payload.displayName;
          state.photoUrl = action.payload.photoUrl;
          state.authenticated = true; // agregado
        },
        logout: (state) => {
          state.status = 'logout';
          state.uid = null;
          state.displayName = null;
          state.photoUrl = null;
          state.authenticated = false; // agregado
        },
        register: (state, action) => {
          state.email = action.payload.email;
          state.authenticated = true; // agregado
        },
        checkingCredentials: (state, action) => {
          console.log('checking');
        }
      }
      
})

export const { login, logout, register, checkingCredentials, authenticated } = authSlice.actions