import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar({ setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("nature");
            navigate("/");
          }}
        >
          Nature
        </div>

        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("travel");
            navigate("/");
          }}
        >
          Travel
        </div>

        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("mountain");
            navigate("/");
          }}
        >
          Mountain
        </div>

        <div
          className="button btn btn-outline-danger mx-3"
          onClick={() => {
            setSearch("cars");
            navigate("/");
          }}
        >
          Cars
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("fashion");
            navigate("/");
          }}
        >
          Fashion
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("animals");
            navigate("/");
          }}
        >
          Animals
        </div>
        <div
          className="button btn btn-outline-success mx-3"
          onClick={() => {
            setSearch("technology");
            navigate("/");
          }}
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("business & finance");
            navigate("/");
          }}
        >
          Business & Finance
        </div>
        <div
          className="button btn btn-outline-danger mx-3"
          onClick={() => {
            setSearch("butterfly");
            navigate("/");
          }}
        >
          Butterfly
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() => {
            setSearch("beach");
            navigate("/");
          }}
        >
          Beach
        </div>

        {location.pathname == "/saved" ? (
          <div
            className="button btn btn-outline-primary mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-outline-primary mx-3"
            onClick={() => navigate("/saved")}
          >
            Saved
          </div>
        )}
      </div>

      <div className="container my-4 w-[780px]">
        {location.pathname === '/' && (
             <div className="mb-3">
          <input
            type="email"
            className="form-control bg-dark text-light"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        )}
       
      </div>
    </>
  );
}

export default Navbar;
