import Rating from "../Rating";
import { useGetGenresQuery, useGetMoviesConfigQuery } from "../../services/movies.js";
import { Link } from "react-router-dom";
import { getYearFromString } from "../../js/utils/getYearFromString.js";

export default function MoviesItem(props) {
  const { movie, className } = props;
  const { id, title, release_date, vote_average, poster_path, genre_ids, vote_count } = movie;
  const movieYear = getYearFromString(release_date);
  const { data: moviesCfg, error: moviesCfgError, isLoading: moviesCfgIsLoading } = useGetMoviesConfigQuery();
  const imagePath = moviesCfg ? (moviesCfg.images.base_url + "w500/" + poster_path) : null;
  const { data: genres, error: genresError, isLoading: genresIsLoading } = useGetGenresQuery();
  const movieGenres = (genres && genre_ids) ?
    genre_ids.map((id) => genres.genres.find((item) => item.id === id).name)
                            .filter((id) => typeof id !== "undefined")
                            .join(", ")
    : "";
  const movieDetailsLink = `/movie/${id}`;

  return (
      <figure className={`flex flex-col h-full bg-white rounded-md overflow-hidden ${className}`}>
        <Link className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
          to={movieDetailsLink}
        >
          {imagePath && (
            <img src={imagePath}
                alt={`Image for the movie ${title}`}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                width="280"
                height="320"
                loading="lazy"
            />
          )}
        </Link>
        <figcaption className="flex-grow flex flex-col p-4">
          <h3 className="text-lg text-gray-700 mb-2">
            <Link to={movieDetailsLink} className="hover:text-rose-400">
              {title}
            </Link>
          </h3>
          {movieYear && (
            <p className="text-sm text-gray-500 mb-1">Year: {movieYear}</p>
          )}
          <p className="text-sm text-gray-500 mb-3">
            Genre: {movieGenres}
          </p>
          <p className="mt-auto text-gray-500">
            <Rating value={vote_average} count={vote_count}></Rating>
          </p>
        </figcaption>
      </figure>
  )
}