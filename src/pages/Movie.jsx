import { useParams } from "react-router-dom";
import { Header } from "../components/Header/index.jsx";
import Loader from "../components/Loader/index.jsx";
import {useGetMovieByIdQuery, useGetMoviesConfigQuery} from "../services/movies.js";
import {getClassNames} from "../js/utils/getClassNames.js";
import {getYearFromString} from "../js/utils/getYearFromString";
import ErrorPage from "./ErrorPage";
import {Video} from "../components/Video";

export default function Movie(props) {
  const { className } = props;
  let { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId);

  let characteristics = data ? {
    "Year": getYearFromString(data.release_date),
    "Rating": data.vote_average + " (based on " + data.vote_count + " votes)",
    "Genres": data.genres.map((genre) => genre.name).join(", ")
  } : {};

  const { data: moviesCfg, error: moviesCfgError, isLoading: moviesCfgIsLoading } = useGetMoviesConfigQuery();
  const imagePath = moviesCfg && data ? (moviesCfg.images.base_url + "w500/" + data.poster_path) : null;

  return (
    <article className={className}>
      {error ? (
        <>
          <ErrorPage />
        </>
      ) : isLoading ? (
        <Loader/>
      ) : data ? (
        <>
          <Header>{data.title}</Header>
          <main>
            <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
              <div className="grid grid-cols-1 gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="md:col-span-1">
                  {imagePath && (
                    <img src={imagePath}
                         alt={`Image for the movie ${data.title}`}
                         className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                         width="500"
                         height="500"
                         loading="lazy"
                    />
                  )}
                </div>
                <div className="md:col-span-1 lg:col-span-2">
                  <p className="mb-8 text-gray-500">
                    {data.overview}
                  </p>
                  {characteristics && (
                    <dl>
                      {Object.entries(characteristics).map(([ key, value ], index) => {
                        return (
                          <div key={`movie-char-${index}`}
                               className={getClassNames("px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                 index % 2 === 0 ? "bg-gray-50" : "bg-white"
                               )}>
                            <dt className="text-sm font-medium text-gray-500">{key}</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{value}</dd>
                          </div>
                        )
                      })}
                    </dl>
                  )}
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <Video movieId={movieId} />
                </div>
              </div>
            </div>
          </main>
        </>
      ) : null}
    </article>
  )
}