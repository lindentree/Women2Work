import React from 'react';
import axios from 'axios';
import LandingPage from './LandingPage';
import {Link, NavLink} from 'react-router-dom';
import form from '../form.css';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      jobTitle: '',
      skills: [],
      interests: [],
      needs: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this.state --', this.state);
    let {userName, email, jobTitle, skills, interests, needs} = this.state;
    let data = {userName, email, jobTitle, skills, interests, needs};
    let headers = {'Content-Type': 'application/json'};
    axios.post('/user', data, {headers: headers})
      .then(res => {
        console.log('axios.post: data--', data);
      })
      .catch(err => {
        console.log('fail to post:', err);
      })
    e.target.reset();
  }

  render() {
    return (
      <div className="form-container">
        <div className="item-11">
          <p className="first-line">
            You need just 30 seconds to
            <span> just tell us about who you are a human:</span>
          </p>
          <p className="second-line">
            Don’t worry, you can edit your Profile at anytime.
          </p>
        </div>

        <div className="item-12" >
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" name="userName" placeholder="Jane Doe" onChange={this.handleInput} />

            <label>Email:</label>
            < input type = "email"
            name = "email"
            placeholder = "janedoe@gmail.com"
            autoComplete = "off"
            onChange={this.handleInput}  />

            <label>Job Title:</label>
            < input type = "text"
            name = "jobTitle"
            placeholder = "Jr.Software Developer"
            autoComplete = "off"
            onChange={this.handleInput}  />

            <label>Professional skills I want to learn:</label>
            <input type="text" name="skills" placeholder="Skills"
            autoComplete="off"
            onChange={this.handleInput}  />

            <label>Interests & Hobbies:</label>
            <input type="text" name="interests" placeholder="Interests & Hobbies:"
            autoComplete="off"
            onChange={this.handleInput}  />

            <label>What I need in my personal life:</label>
            <textarea type="text" name="needs" placeholder="During this Covid-19 pandemic, it has been difficult to look after my children while I’m job hunting.  I would love to connect with working professionals and how they balance work and family."
            autoComplete="off"
            onChange={this.handleInput}  />

            <button className="connect-button">Ready for connection!</button>
          </form>
        </div>

        <div className="item-13">Photo here</div>
      </div>
    );
  }
}

export default UserForm;