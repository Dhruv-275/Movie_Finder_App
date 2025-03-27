import { createSlice } from "@reduxjs/toolkit";

 const initialState = [];

const favouriteSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addToFav: (state, action) => {

      const existingMovie = state.find((movie) => movie.imdbID === action.payload.imdbID );

      if (!existingMovie) {

        state.push(action.payload);
      }
    
    },

    removeFromFav: (state, action) => {
      return state.filter((movie) => movie.imdbID !== action.payload);
    },
  },
});

export const { addToFav, removeFromFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;
