import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  const [bakeries, setBakeries] = useState([]);

  useEffect(() => {
    const fetchBakeries = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
    };
    fetchBakeries();
  }, []);

  return <div className="App"></div>;
}

export default App;
