import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import faces from '../images/faces.png';
import match from '../images/match.png';
import calendar from '../images/calendar.png';
import badge from '../images/badge.png';
import dots from '../images/dots.png';
import star from '../images/star.png';
import pinkCircle from '../images/pinkCircle.png';
import {NavLink} from 'react-router-dom';

class Home extends React.Component {
  render() {

  const underline = {textDecoration: "none"};
  const textColor = {color: "white"};

    return (
      <div>
      <Navbar />
      <div className="container">
        <div className="item-a">
        <div  className="big-circle">
          <img className="pinkCircle" src={pinkCircle} />
        </div>
          <h1>Women2Work</h1>
            <p className="red">Women helping women soar in their careers.</p>
            <p className="mission-text">
              Join a network. Attend an event. <br />
              Upgrade your skills. Find a mentor.
            </p>

            <div className="start">
              <NavLink to="Signup" style={{...underline, ...textColor}}>
                Get Started
              </NavLink>
            </div>

        </div>

        <div className="item-b">
          <img src={faces} alt="faces" className="faces" />
        </div>

        <div className="item-c">

          <p className="mission-text red">
          Join our community of women looking to advance their careers.
          </p>
        </div>

        <div className="item-d">
          <img src={match} className="icon" />
          <h4>Personalized Matchmaking</h4>
          <p className="feat-text">
            Upgrade your skills with the help of a mentor or find a mentee to connect with and help them on their career journey.
          </p>
        </div>

        <div className="item-e">
          <img src={badge} className="icon" />
          <h4>Networking</h4>
          <p className="feat-text">
            Connect with peers and mentors based on industry, hobbies, and skills.
          </p>
        </div>

        <div className="item-f">
          <img src={calendar} className="icon"/>
          <h4>Events and Workshops</h4>
          <p className="feat-text">
            Connect with others based on your passion, skills, and hobbies.
          </p>
        </div>

        <div className="item-g">
          <img src={star} className="icon"/>
          <h4>Referral Program</h4>
          <p className="feat-text">
            Mentees who complete W2W Guidelines and are approved by Mentors can enter the referral program.
          </p>
        </div>



      </div>
      <Footer />
      </div>
    );
  }
}

export default Home;