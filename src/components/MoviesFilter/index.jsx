import { useDispatch, useSelector } from "react-redux";
import { useGetGenresQuery } from "../../services/movies.js";
import { setFilter } from "../../store/features/moviesFilter/index.js";
import { writeToLocalStorage } from "../../js/utils/writeToLocalStorage.js";
import { movieFilters } from "../../configs/localStorageVars.js";
import {useState} from "react";

export const MoviesFilter = (props) => {
  const { filters } = props;
  const { data: genres, error: genresError, isLoading: genresIsLoading } = useGetGenresQuery();
  const formName = "movies-filter-form";
  const dispatch = useDispatch();

  const [currentFilter, setCurrentFilter] = useState(filters);

  const handleInputChange = (e, filterName) => {
    // console.debug(e)
    const { target } = e;
    setCurrentFilter((state) => {
      return {
        ...state,
        [filterName]: target.value
      }
    })
  }

  const saveFilterValues = () => {
    Object.entries(currentFilter).forEach(([ key, value ]) => {
      writeToLocalStorage(movieFilters[key], value);
    })
  }

  const handleFormSubmit = (e) => {
    saveFilterValues();
    dispatch(setFilter(currentFilter));
  }

  return (
    <>
      <form action="/movies"
            className="w-full bg-white rounded-md p-6 mb-8"
            name={formName}
            id={formName}
            onSubmit={handleFormSubmit}
      >
        <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">Filter by release year:</span>
            <input type="text"
                   value={currentFilter.year || ""}
                   placeholder={new Date().getFullYear().toString()}
                   maxLength="4"
                   name={`year`}
                   className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500 placeholder:text-slate-400"
                   onChange={(e) => handleInputChange(e, "year")}
            />
          </label>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <label>
            <span className="block mb-2 text-sm font-medium text-gray-700">Choose genre:</span>
            <select name={`genre`}
                    placeholder="Select one"
                    value={currentFilter.genre || ""}
                    className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500 placeholder:text-slate-400"
                    onChange={(e) => handleInputChange(e, "genre")}
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
                   value={currentFilter.rating || ""}
                   name={`rating`}
                   placeholder="8"
                   className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500 placeholder:text-slate-400"
                   maxLength="4"
                   onChange={(e) => handleInputChange(e, "rating")}
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