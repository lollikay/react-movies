import { configureStore } from '@reduxjs/toolkit'
import appReducer from './features/app';
import { moviesApi } from "../services/movies.js";
import moviesFilterReducer from "./features/moviesFilter";

export const store = configureStore({
  reducer: {
    app : appReducer,
    moviesFilter: moviesFilterReducer,
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
})

export default store;