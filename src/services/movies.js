import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tmdbApiKey } from "../configs/tmdbApiKey.js";

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints: (builder) => ({
    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?${tmdbApiKey}`,
    }),
    getFilteredMovies: builder.query({
      query: ({genreId = "", year = "", rating = ""}) => {
        const genreParam = genreId ? `&with_genres=${genreId}` : "";
        const yearParam = year ? `&year=${year}` : "";
        const ratingParam = rating ? `&vote_average.gte=${rating}` : "";
        return `discover/movie?${tmdbApiKey}${genreParam}${yearParam}${ratingParam}`
      }
    }),
    getMoviesByTitle: builder.query({
      query: (title) => `search/movie?${tmdbApiKey}&query=${title}`
    }),
    getMoviesConfig: builder.query({
      query: () => `configuration?${tmdbApiKey}`
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?${tmdbApiKey}`
    }),
    getMovieById: builder.query({
      query: (id) => `movie/${id}?${tmdbApiKey}`
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