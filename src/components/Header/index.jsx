export const Header = (props) => {
  const { children, className } = props;

  return (
    <header className={`${className}`}>
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 lg:pt-14">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {children}
        </h1>
      </div>
    </header>
  )
}