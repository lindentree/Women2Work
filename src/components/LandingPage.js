import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from '../styles.css';
import Home from './Home';
import MentorSignup from './MentorSignup';
import UserSignup from './UserSignup';
import Navbar from './Navbar';


class LandingPage extends React.Component {
  render() {

    return (
      <div>

        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/MentorSignup' component={MentorSignup} />
            <Route path='/UserSignup' component={UserSignup} />
            <Route/>
          </Switch>
        </BrowserRouter>



      </div>
    );
  }
}

export default LandingPage;