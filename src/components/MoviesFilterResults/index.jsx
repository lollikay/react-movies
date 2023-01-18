import {useGetFilteredMoviesQuery} from "../../services/movies.js";
import Loader from "../Loader";
import {MoviesList} from "../MoviesList";

export default function MoviesFilterResults(props) {
  const { filters } = props
  const { data, error, isLoading } = useGetFilteredMoviesQuery(filters);

  return (
    <section className="min-h-50 mb-10 lg:mb-20">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader/>
      ) : data ? (
        <>
          <MoviesList movies={data.results}/>
        </>
      ) : null}
    </section>
  )
}