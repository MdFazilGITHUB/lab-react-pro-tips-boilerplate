import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Kalvium
            <img
              style={{ width: "30px" }}
              src="https://kalvium.com/wp-content/uploads/2022/07/fav.png"
              alt=""
            />
          </h1>
        </Link>

        <div style={{ display: "flex", gap: "40px" }}>
          <Link
            to={"/about"}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <h1>About</h1>
          </Link>
          <Link
            to={"/form"}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
              wordSpacing:"0.1px"
            }}
          >
            <h1>Registration Form</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
