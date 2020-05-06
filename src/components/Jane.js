import React from 'react';
import {NavLink} from 'react-router-dom';
import NavMember from './NavMember';
import jane from '../jane.css';
import bubbles from '../images/dots.png';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';
import pic6 from '../images/pic6.png';
import pic7 from '../images/pic7.png';
import pic8 from '../images/pic8.png';
import event1 from '../images/event1.png';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.png';
import yellowCircle from '../images/yellowCircle.png';

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
          <p className="hello-jane">Hello Jane, <br />
            <span className="wel">Welcome to our Community!</span>
          </p>

        </div>

        <div className="item-41">
          <div className="search">Search for mentors or events...</div>
        </div>


        <div className="item-42">
          <div className="inside-text">
            <p>Networking</p>
            <p>
              Provide Guidance to 3 Mentees at a time Host Workshops Build a Personal Brand Receive a Certified Mentor Badge
            </p>
            <div className="red-btn">Networking</div>
          </div>
        </div>

        <div className="item-43">
          <div div className="inside-text">
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
      </div>
    )
  }
}

export default Jane;