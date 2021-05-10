import { useParams } from "react-router-dom";

function IndividualBakeries(props) {
  const params = useParams();
  const bakery = props.bakeries.find(
    (bakery) => bakery.fields.name === params.name
  );
  console.log(params);
  console.log(props);

  return (
    <div className="bakery-info-container">
      <img
        src={bakery && bakery.fields.image}
        alt={bakery && bakery.fields.name}
      />
      <div className="text">
        <h2>{bakery && bakery.fields.name}</h2>
        <br></br>
        <h3>
          <em>
            ({bakery && bakery.fields.city}, {bakery && bakery.fields.country})
          </em>
        </h3>

        <h3>
          <strong>Review</strong>
          <br></br>
          {bakery && bakery.fields.review}
        </h3>

        <h4>
          <br></br>
          <button>
            <a href={bakery && bakery.fields.website}>Read More</a>
          </button>
        </h4>
      </div>
    </div>
  );
}

export default IndividualBakeries;
