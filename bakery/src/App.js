import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";

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

  return <div className="App"></div>;
}

export default App;
