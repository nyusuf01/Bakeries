import { useState } from "react";

import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [author, setAuthor] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

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
    // check name against bakery index
    const duplicate = props.bakeries.find((bakery) => {
      return name.toLowerCase() === bakery.fields.name.toLowerCase();
    });

    if (duplicate) {
      alert(
        "Thanks for your contribution but we have that entry already listed."
      );
      // } else if (name && city === null) {
      //   alert("Bakery name and city are required fields.");
      // } else {
      // post into API

      await axios.post(baseURL, { fields: newBakery }, config);

      //refresh data
      props.setToggleFetch((curr) => !curr);
    }
  };

  return (
    <div className="form-container">
      <br></br>
      <h3>Submit Your Favorite Bakery: </h3>
      <br></br>
      <form onSubmit={handleSubmit}>
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
