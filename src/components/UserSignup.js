import React from 'react';
import Navbar from './Navbar';
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

        <div className="item-1">Join Women2Work</div>

        <div className="item-2">
          Find a mentor to help you get ready to reenter the job market
        </div>

        <div className="item-3">
          Upgrade your skills using our sponsored skills database and online events
        </div>
        <div className="item-4">
          Connect with other women and share strategies
        </div>


        <div className="item-6">
          <NavLink to="/UserForm" style={{...underline, ...textColor}}>
            Sign Up</NavLink>
        </div>
      </div>
    )
  }

}

export default UserSignup;