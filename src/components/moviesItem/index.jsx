import Rating from "../rating";
import { useGetGenresQuery, useGetMoviesConfigQuery } from "../../services/movies.js";

export default function MoviesItem(props) {
  const { movie, className } = props;
  const { id, title, release_date, vote_average, poster_path, genre_ids } = movie;
  const movieYear = release_date ? new Date(release_date)?.getFullYear() : "";
  const { data: moviesCfg, error: moviesCfgError, isLoading: moviesCfgIsLoading } = useGetMoviesConfigQuery();
  const imagePath = moviesCfg ? (moviesCfg.images.base_url + "w500/" + poster_path) : null;
  const { data: genres, error: genresError, isLoading: genresIsLoading } = useGetGenresQuery();
  const movieGenres = (genres && genre_ids) ?
    genre_ids.map((id) => genres.genres.find((item) => item.id === id).name)
                            .filter((id) => typeof id !== "undefined")
                            .join(", ")
    : "";

  return (
      <figure className={`flex flex-col h-full ${className}`}>
        <a className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
          href="#"
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
        </a>
        <figcaption className="mt-4 flex-grow flex flex-col">
          <h3 className="text-gray-700">
            <a href="#">
              {title}
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-500">Year: {movieYear}</p>
          <p className="mt-1 text-sm text-gray-500">
            Genre: {movieGenres}
          </p>
          <p className="mt-auto text-gray-500">
            <Rating value={vote_average} className="mt-2"></Rating>
          </p>
        </figcaption>
      </figure>
  )
}