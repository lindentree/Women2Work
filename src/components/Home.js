import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="item-a">
          <h1>Mission Statement</h1>
            <p>
              We want to create a social networking platform that connects mentors, mentees, or any skilled individuals to understand each other as human beings.
            </p>
        </div>

        <div className="item-b">Photo here</div>

        <div className="item-c">
          <h1>Features</h1>
          <p>
            We want to create a social networking platform that connects mentors, mentees, or any skilled individuals to understand each other as human beings.
          </p>
        </div>

        <div className="item-d">
          <h3>[Picture here]</h3>
          <h4>Personalized Matchmaking</h4>
          <p>
            Connect with other peers and mentors based on industry, hobbies, and skills.
          </p>
        </div>

        <div className="item-e">
          <h3>[Picture here]</h3>
          <h4>Certified Mentor Badge</h4>
          <p>
            Mentors who complete the certification process will receive a certified mentor badge they can proudly present on LinkedIn.
          </p>
        </div>

        <div className="item-f">
                  <h3>[Picture here]</h3>
          <h4>Curated Events and Workshops</h4>
          <p>
            Connect with others based on your passion, skills, and hobbies.
          </p>
        </div>

        <div className="item-g">
                  <h3>[Picture here]</h3>
          <h4>Big Sister Program</h4>
          <p>
            Connect with other peers and mentors based on industry, hobbies, and skills.
          </p>
        </div>

        <div className="item-h">
          Social Media Links Here
        </div>

      </div>
    );
  }
}

export default Home;