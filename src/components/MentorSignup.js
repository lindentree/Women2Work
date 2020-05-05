import React from 'react';
import MentorForm from './MentorForm';
import {NavLink} from 'react-router-dom';
import userSignup from '../userSignup.css';

const underline = {textDecoration: "none"};
const textColor = {color: "#3EC6FF"};

const MentorSignup = () => (
  <div className="user-container">

    <div className="item-1">Becoming a Mentor</div>

    <div className="item-2">placeholder</div>
    <div className="item-3">placeholder</div>
    <div className="item-4">placeholder</div>
    <div className="item-5">placeholder</div>

    <div className="item-6">
      <NavLink NavLink to = "/MentorForm" style={{...underline, ...textColor}}>
        Becoming a Mentor
      </NavLink>
    </div>
  </div>
)

export default MentorSignup;