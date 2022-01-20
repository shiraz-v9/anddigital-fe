import React, { useEffect, useState } from "react";

import logo from "./assets/brandlogo1.png";
import { useNavigate } from "react-router-dom";
import { Basket } from "./checkout";

function Navbar() {
  let navigate = useNavigate();
  const [searchQuery, setsearchQuery] = useState("");
  const [search, setsearch] = useState("");
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    setsearch(searchQuery);
  };
  useEffect(() => {
    if (search !== "") {
      navigate(`/search/${search}`);
    }
  }, [search]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light red-100 sticky-top nav">
      <div class="container-fluid">
        <img
          className="ms-3 logo"
          src={logo}
          alt="brandlogo"
          width={"30px"}
          height={"30px"}
        />

        <p className="ms-1 my-auto text-light">
          <i>GoldenShoe</i>{" "}
        </p>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/basket">
                basket
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                about us
              </a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={(e) => handleSubmission(e)}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(q) => setsearchQuery(q.target.value)}
            ></input>
            <button className="btn btn-light" type="submit">
              Search
            </button>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                checkout
              </a>
            </li> */}
            <Basket />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
