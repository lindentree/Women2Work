import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Button, Container, H1, Input, Form, Label, Title, Ul, Li, NavContainer} from './styles';

const Navbar =() => {
  const underline = {textDecoration: "none"};
  const textColor = {color: 'grey'};

  return (
    <div>
      <div>LOGO</div>
      <ul>
        <li>
          <NavLink to="/" style={{ ...underline, ...textColor }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="UserForm" style={{ ...underline, ...textColor }}>
            User Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="MentorForm" style={{ ...underline, ...textColor }}>
            Mentor Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
