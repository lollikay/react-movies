import { useGetTopRatedMoviesQuery } from "../../services/movies.js";
import Loader from "../loader";
import {MoviesList} from "../moviesList";

export default function TopRated(props) {
  const { qty } = props
  const { data, error, isLoading } = useGetTopRatedMoviesQuery();

  return (
    <section className="min-h-50 mb-10 lg:mb-20">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <Loader/>
        ) : data ? (
          <>
            <header>
              <h2 className="text-2xl font-bold text-gray-900">
                Top {qty} best rated movies
              </h2>
            </header>
            <MoviesList movies={data.results.slice(0, qty)}/>
          </>
        ) : null}
    </section>
  )
}