import React from 'react';
import {NavLink} from 'react-router-dom';
import NavMember from './NavMember';
import jane from '../jane.css';
import footer from './Footer';
import bubbles from '../images/dots.png';
import smiley from '../images/smiley.png';
import yellowCircle from '../images/yellowCircle.png';
import Footer from './Footer';

class Jane extends React.Component {

  render() {
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


            <p>Networking</p>
            <p>
              Provide Guidance to 3 Mentees at a time Host Workshops Build a Personal Brand Receive a Certified Mentor Badge
            </p>
            <div className="red-btn">Networking</div>
          </div>
        </div>

        <div className="item-43">
          <div div className="inside-text">

            <div className="smiley-crop">
              <img src={smiley} className="smiley" />
            </div>

            <p>Find an Event</p>
            <p>
              Provide Guidance to 3 Mentees at a time
              Host Workshops
              Build a Personal Brand
              Receive a Certified Mentor Badge
            </p>
            <div className="red-btn">Find an Event</div>
          </div>
        </div>


        <div className="item-44">
          <div className="inside-text">

            <div className="smiley-crop">
              <img src={smiley} className="smiley" />
            </div>

            <p>Be a Mentor</p>
            <p>
              Provide Guidance to 3 Mentees at a time
              Host Workshops
              Build a Personal Brand
              Receive a Certified Mentor Badge
            </p>
            <div className="red-btn">Be a Mentor</div>
          </div>
        </div>

        <div className="item-45">
          <div className="inside-text">

            <div className="smiley-crop">
              <img src={smiley} className="smiley" />
            </div>

            <p>Be a Mentee</p>
            <p>
              Provide Guidance to 3 Mentees at a time
              Host Workshops
              Build a Personal Brand
              Receive a Certified Mentor Badge
            </p>
            <div className="red-btn">Be a Mentee</div>
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