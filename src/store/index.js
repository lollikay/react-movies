import { configureStore } from '@reduxjs/toolkit'
import appReducer from './features/app';
import { moviesApi } from "../services/movies.js";

export const store = configureStore({
  reducer: {
    app : appReducer,
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
})

export default store;