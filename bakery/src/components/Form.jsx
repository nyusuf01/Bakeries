import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [author, setAuthor] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const params = useParams();

  useEffect(() => {
    // if we're editing (we have an id), and our bakeries have loaded (we have more than 0)
    if (params.id && props.bakeries.length) {
      // .find() the record with an id that matches our id in params
      const bakery = props.bakeries.find((bakery) => bakery.id === params.id);
      // if we find that record (if it exists)
      if (bakery) {
        // set the country to that record's country etc.
        setName(bakery.fields.name);
        setCity(bakery.fields.season);
        setCountry(bakery.fields.country);
        setReview(bakery.fields.review);
        setAuthor(bakery.fields.author);
      }
    }
  }, [props.bakeries, params.id]);

  const handleSubmit = async (e) => {
    // prevent the default behavior of the submit event
    e.preventDefault();
    // assemble our object (country, author, etc.)
    const newBakery = {
      name,
      city,
      country,
      review,
      author,
    };
    // make our request
    if (params.id) {
      const specificURL = `${baseURL}/${params.id}`;
      await axios.put(specificURL, { fields: newBakery }, config);
    } else {
      await axios.post(baseURL, { fields: newBakery }, config);
    }
    // ...what do we do? (😉)
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div className="form-container">
      <br></br>
      <form onSubmit={handleSubmit}>
        <h3>Submit Your Favorite Bakery: </h3>
        <br></br>

        <label htmlFor="name">Bakery name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="country">Country: </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="review">Review: </label>
        <input
          type="text"
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="author">Author: </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br></br>
        <br></br>

        <button type="submit">Submit</button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default Form;
