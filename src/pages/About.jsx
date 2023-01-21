import {Header} from "../components/Header/index.jsx";

export default function About() {
  return (
    <>
      <Header>
        About the <span className="text-pink-400">W</span>onderful <span className="text-pink-400">M</span>ovie <span className="text-pink-400">D</span>ata<span className="text-pink-400">B</span>ase
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
              <li>Tailwind for making things a bit more stylish</li>
              <li>The Movie Database API</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
