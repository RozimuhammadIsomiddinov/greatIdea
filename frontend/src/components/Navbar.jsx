import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./addButton.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div
        className="container-fluid"
        style={{
          backgroundColor: "rgb(253,246,246)",
          boxShadow: "15px 10px 5px rgb(164,154,154)",
        }}
      >
        <div className="d-flex justify-content-center w-100">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              color: "red",
              borderRadius: "10%",
              backgroundColor: "rgba(153, 204, 255, 0.5)",
            }}
          >
            All ideas
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          {/* Desktop navigation */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 desktop-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/add"
                style={{
                  backgroundColor: "rgb(96,96,96)",
                  borderRadius: "15%",
                }}
              >
                Add
              </Link>
            </li>
          </ul>
          {/* Mobile navigation */}
          <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <Link
              className="nav-link btn btn-danger"
              aria-current="page"
              to="/add"
              style={{
                borderRadius: "15%",
                display: "flex",
                padding: "10px",
                color: "#000",
                boxShadow: "10px 10px 10px black",
                maxWidth: "200px",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Add
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
