import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from '../styles.css';


const Navbar = () => {
  const underline = {textDecoration: "none"};
  const textColor = {color: "#3EC6FF"};

  return (
    <div className="navbar">
      <div>LOGO</div>
      <ul className="navUl">
        <li className="navLi">
          <NavLink to="/" style={{ ...underline, ...textColor }}>
            Home
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink to="UserSignup" style={{ ...underline, ...textColor }}>
            User Signup
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink to="MentorSignup" style={{ ...underline, ...textColor }}>
            Mentor Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
