import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { ProjectImage, ImageButton } from './Projects.style';

class Projects extends Component {
  render() {
    return (
      <Container>
        <h1>My Projects</h1>
        <a href='https://zombie-paint-902ce.firebaseapp.com/'>
          <ImageButton>
            <ProjectImage src={require('../../assets/images/zombie-paint-image.jpeg')} alt='Zombie paint image'/>
          </ImageButton>
        </a>
        <p>
          Makers Academy final project, Zombie Paint brings MS Paint
          back from the dead with this early Windows clone.
        </p>
        <a href='https://github.com/Hempy49/instagram-challenge'>
          <ImageButton>
            <ProjectImage src={require('../../assets/images/instagram-image.png')} alt='Instagram image' />
          </ImageButton>
        </a>
        <p>
          A simple Instagram clone written over a weekend as part of Makers
          Academy weekend challenges.
        </p>
        <a href='https://hempy-chitter.herokuapp.com/'>
          <ImageButton>
            <ProjectImage src={require('../../assets/images/twitter-logo.png')} alt='Twitter image' />
          </ImageButton>
        </a>
        <p>
          A Makers Academy weekend challenge to produce a lightweight Twitter clone. Built with Ruby using
          the Sinatra framework.
        </p>
        <a href='https://ping-js.firebaseapp.com/'>
          <ImageButton>
            <ProjectImage src={require('../../assets/images/ping-image.png')} alt='Ping image' />
          </ImageButton>
        </a>
        <p>
          A group project to build the retro game of Pong using vanilla javascript and HTML5 canvas.
        </p>
      </Container>
    );
  }
}

export default Projects;
