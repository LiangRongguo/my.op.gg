import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img
          src="https://img.pngio.com/league-of-legends-icon-png-204256-free-icons-library-league-of-legends-icon-png-512_512.jpg"
          alt="League Of Legends Icon Png #204256 - Free Icons Library"
        />
      </Link>
      <div className="options">
        <Link className="option" to="/champions">
          CHAMPIONS
        </Link>
        <Link className="option" to="/summoner">
          SUMMONER
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
