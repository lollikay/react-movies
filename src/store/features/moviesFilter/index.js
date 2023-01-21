import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
import { getFromLocalStorage } from "../../../js/utils/getFromLocalStorage.js";
import { movieFilters } from "../../../configs/localStorageVars.js";

const initialState = {
  error: null,
  filter: {
    year: getFromLocalStorage(movieFilters.year),
    rating: getFromLocalStorage(movieFilters.rating),
    genre: getFromLocalStorage(movieFilters.genre)
  }
}

export const moviesFilterSlice = createSlice({
  name: 'moviesFilter',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = {
        ...state.filter,
        ...action.payload
      }
    }
  },
})

export const { setError, setFilter } = moviesFilterSlice.actions
export default moviesFilterSlice.reducer