import { useSelector } from "react-redux";
import TopRated from "../components/topRated/index.jsx";
import {Header} from "../components/header";

export default function Home() {
  const state = useSelector(state => state);
  // console.debug(state);

  return (
    <>
      <Header>Welcome to WMDB (wonderful movies database)!</Header>
      <main>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
          <TopRated qty="8"></TopRated>



        </div>
      </main>
    </>
  )
}
