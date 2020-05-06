import React from 'react';
import {NavLink} from 'react-router-dom';
import NavMember from './NavMember';
import member from '../member.css';
import Footer from './Footer';
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

class Member extends React.Component {


  render() {
    return (
      <div>
        <NavMember />
        <div className="member-container">
          <div className="item-20">
            <div className="yellow-circle-wrap">
              <img src={yellowCircle} className="yellow-circle" />
            </div>

            <p className="hello">How it works</p>
            <p className="top-text">
              We have over 500 mentors in our community now, and we’ve matched you with some potential mentors based on your interests.
            </p>
            <p className="view-mentor">View our Mentors</p>
          </div>


            <div className="item-21">
              <div className="profile-crop">
                <img src={pic1} className="jane-profile"  />
              </div>
                <p className="name-title">
                  Jane Doe <br />Jr. Software Engineer
                </p>

              <div className="border-bottom"></div>
              <ul className="member-ul">
                <li className="member-li">My Mentors</li>
                <li className="member-li">My Connections</li>
                <li className="member-li">My Events</li>
                <li className="member-li">My Groups</li>
              </ul>
            </div>


          <div className="item-23"></div>

          <div className="item-24">
            <div className="profile-crop">
              <img src={pic2} className="jane-profile"  />
            </div>
              <p className="name-title">
                Jane Doe <br />Jr. Software Engineer
              </p>
              <div className="request">Request</div>
          </div>

          <div className="item-25">
            <div className="profile-crop">
              <img src={pic3} className="jane-profile"  />
            </div>
              <p className="name-title">
                Jane Doe <br />Jr. Software Engineer
              </p>
              <div className="request">Request</div>
          </div>

          <div className="item-26">
            <div className="profile-crop">
              <img src={pic4} className="jane-profile"  />
            </div>
              <p className="name-title">
                Jane Doe <br />Jr. Software Engineer
              </p>
              <div className="request">Request</div>
          </div>

          <div className="item-27">
            <div className="profile-crop">
              <img src={pic5} className="jane-profile"  />
            </div>
              <p className="name-title">
                Jane Doe <br />Jr. Software Engineer
              </p>
              <div className="request">Request</div>
          </div>

          <div className="item-28">
            <div className="profile-crop">
              <img src={pic6} className="jane-profile"  />
            </div>
              <p className="name-title">
                Jane Doe <br />Jr. Software Engineer
              </p>
              <div className="request">Request</div>
          </div>

          <div className="item-29">
            <div className="profile-crop">
              <img src={pic7} className="jane-profile"  />
            </div>
              <p className="name-title">
                Jane Doe <br />Jr. Software Engineer
              </p>
              <div className="request">Request</div>
          </div>



          <div className="item-30">
          <div className="sponser-title">Sponsored Events by Dream Force </div>
            <img className="event-pic" src={event3} />
            <p className="event-text">
              <span className="red-text">Tues, 10:00am 5/5</span><br /> Speaker series for business leaders
            </p>
          </div>

          <div className="item-31">
            <img className="event-pic-2" src={event2} />
            <p>
              <span className="red-text">Tues, 10:00am 5/12</span><br />Networking series for business leaders
            </p>
          </div>

          <div className="item-32">
            <img className="event-pic-1" src={event1} />
            <p>
              <span className="red-text">Tues, 10:00am 5/19 </span><br />Leadership series for Product managers
            </p>
          </div>


          <div className="item-33">
            <img src={bubbles} className="bubbles" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Member;

//           <div className="sponser-title">Sponsored Events by Dream Force </div>