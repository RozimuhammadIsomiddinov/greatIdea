import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://greatidea-backend.onrender.com/add", {
      title,
      description,
      image,
    });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#f6f8f9",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <div className="mt-3">
        <label
          htmlFor="title"
          className="form-label d-flex justify-content-center w-100"
        >
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          required="true"
          onChange={(e) => setTitle(e.target.value)}
          style={{ boxShadow: "15px 15px 15px blue", marginTop: 3 }}
        />
      </div>
      <div className="mb-3 mt-3">
        <label
          htmlFor="description"
          className="form-label d-flex justify-content-center w-100"
        >
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          required="true"
          onChange={(e) => setdescription(e.target.value)}
          style={{ boxShadow: "15px 15px 15px blue", marginTop: 3 }}
        />
      </div>
      <div className="mb-3 mt-3">
        <label
          htmlFor="image"
          className="form-label d-flex justify-content-center w-100"
        >
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          required="true"
          placeholder="Pleace only URL"
          onChange={(e) => setImage(e.target.value)}
          style={{ boxShadow: "15px 15px 15px blue", marginTop: 3 }}
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button
          type="submit"
          className="btn btn-secondary"
          style={{ boxShadow: "15px 5px 10px grey" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddBook;
