import { NavLink } from "react-router-dom";
import { Header } from "../components/Header";

export default function ErrorPage(props) {
  const { className = "" } = props;

  return (
    <div className={`flex-grow ${className}`}>
      <Header>WMDB Error</Header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <p>
            Yeah, not very wonderful. But you could go <NavLink className="text-rose-500" to="/">home</NavLink> anytime.
          </p>
        </div>
      </main>
    </div>
  )
}