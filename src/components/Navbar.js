import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Button, Container, H1, Input, Form, Label, Title, Ul, Li, NavContainer} from './style';

const Navbar =() => {
  const underline = {textDecoration: "none"};
  const textColor = {color: 'white'};

  return (
    <NavContainer>
    <Title>COVID-19 Testing Location Insights</Title>
      <Ul>
        <Li>
          <NavLink to="/" style={{ ...underline, ...textColor }}>
            Home
          </NavLink>
        </Li>
        <Li>
          <NavLink to="UserForm" style={{ ...underline, ...textColor }}>
            User
          </NavLink>
        </Li>
        <Li>
          <NavLink to="ProviderForm" style={{ ...underline, ...textColor }}>
            Provider
          </NavLink>
        </Li>
      </Ul>
    </NavContainer>
  );
}

export default Navbar;
