import React from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import MentorForm from './MentorForm';
import UserForm from './UserForm';
import Navbar from './Navbar';


class LandingPage extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Route exact path='/' component={Home} />
          <Route path='/MentorForm' component={MentorForm} />
          <Route path='/UserForm' component={UserForm} />
          <Route/>
        </div>

        <div>
          <h1>Mission Statement</h1>
          <p>
            We want to create a social networking platform that connects mentors, mentees, or any skilled individuals to understand each other as human beings.
          </p>
        </div>

        <div>
          <h1>Features</h1>
          <p>
            We want to create a social networking platform that connects mentors, mentees, or any skilled individuals to understand each other as human beings.
          </p>
        </div>

        <div>
          <h4>Personalized Matchmaking</h4>
          <p>
            Connect with other peers and mentors based on industry, hobbies, and skills.
          </p>
        </div>

        <div>
          <h4>Certified Mentor Badge</h4>
          <p>
            Mentors who complete the certification process will receive a certified mentor badge they can proudly present on LinkedIn.
          </p>
        </div>

        <div>
          <h4>Curated Events and Workshops</h4>
          <p>
            Connect with others based on your passion, skills, and hobbies.
          </p>
        </div>

        <div>
          <h4>Big Sister Program</h4>
          <p>
            Connect with other peers and mentors based on industry, hobbies, and skills.
          </p>
        </div>

      </BrowserRouter>
    );
  }
}

export default LandingPage;