import { Header } from "../components/Header/index.jsx";
import MoviesFilterResults from "../components/MoviesFilterResults";
import { MoviesFilter } from "../components/MoviesFilter/index.jsx";
import {useSearchParams} from "react-router-dom";
import {paramsToObject} from "../js/utils/paramsToObject.js";
import {useEffect} from "react";
import {setFilter} from "../store/features/moviesFilter/index.js";
import {useDispatch, useSelector} from "react-redux";

export default function Movies(props) {
  const { filter, error: filterError } = useSelector(state => state.moviesFilter);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const filterFromParams = paramsToObject(searchParams);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setFilter(filterFromParams));
  // }, [ searchParams ])

  return (
    <>
      <Header>List of movies</Header>
      <main>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
          <MoviesFilter filters={filter}/>
          <MoviesFilterResults filters={filter}/>
        </div>
      </main>
    </>
  )
}