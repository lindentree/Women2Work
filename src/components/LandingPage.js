import React from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import Mentor from './Mentor';
import Skills from './Skills';


class LandingPage extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div>


          <Route exact path='/' component={Home} />
          <Route path='/Mentor' component={Mentor} />
          <Route path='/Skills' component={Skills} />
          <Route/>
        </div>
      </BrowserRouter>
    );
  }
}

export default LandingPage;