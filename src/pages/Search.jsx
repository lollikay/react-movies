import { useGetMoviesByTitleQuery} from "../services/movies.js";
import {useState} from "react";
import Loader from "../components/Loader/index.jsx";
import {MoviesList} from "../components/MoviesList/index.jsx";
import {useSearchParams} from "react-router-dom";
import {paramsToObject} from "../js/utils/paramsToObject.js";
import {SearchForm} from "../components/SearchForm";

export default function Search(props) {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const queryFromParams = paramsToObject(searchParams);
  const [searchQuery, setSearchQuery] = useState(queryFromParams.title || "");
  const { data: searchResult, error: searchResultError, isLoading: searchResultIsLoading } = useGetMoviesByTitleQuery(searchQuery, {
    skip: searchQuery.length < 2
  });

  return (
    <>

      <main>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
          <SearchForm query={searchQuery}/>
          {searchResultError ? (
            <>Oh no, there was an error</>
          ) : searchResultIsLoading ? (
            <Loader/>
          ) : searchResult ? (
            <section>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Search results
              </h1>
                  {searchResult.results.length > 0 ? (
                    <MoviesList movies={searchResult.results}/>
                  ) : (
                    <p>
                      No results found for your query
                    </p>
                  )}
            </section>
          ) : null}
        </div>
      </main>
    </>
  )
}