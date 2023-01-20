import {Header} from "../components/Header/index.jsx";
import TopRatedMovies from "../components/TopRatedMovies/index.jsx";
import {MoviesFilterSection} from "../components/MoviesFilterSection/index.jsx";

export default function About() {
  return (
    <>
      <Header>
        About the <span className="text-rose-400">W</span>onderful <span className="text-rose-400">M</span>ovie <span className="text-rose-400">D</span>ata<span className="text-rose-400">B</span>ase
      </Header>
      <main>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
          <div className="prose">
            <p>
              This simple website was created using:
            </p>
            <ul>
              <li>React</li>
              <li>React Router for handling different "pages"</li>
              <li>Redux with RTK for storing data</li>
              <li>Tailwind for making things a bit ore stylish</li>
              <li>The Movie Database API</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
