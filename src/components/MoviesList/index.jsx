import MoviesItem from "../MoviesItem/index.jsx";

export const MoviesList = (props) => {
  const { movies } = props;

  return (
    <ul className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {movies.map((movie) => {
        const { id } = movie;
        return (
          <li key={id} className="group relative rounded-md">
            <MoviesItem movie={movie} />
          </li>
        )})}
    </ul>
  )
}