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

  return (
    <form action="" name="search-by-title" className="w-80">
      <Disclosure as="div" className="flex relative">
        {({ open }) => (
          <>
            <label className="hidden" htmlFor="search-by-title-title">Search movie by title</label>
            <Disclosure.Button className="w-full">
              <input type="search"
                     name="search-by-title-title"
                     id="search-by-title-title"
                     className="block w-full rounded-md focus:border-pink-500 focus:ring-pink-500"
                     placeholder="Search by movie title"
                     value={searchQuery}
                     onChange={(e) => handleInputChange(e)}
              />
            </Disclosure.Button>
            {!skip && (
              <Disclosure.Panel className="absolute top-full min-w-max bg-white rounded-md p-4">
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