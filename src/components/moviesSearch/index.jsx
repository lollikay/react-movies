import Loader from "../loader/index.jsx";

export const MoviesSearch = (props) => {
  const { className } = props;

  return (
    <section className={`mb-10 lg:mb-20 ${className}`}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader/>
      ) : data ? (
        <>
          <header>
            <h2 className="text-2xl font-bold text-gray-900">
              Find a movie to your liking
            </h2>
          </header>
          <MoviesFilter/>
        </>
      ) : null}
    </section>
  )
}