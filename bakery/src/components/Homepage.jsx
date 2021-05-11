import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <div className="homepage-bakery-container">
      <h1>{props.bakery.fields.name}</h1>
      <br></br>
      <br></br>
      <img src={props.bakery.fields.image} />

      <h4>
        <em>
          ({props.bakery.fields.city}, {props.bakery.fields.country})
        </em>
      </h4>
      <Link to={`/info/${props.bakery.fields.name}`}>
        <h4>
          <button>Read More</button>
          <br></br>
          <br></br>
        </h4>
      </Link>
    </div>
  );
}
export default Homepage;
