import { useSelector } from "react-redux";
import { useGetGenresQuery } from "../../services/movies.js";

export const MoviesFilter = (props) => {
  const { filter, error } = useSelector(state => state.moviesFilter);
  const currentFilter = {
    ...filter,
    year: props.year || null,
    rating: props.rating || null,
    genre: props.genre || null
  }
  const { data: genres, error: genresError, isLoading: genresIsLoading } = useGetGenresQuery();
  const formName = `movies-filter-form`

  return (
    <>
      <form action="" className="w-full bg-white rounded-md p-6 mb-8" name={formName} id={formName}>
        <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">Search by title:</span>
            <input type="search"
                   name={`${formName}-title`}
                   className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500"
            />
          </label>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">Filter by release year:</span>
            <input type="text"
                   defaultValue={currentFilter.year || ""}
                   placeholder={new Date().getFullYear().toString()}
                   maxLength="4"
                   name={`${formName}-year`}
                   className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500"
            />
          </label>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">Choose genre:</span>
            <select name={`${formName}-genre`}
                    placeholder="Select one"
                    defaultValue={currentFilter.genre || ""}
                    className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">Choose genre</option>
              {genres && genres.genres.map((genre, index) => (
                <option key={`filter-genre-${index}`} value={genre.id}>{genre.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">Filter by rating:</span>
            <input type="text"
                   defaultValue={currentFilter.rating || ""}
                   name={`${formName}-rating`}
                   placeholder="8"
                   className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500"
                   maxLength="4"
            />
          </label>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <span className="hidden sm:block mb-2 text-sm font-medium text-gray-700">&nbsp;</span>
          <button type="submit"
                  className="flex w-full justify-center items-center py-2 px-4 lg:px-6 rounded-md bg-pink-500 text-white hover:bg-pink-700 transition-colors"
          >Search!</button>
        </div>
        </div>
      </form>
    </>
  )
}