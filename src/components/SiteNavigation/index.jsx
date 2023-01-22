import {NavLink} from "react-router-dom";
import {getClassNames} from "../../js/utils/getClassNames.js";
import { SearchFormWHints } from "../SearchFormWHints/index.jsx";
import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline/index.js";

export const SiteNavigation = (props) => {
  const { routes } = props;

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({open}) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex w-full items-center">
                <div className="hidden lg:block">
                  <ul className="flex items-baseline space-x-4">
                    {routes.map(({name, path}) => {
                      return (
                        <li key={path}>
                          <NavLink className={({isActive}) => {
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
                <div className="hidden lg:block ml-auto">
                  <SearchFormWHints/>
                </div>
                <div className="-mr-2 flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <ul className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {routes.map(({name, path}) => {
                return (
                  <li key={path}>
                    <NavLink className={({isActive}) => {
                      return getClassNames(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      )
                    }}
                             to={path}
                    >
                      <Disclosure.Button
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
  )
}