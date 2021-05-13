import { Link } from "react-router-dom";
import { useState } from "react";
import { Route } from "react-router-dom";

function Nav(props) {
  // some state to store the search term
  const [findCity, setFindCity] = useState("");

  // filter through bakeries from props to find any with a matching .fields.city
  const matchingBakeries = props.bakeries.filter((bakery) =>
    bakery.fields.city.toLowerCase().includes(findCity.toLowerCase())
  );

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
        {findCity && (
          <div className="results-container">
            {matchingBakeries.map((bakery) => (
              <Route path="/info/:city">
                <p>{bakery.fields.city}</p>
              </Route>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
