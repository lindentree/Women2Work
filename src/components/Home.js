import React from 'react';
import Navbar from './Navbar';
import faces from '../images/faces.png';
import match from '../images/match.png';
import calendar from '../images/calendar.png';
import badge from '../images/badge.png';
import dots from '../images/dots.png';
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
          <h1>Features</h1>
          <p className="mission-text">
          Join our community of women looking to advance their career.
          Attend an event or find an accountability partner.
          </p>
        </div>

        <div className="item-d">
          <img src={match} />
          <h4>Personalized Matchmaking</h4>
          <p className="feat-text">
            Connect with other peers and mentors based on industry, hobbies, and skills.
          </p>
        </div>

        <div className="item-e">
          <img src={badge} />
          <h4>Certified Mentor Badge</h4>
          <p className="feat-text">
            Mentors who complete the certification process will receive a certified mentor badge they can proudly present on LinkedIn.
          </p>
        </div>

        <div className="item-f">
          <img src={calendar} />
          <h4>Curated Events and Workshops</h4>
          <p className="feat-text">
            Connect with others based on your passion, skills, and hobbies.
          </p>
        </div>

        <div className="item-g">
          <img src={match} />
          <h4>Big Sister Program</h4>
          <p className="feat-text">
            Connect with other peers and mentors based on industry, hobbies, and skills.
          </p>
        </div>

        <div className="item-h">
          Social Media Links Here
        </div>

      </div>

      </div>
    );
  }
}

export default Home;