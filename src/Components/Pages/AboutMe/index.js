import React from "react"
import { Jumbotron, Row, Col } from 'reactstrap';
import './style.css';
import skills from "../../Info/skills.js";

class About extends React.Component {

  state = {
    skills
  };

  render() {
    return (
      <Jumbotron className="m-3 text-center">
        <h1 className="display-4">Welcome to My Page</h1>
        <p className="lead">Alain C. Tagne Kuate (PhD), Senior Research Scientist, Junior Software Developper.</p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col>
            <p className="">I am an experienced Scientist with profound knowledge in project conception and development. Expertise in managing projects related to the manufacture of quality pure certified  references materials (CRMs). Beside these majors skills, I am passionate about coding and currently a FullStack web developper student at Uconn. I am eager to acquiere skills and become in the future  part of a fast-paced, quality-driven team.</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="font-weight-bold">Technical Coding Skills</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {this.state.skills.map(skill => (
            <Col>
              <img className="skillsLogo" src={skill.src} alt="Logo"/>
              <hr className="my-2" />
              <p>{skill.skill}</p>
            </Col>
          ))}
        </Row>
      </Jumbotron>
    );
  }

};

export default About;