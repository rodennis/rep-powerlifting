import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import Add from "../../photos/plus.png";
import { signOut, getAuth } from 'firebase/auth'

function Navbar({ setToggle, user }) {

  const navigate = useNavigate()

  const signOutHandler = () => {
    const auth = getAuth();
    signOut(auth);
    navigate('/')
}
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
          <button onClick={signOutHandler}>Sign Out</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
