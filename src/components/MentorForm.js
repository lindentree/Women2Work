import React from 'react';
import axios from 'axios';

class MentorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentorName: '',
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
    let {mentorName, email, jobTitle, skills, interests, needs} = this.state;
    let data = {mentorName, email, jobTitle, skills, interests, needs};
    let headers = {'Content-Type': 'application/json'};
    axios.post('/mentor', data, {headers: headers})
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
      <div>
        <div>
          <h1>User form</h1>
          <form onSubmit={this.handleSubmit}>

            <input type="text" name="mentorName" placeholder="Name" onChange={this.handleInput}  />
            <input type="email" name="email" placeholder="email" onChange={this.handleInput}  />
            <input type="text" name="jobTitle" placeholder="Job title" onChange={this.handleInput}  />
            <label>Skills I can teach as a Mentor:</label>
            <input type="text" name="skills" placeholder="Skills" onChange={this.handleInput}  />
            <label>Interests & Hobbies:</label>
            <input type="text" name="interests" placeholder="Interests & Hobbies:" onChange={this.handleInput}  />
            <label>What I need in my personal life:</label>
            <input type="text" name="needs" placeholder="I've been working mostly remotely, and..." onChange={this.handleInput}  />
            <button>Ready for connection!</button>
          </form>
        </div>
        <div>Photo here</div>
      </div>
    );
  }
}

export default MentorForm;