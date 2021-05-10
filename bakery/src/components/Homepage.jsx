import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <div className="bakery-container">
      <Link to={`/info/${props.bakery.name}`}>
        <h3>{props.bakery.name}</h3>
        <img src={props.bakery.image} />
      </Link>
    </div>
  );
}
export default Homepage;
