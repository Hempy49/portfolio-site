import React, {Component, PropTypes} from 'react';
import {Container} from '../../theme/grid';
import {Image, ProfileImage, RevealP} from './Home.style';

export default class Home extends Component {
  static propTypes = {};
  render() {
    return (
      <Container>
        <h1>Simon Hempenstall</h1>
        <h2>Solutions Engineer and Front-end enthusiast</h2>
      <Image src={require('../../assets/images/MA-profile-small.jpg')} alt='profile image'/>
      <RevealP>
      Experienced Solutions Engineer with a demonstrated history of working in the information technology and services industry. 
      Skilled in Web Development, DataAnalytics, JavaScript, Ruby, and SaaS products. 
      Recently graduated from Makers Academy, where I trained in Full Stack Web Development.
        </RevealP>
      </Container>
    );
  }
}
