import React from 'react';
import UserForm from './UserForm';
import {Link, NavLink} from 'react-router-dom';
import userSignup from '../userSignup.css';
import LandingPage from './LandingPage';

class UserSignup extends React.Component {

  render() {
    const underline = {textDecoration: "none"};
    const textColor = {color: "#3EC6FF"};
    return (
      <div className="user-container">

        <div className="item-1">Joining the Women2Work Network</div>
        <div className="item-2">placeholder</div>
        <div className="item-3">placeholder</div>
        <div className="item-4">placeholder</div>
        <div className="item-5">placeholder</div>

        <div className="item-6">
          <NavLink to="/UserForm" style={{...underline, ...textColor}}>
            Sign Up</NavLink>
        </div>
      </div>
    )
  }

}

export default UserSignup;