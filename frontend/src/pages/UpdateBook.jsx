import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await axios.get(`https://great-idea-backend.vercel.app/${id}`);
    setTitle(data.travel.title);
    setdescription(data.travel.description);
    setImage(data.travel.image);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://great-idea-backend.vercel.app/${id}`, {
      title,
      description,
      image,
    });
    navigate("/");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form onSubmit={updateHandler}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UpdateBook;
