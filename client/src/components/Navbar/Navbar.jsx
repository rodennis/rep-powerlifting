import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import Add from "../../photos/plus.png";
import { signOut, getAuth } from 'firebase/auth'
import Logo from '../../photos/rep-logo.png'

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
          <img className="logo-image" src={Logo} alt="logo" />
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
