import React, { Component } from 'react';
import {Container} from '../../theme/grid';
import ReactPlayer from 'react-player';

class AboutMe extends Component {
  render () {
    return (
      <Container>
      <h1>About Me</h1>
      <h2>So what are your hobbies?</h2>
      <p>I am a keen musician. Here is a live video of a song
      I co-wrote called 'August Second':</p>
      <ReactPlayer controls
      url={'https://www.youtube.com/watch?v=eZiHkkLu2Fk'}></ReactPlayer>
      </Container>
  );
  }
}

export default AboutMe;
