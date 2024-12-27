import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import cogoToast from "@hasanm95/cogo-toast";

const initialState = {
  user:[],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   setUser(state,action){

   },
   
    setError(state, action) {
      state.error = action.payload;
    },
    resetUserState(state) {
      Object.assign(state, initialState);
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    });
  },
});

export const { setUserField, setError, resetUserState, setNationalImageFront, setNationalImageBack } = userSlice.actions;
export default userSlice.reducer;
