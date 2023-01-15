export const MoviesFilter = (props) => {


  return (
    <>
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
    </>
  )
}