import {useGetFilteredMoviesQuery} from "../../services/movies.js";
import Loader from "../Loader";
import {MoviesList} from "../MoviesList";
import {useSelector} from "react-redux";

export default function MoviesFilterResults(props) {
  const { filter, error: filterError } = useSelector(state => state.moviesFilter);
  const { data, error, isLoading } = useGetFilteredMoviesQuery(filter);

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