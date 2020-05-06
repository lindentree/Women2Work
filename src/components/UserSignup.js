import React from 'react';
import Navbar from './Navbar';
import UserForm from './UserForm';
import {Link, NavLink} from 'react-router-dom';
import userSignup from '../userSignup.css';
import LandingPage from './LandingPage';
import dots from '../images/dots.png';
import Footer from './Footer';
import match from '../images/match.png';
import calendar from '../images/calendar.png';
import star from '../images/star.png';
import yellowCircle from '../images/yellowCircle.png';
import linkedin from '../images/link.png'

class UserSignup extends React.Component {

  render() {
    const underline = {textDecoration: "none"};
    const textColor = {color: "white"};

    return (
      <div>
        <Navbar />
        <div className="user-container">
          <div className="item-1">

          <div className="yellow-ball-wrap">
            <img src={yellowCircle} className="yellow-ball" />
          </div>
            <p className="join-title">Join Women2Work</p>
            <div>
              <img src={dots} className="dots" />
            </div>
          </div>

          <div className="item-2">
            <div>
              <img src={match} className="star" />
            </div>

            <p className="small-title">Personalized Matchmaking</p>
            <p className="info-text">
              Upgrade your skills with the help of a mentor or find a mentee to connect with and help them on their career journey.
            </p>
          </div>

          <div className="item-3">
            <div><img src={calendar} className="star"/></div>

            <p className="small-title">Events and Workshops</p>
            <p className="info-text">Connect with others based on your passions, skills, and hobbies.</p>

          </div>


          <div className="item-4">

            <div><img src={star} className="star" /></div>
            <p className="small-title">Referral Program</p>
            <p className="info-text">
              Mentees who complete W2W Guidelines and are approved by Mentors can enter the referral program.
            </p>
          </div>


          <div className="item-6">
            <NavLink to="/UserForm" style={{...underline, ...textColor}}>
              Ready for Sign Up

            </NavLink>
          </div>

        </div>
        <Footer />
      </div>
    )
  }

}

export default UserSignup;