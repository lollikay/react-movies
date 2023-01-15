import { useSelector } from "react-redux";
import TopRated from "../components/topRated/index.jsx";
import {Header} from "../components/header";

export default function Home() {
  const state = useSelector(state => state);
  console.debug(state);

  return (
    <>
      <Header>Welcome to WMDB (wonderful movies database)!</Header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <TopRated qty="8"></TopRated>

          <h2>
            Find a movie to watch:
          </h2>
          <form action="">
            <div>
              <label>
                <span>Search by title:</span>
                <input type="search"/>
              </label>
            </div>
            <div>
              <label>
                <span>Choose Year</span>
                <select name="" id="">
                  <option value="">Select one</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <span>Choose genre</span>
                <select name="" id="">
                  <option value="">Select one</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <span>Choose rating</span>
                <select name="" id="">
                  <option value="">Select one</option>
                </select>
              </label>
            </div>
            <div>
              <button type="submit">Search!</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
