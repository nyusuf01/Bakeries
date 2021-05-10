import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Bakery from "./components/Bakery";
import Nav from "./components/Nav";

function App() {
  const [bakeries, setBakeries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchBakeries = async () => {
      const resp = await axios.get(baseURL, config);
      setBakeries(resp.data.records);
    };
    fetchBakeries();
  }, [toggleFetch]);

  return (
    <div className="App">
      <body>
        <Nav />
        <Route exact path="/">
          <main>
            {bakeries.map((bakery) => (
              <Bakery bakery={bakery} setToggleFetch={setToggleFetch} />
            ))}
          </main>
        </Route>
        <Route path="/new">
          <div>
            <Form bakeries={bakeries} setToggleFetch={setToggleFetch} />
            {bakeries.map((bakery) => (
              <Bakery bakery={bakery} setToggleFetch={setToggleFetch} />
            ))}
          </div>
        </Route>
      </body>
    </div>
  );
}

export default App;
