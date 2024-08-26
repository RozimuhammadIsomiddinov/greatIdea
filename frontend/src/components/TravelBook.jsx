import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TravelBook = () => {
  const [travelBook, setTravelBook] = useState([]);
  const [id, setId] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/travel");
    setTravelBook(data.travels);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/travel/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {travelBook.map((tb) => (
        <div key={tb._id} className="card mb-3 mt-3">
          <img src={tb.image} className="card-img-top" alt={tb.title} />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">
              <b>
                <i>{tb.title}</i>
              </b>
            </h5>
            <details className="mb-5">
              <summary>
                <b>Description</b>
              </summary>
              <i className="card-text ms-5">{tb.description}</i>
            </details>
            <div className="d-flex justify-content-start">
              <Link className="btn btn-primary " to={`/update/${tb._id}`}>
                Update
              </Link>
              <form onSubmit={deleteHandler}>
                <button
                  type="submit"
                  className="btn btn-danger mx-2"
                  onClick={() => setId(tb._id)}
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelBook;
