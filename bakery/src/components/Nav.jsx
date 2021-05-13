import { Link } from "react-router-dom";

function Nav({ findCity, setFindCity }) {
  return (
    <nav>
      <Link to="/">Best Bakeries</Link>
      <Link to="/new">Submit Your Favorite Bakery</Link>
      {/*
       * container
       *   input
       *   container
       *     matching bakeries
       */}
      <div className="typeahead-container">
        <label htmlFor="city">Search cities: </label>
        <input
          type="text"
          value={findCity}
          onChange={(e) => setFindCity(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Nav;
