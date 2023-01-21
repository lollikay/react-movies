import { Provider } from 'react-redux'
import {Route, Routes} from 'react-router-dom';
import appStore from '@store';
import "/src/styles/index.css";
import Movie from "./pages/Movie.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import {SiteNavigation} from "./components/SiteNavigation/index.jsx";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.jsx', { eager: true })

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  }
})

const nav = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Info",
    path: "/info"
  },
  {
    name: "Lorem",
    path: "/lorem"
  },
  {
    name: "Movie List",
    path: "/movies"
  }
]

export function App({ store = appStore }) {
  return (
    <Provider store={store}>
      <div className="min-h-full flex flex-col">
        <SiteNavigation routes={nav}/>
        <Routes>
            {routes.map(({ path, component: RouteComp }) => {
              return <Route key={path} path={path} element={<RouteComp />} />
            })}
          <Route path="movie">
            <Route path=":movieId" element={<Movie />} />
            <Route index element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </Provider>
  )
}
