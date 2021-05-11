function Bakery(props) {
  // same as const country = props.bakery.fields.country;
  const { name, city, country, review, author, image } = props.bakery.fields;

  return (
    <div className="bakery-column-container">
      <br></br>
      <h3>{name}</h3>

      <br></br>
      <img src={image} />
      <h4>{city}</h4>
      <h5>{country}</h5>
      <h5>{review}</h5>
      <h5>{author}</h5>
    </div>
  );
}

export default Bakery;
