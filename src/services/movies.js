import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey } from "./apiKey.js";

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints: (builder) => ({
    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?${apiKey}`,
    }),
    getMoviesByGenre: builder.query({
      query: ({genreId}) => `discover/movie?${apiKey}&with_genres=${genreId}`
    }),
    getMoviesByYear: builder.query({
      query: (year) => `discover/movie?${apiKey}&year=${year}`
    }),
    getMoviesByRating: builder.query({
      query: (rating) => `discover/movie?${apiKey}&vote_average.gte=${rating}`
    }),
    getMoviesByTitle: builder.query({
      query: (title) => `search/movie?${apiKey}&query=${rating}`
    }),
    getMoviesConfig: builder.query({
      query: () => `configuration?${apiKey}`
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?${apiKey}`
    }),
    getMovieById: builder.query({
      query: (id) => `movie/${id}?${apiKey}`
    })
}),
})

export const {
  useGetTopRatedMoviesQuery,
  useGetMoviesByGenreQuery,
  useGetMoviesByYearQuery,
  useGetMoviesByRatingQuery,
  useGetMoviesByTitleQuery,
  useGetMoviesConfigQuery,
  useGetGenresQuery,
  useGetMovieByIdQuery
} = moviesApi