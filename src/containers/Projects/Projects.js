import React, { Component } from 'react';
import {Container} from '../../theme/grid';
import {ZombieImage, HempyGram, ImageButton } from './Projects.style';

class Projects extends Component {
  render() {
    return (
    <Container>
        <h1>My Projects</h1>
        <a href='https://zombie-paint-902ce.firebaseapp.com/'>
        <ImageButton>
        <ZombieImage src={require('../../assets/zombie-paint-image.jpeg')} alt='Zombie paint image'/>
         </ImageButton>
        </a>
        <p>
        Makers Academy final project, Zombie Paint brings MS Paint
        back from the dead with this early Windows clone.
        </p>
        <a href='https://github.com/Hempy49/instagram-challenge'>
        <ImageButton>
        <HempyGram src={require('../../assets/instagram-image.png')} alt='Instagram image' />
        </ImageButton>
        </a>
        <p>
        A simple Instagram clone written over a weekend as part of Makers
        Academy weekend challenges.
        </p>
    </Container>
    );
  }
}

export default Projects;
