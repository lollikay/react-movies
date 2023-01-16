import { Header } from "../components/Header/index.jsx";
import MoviesFilterResults from "../components/MoviesFilterResults";
import {MoviesFilter} from "../components/MoviesFilter/index.jsx";

export default function Movies(props) {

  return (
    <>
      <Header>List of movies</Header>
      <main>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
          <MoviesFilter/>
          <MoviesFilterResults/>
        </div>
      </main>
    </>
  )
}