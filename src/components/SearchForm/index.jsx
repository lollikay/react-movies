import {Input} from "../Input/index.jsx";

export const SearchForm = (props) => {
  const { query } = props;

  return (
    <form action="/search" name="search-form" className="w-full mb-8">
      <div className="grid grid-cols-4 gap-2 gap-y-3 max-w-3xl">
        <label className="text-2xl col-span-4" htmlFor="search-form-title">Search movie by title:</label>
        <div className="col-span-3">
          <Input type="search"
                 name="title"
                 id="search-form-title"
                 placeholder="Enter title"
                 defaultValue={query}
          />
        </div>
        <div className="col-span-1">
          <button type="submit"
                  className="flex w-full justify-center items-center py-2 px-4 lg:px-6 rounded-md bg-pink-500 text-white hover:bg-pink-700 transition-colors"
          >Search!</button>
        </div>
      </div>
    </form>
  )
}