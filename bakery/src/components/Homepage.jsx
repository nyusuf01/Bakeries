import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <div className="bakery-container">
      <Link to={`/info/${props.bakery.fields.name}`}>
        <img src={props.bakery.fields.image} />
        <h1>{props.bakery.fields.name}</h1>
        <h4>{props.bakery.fields.city}</h4>
        <h4>{props.bakery.fields.country}</h4>
      </Link>
    </div>
  );
}
export default Homepage;
