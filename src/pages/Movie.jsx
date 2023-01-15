import { useParams } from "react-router-dom";
import { Header } from "../components/header/index.jsx";
import Loader from "../components/loader/index.jsx";
import { useGetMovieByIdQuery } from "../services/movies.js";
import {getClassNames} from "../js/utils/getClassNames.js";
import {getYearFromString} from "../js/utils/getYearFromString";
import {getYTVideoUrl} from "../js/utils/getYTVideoUrl.js";

export default function Movie(props) {
  const { className } = props;
  let { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId);

  let characteristics = data ? {
    "Year": getYearFromString(data.release_date),
    "Rating": data.vote_average,
    "Genres": data.genres.map((genre) => genre.name).join(", ")
  } : {};

  return (
    <article className={className}>
      {error ? (
        <>
          <main>
            <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
              Oh no, there was an error
            </div>
          </main>
        </>
      ) : isLoading ? (
        <Loader/>
      ) : data ? (
        <>
          <Header>{data.title}</Header>
          <main>
            <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
              <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                <div>
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
                <div className="relative">
                  <iframe width="560" height="315" src={getYTVideoUrl(movieId)}
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full aspect-video"
                  />
                </div>
              </div>
            </div>
          </main>
        </>
      ) : null}
    </article>
  )
}