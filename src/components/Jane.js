import React from 'react';
import {NavLink} from 'react-router-dom';
import NavMember from './NavMember';
//import jane from '../jane.css';
import footer from './Footer';
import bubbles from '../images/dots.png';
import smiley from '../images/smiley.png';
import yellowCircle from '../images/yellowCircle.png';
import Footer from './Footer';

class Jane extends React.Component {

  render() {
    const underline = {textDecoration: "none"};
    const textColor = {color: "white"};

    return (
      <div>
        <NavMember />
        <div className="jane-container">

        <div className="item-40">
          <div className="yellow-bubble-wrap">
            <img src={yellowCircle} className="yellow-bubble" /></div>
          <img src={bubbles} className="jane-bubbles" />
          <p  className="hello-jane"> Hello Jane, </p>
          <p className="wel"> Welcome to our Community! </p>

        </div>




        <div className="item-42">
          <div className="inside-text">

            <div className="smiley-crop">
              <img src={smiley} className="smiley" />
            </div>

            <p className="second-title">Networking</p>
            <p>
              Connect with others based on professional skills, industry, personal hobbies and other interests
            </p>
            <div className="red-btn">Networking</div>
          </div>
        </div>

        <div className="item-43">
          <div div className="inside-text">

            <div className="smiley-crop">
              <img src={smiley} className="smiley" />
            </div>

            <p className="second-title">Find an Event</p>
            <p>
              Find out more about mentors, hear from industry experts, or meet others at an informal Virtual Happy Hour
            </p>
            <div className="red-btn">Find an Event</div>
          </div>
        </div>


        <div className="item-44">
          <div className="inside-text">

            <div className="smiley-crop">
              <img src={smiley} className="smiley" />
            </div>

            <p className="second-title">Be a Mentor</p>
            <p>
              Provide Guidance to 3 Mentees at a time
              Host Workshops
              Build a Personal Brand

            </p>
            <div className="red-btn">Be a Mentor</div>
          </div>
        </div>

        <div className="item-45">
          <div className="inside-text">
            <div className="smiley-crop">
              <img src={smiley} className="smiley" />
            </div>

            <p className="second-title">Be a Mentee</p>
            <p>
              Connect one on one with a mentor
              for personalized guidance on how to reach your goals
            </p>
            <div className="red-btn">
              <NavLink to="./BeMentee" style={{...underline, ...textColor}}>
                Be a Mentee
              </NavLink>
            </div>
          </div>
        </div>


        <div className="item-46"></div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default Jane;