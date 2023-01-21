import { Header } from "../components/Header/index.jsx";

export default function Info() {
  return (
    <>
      <Header>
        Useful information to answer smart questions
      </Header>
      <main>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 xl:py-8">
          <div className="prose">
            <h2>
              Dependency injection
            </h2>
            <dl>
              <dt>
                <strong>Dependency injection</strong> &mdash;
              </dt>
              <dd className="ml-6">
                is a design pattern in which an object or function receives other objects or functions that
                it depends on.
              </dd>
            </dl>
            <p>
              The pattern ensures that an object or function which wants to use a given service should
              not have to know how to construct those services. Instead, the receiving 'client' (object or function)
              is provided with its dependencies by external code (an 'injector'), which it is not aware of.
            </p>
            <p className="text-lg">
              Fundamentally, dependency injection consists of passing parameters to a method.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
