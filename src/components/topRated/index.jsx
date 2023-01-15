import { useGetTopRatedMoviesQuery } from "../../services/movies.js";
import Loader from "../loader";
import MoviesItem from "../moviesItem";

export default function TopRated(props) {
  const { qty } = props
  const { data, error, isLoading } = useGetTopRatedMoviesQuery();

  return (
    <section className="min-h-50">
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
            <ul className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.results.slice(0, qty).map((movie) => {
                const { id, title, release_date, vote_average } = movie;
                return (
                  <li key={id} className="group relative rounded-md">
                    <MoviesItem movie={movie} />
                  </li>
              )})}
            </ul>
          </>
        ) : null}
    </section>
  )
}