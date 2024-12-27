import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// Define the initial state for the login slice
const initialState = {
    account_id:null,
    userName: null,
    email: null,
    accountId: null,
    isAuthenticated: false,
    loading: false,
    error: null
};


// Create the login slice
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // Start the login process
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        // Handle successful login
        loginSuccess(state, action) {
            console.log('Login success1111111111: ', state);
            state.loading = false;
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.accountId = action.payload.accountId;
            state.userName = action.payload.userName;
        
        },
        // Handle login failure
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        // Handle logout
        logout(state) {
            state.isAuthenticated = false;
            state.email = null;
            state.userName = null;
            state.accountId = null;

        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            return {
                ...state,
                ...action.payload.login,
            };
        });
    },
});

// Export actions and reducer
export const { loginStart, loginSuccess, loginFailure, logout } = loginSlice.actions;
export default loginSlice.reducer;


