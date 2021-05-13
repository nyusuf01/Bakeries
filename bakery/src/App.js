import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Bakery from "./components/Bakery";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import IndividualBakeries from "./components/IndividualBakeries";
import Footer from "./components/Footer";

function App() {
  const [bakeries, setBakeries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  // some state to store the search term
  const [findCity, setFindCity] = useState("");

  // filter through bakeries from props to find any with a matching .fields.city
  const matchingBakeries = bakeries.filter((bakery) => {
    return bakery.fields.city.toLowerCase().includes(findCity.toLowerCase());
  });

  useEffect(() => {
    const fetchBakeries = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
      setBakeries(resp.data.records);
    };
    fetchBakeries();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav findCity={findCity} setFindCity={setFindCity} bakeries={bakeries} />
      <Route exact path="/">
        <main>
          <div className="bakery-container">
            <br></br>

            <h1 className="intro-h1">List of Best Bakeries</h1>
            <br></br>

            <p className="intro-p">
              If you're a fiend for comfort food and are seeking to indulge in
              some bread, cookies or cakes, try some delicious bites from some
              of the best bakeries listed. Also, contribute to our list and add
              your own two cents.
            </p>
            <br></br>
            <br></br>
            <div className="columnz">
              {matchingBakeries &&
                matchingBakeries.map((bakery) => (
                  <Homepage key={bakery._id} bakery={bakery} />
                ))}
            </div>
          </div>
        </main>
      </Route>
      <Route path="/info/:name">
        <IndividualBakeries bakeries={bakeries} />
      </Route>
      <Route path="/new">
        <div>
          <Form bakeries={bakeries} setToggleFetch={setToggleFetch} />
          {bakeries.map((bakery) => (
            <Bakery bakery={bakery} setToggleFetch={setToggleFetch} />
          ))}
        </div>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
