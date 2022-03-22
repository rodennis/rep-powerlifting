import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import Upload from "../Upload/Upload";
import Add from "../../photos/plus.png";

function Navbar({ setToggle, user }) {
  return (
    <div>
      <nav>
        <div className="nav-logo-div">
          <h1 className="nav-logo">
            rep
            <br />
            powerlifting
          </h1>
        </div>
        <div className="add-div">
          <Link to='/upload'>
            <button>
              <img className="add-post" src={Add} alt="" />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
