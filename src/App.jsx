import { Provider } from 'react-redux'
import {NavLink, Route, Routes} from 'react-router-dom';
import appStore from '@store';
import "/src/styles/index.css";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { getClassNames } from "./js/utils/getClassNames.js";
import Movie from "./pages/Movie.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import {MoviesSearchForm} from "./components/MoviesSearchForm";

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

export function App({ store = appStore }) {
  return (
    <Provider store={store}>
      <div className="min-h-full flex flex-col">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex w-full items-center">
                    <div className="hidden md:block">
                      <ul className="flex items-baseline space-x-4">
                        {routes.map(({ name, path }) => {
                          return (
                            <li key={path}>
                              <NavLink className={({ isActive }) => {
                                  return getClassNames(
                            "px-3 py-2 rounded-md text-sm font-medium",
                                    isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                  )
                                }}
                                to={path}
                              >
                                {name}
                              </NavLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div className="hidden md:block ml-auto">
                      <MoviesSearchForm />
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <ul className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {routes.map(({ name, path }) => {
                    return (
                      <li key={path}>
                        <NavLink className={({ isActive }) => {
                          return getClassNames(
                        "block px-3 py-2 rounded-md text-base font-medium",
                                isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                              )
                            }}
                          to={path}
                        >
                          <Disclosure.Button
                            key={name}
                            as="span"
                          >
                            {name}
                          </Disclosure.Button>
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
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
