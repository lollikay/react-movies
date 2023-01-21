import * as toolkitRaw from '@reduxjs/toolkit/dist/query/react/index';
const { createApi } = toolkitRaw.default ?? toolkitRaw;
import * as rtk2 from '@reduxjs/toolkit/dist/query/react/index';
const { fetchBaseQuery } = rtk2.default ?? rtk2;
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
      query: ({genre = "", year = "", rating = ""}) => {
        const genreParam = genre ? `&with_genres=${genre}` : "";
        const yearParam = year ? `&primary_release_year=${year}` : "";
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
  useGetFilteredMoviesQuery,
  useGetMoviesConfigQuery,
  useGetGenresQuery,
  useGetMovieByIdQuery,
  useGetMoviesByTitleQuery
} = moviesApi