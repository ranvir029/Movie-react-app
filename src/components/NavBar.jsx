import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const NavBar = () => {
  const [data, setData] = useState({
    title: "Intial Title",
    plot:"Quickly design and customize responsive mobile-first sites withootstrap, the world's most popular front-end open source toolkit featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins",
    poster:"https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",

  });
  const fetchData = async () => {
      const response = await axios.get("https://fooapi.com/api/movies/rand");
       setData({
        title:response.data.data.title,
        plot:response.data.data.plot,
        poster:response.data.data.poster
       })
    };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
          <div
            className="collapse navbar-collapse flex"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-link"></Link>
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Product
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={data.poster}
          alt=""
          width="300"
          height="300"
        ></img>
        <h1 className="display-5 fw-bold text-body-emphasis">{data.title}</h1>{" "}
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
           {data.plot}
          </p>{" "}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button onClick={fetchData} type="button" className="btn btn-primary btn-lg px-4 gap-3" >
              Random
            </button>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default NavBar;
