import { Disclosure } from '@headlessui/react';
import { useGetMoviesByTitleQuery } from "../../services/movies.js";
import {useState} from "react";
import {getYearFromString} from "../../js/utils/getYearFromString.js";

export const MoviesSearchForm = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [skip, setSkip] = useState(true);
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if(e.target.value.length > 3) {
      setSkip(false);
    }
  }
  const { data, error, isLoading } = useGetMoviesByTitleQuery(searchQuery, {
    skip
  });

  const handleFormSubmit = (e) => {
    if(searchQuery.length < 3) {
      e.preventDefault();
    }
  }

  return (
    <form action="/search" name="search-by-title" className="w-80" onSubmit={handleFormSubmit}>
      <Disclosure as="div" className="flex relative">
        {({ open }) => (
          <>
            <div className="grid grid-cols-4 gap-2">
            <label className="hidden" htmlFor="search-by-title-title">Search movie by title</label>
            <Disclosure.Button className="col-span-3">
              <input type="search"
                     name="title"
                     id="search-by-title-title"
                     className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500"
                     placeholder="Search by movie title"
                     value={searchQuery}
                     onChange={(e) => handleInputChange(e)}
              />
            </Disclosure.Button>
              <div className="col-span-1">
                <button type="submit"
                        className="flex w-full justify-center items-center py-2 px-4 lg:px-6 rounded-md bg-pink-500 text-white hover:bg-pink-700 transition-colors"
                >Search!</button>
              </div>
            </div>
            {!skip && (
              <Disclosure.Panel className="absolute top-full left-0 right-0 bg-white rounded-md p-4">
                {data && data.results && (
                  <ul>
                    {data.results.slice(0, 4).map((movie) => {
                      return (
                        <li key={movie.title}>
                          <a href={`/movie/${movie.id}`} className="hover:text-rose-400">
                            {movie.title}, {getYearFromString(movie.release_date)}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>
    </form>
  )
}