import { MoviesFilter } from "../MoviesFilter/index.jsx";

export const MoviesFilterSection = (props) => {
  const { className } = props;

  return (
    <section className={`mb-10 lg:mb-20 ${className}`}>
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Find a movie to your liking
        </h2>
      </header>
      <MoviesFilter/>
    </section>
  )
}