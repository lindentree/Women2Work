import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import styles from '../styles.css';
import Home from './Home';
import UserSignup from './UserSignup';
//import Navbar from './Navbar';
import UserForm from './UserForm';
import Member from './Member';
import Jane from './Jane';

class LandingPage extends React.Component {
  render() {

    return (
     
        <Router>
          <div>
            <Route exact path='/' component={Home} />

            <Route path='/Signup' component={UserSignup} />
            <Route path='/UserForm' component={UserForm} />
            <Route path='/Jane' component={Jane} />
            <Route path='/BeMentee' component={Member} />
     
          </div>
        </Router>
      
    );
  }
}

export default LandingPage;