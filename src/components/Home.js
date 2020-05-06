import React from 'react';
import Navbar from './Navbar';
import faces from '../images/faces.png';
import match from '../images/match.png';
import calendar from '../images/calendar.png';
import badge from '../images/badge.png';
import dots from '../images/dots.png';

class Home extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="container">
        <div className="item-a">
        <div  className="big-circle"></div>
          <h1>Mission Statement</h1>
            <p className="red">We believe in women helping women.</p>
            <p className="mission-text">
              We want to create a social networking platform
              for women that connects mentors, mentees, or any skilled individuals to reach their career goals.
            </p>
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