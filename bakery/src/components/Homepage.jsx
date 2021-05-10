import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <div className="bakery-container">
      <Link to={`/info/${props.bakery.fields.name}`}>
        <img src={props.bakery.fields.image} />
        <h1>{props.bakery.fields.name}</h1>
        <h4>
          <em>
            ({props.bakery.fields.city}, {props.bakery.fields.country})
          </em>
        </h4>
      </Link>
    </div>
  );
}
export default Homepage;
