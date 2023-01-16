import { useSelector } from "react-redux";
import TopRatedMovies from "../components/TopRatedMovies/index.jsx";
import { Header } from "../components/Header";
import { MoviesFilterSection } from "../components/MoviesFilterSection";

export default function Home() {
  const state = useSelector(state => state);
  // console.debug(state);

  return (
    <>
      <Header>Welcome to WMDB (wonderful movies database)!</Header>
      <main>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
          <TopRatedMovies qty="8"></TopRatedMovies>
          <MoviesFilterSection/>
        </div>
      </main>
    </>
  )
}
