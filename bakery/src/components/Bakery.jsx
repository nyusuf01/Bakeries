import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Bakery(props) {
  // same as const country = props.bakery.fields.country;
  const { name, city, country, review, author, image } = props.bakery.fields;

  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <h5>{country}</h5>
      <h5>{review}</h5>
      <h5>{author}</h5>
    </div>
  );
}

export default Bakery;
