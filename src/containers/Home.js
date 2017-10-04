import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container'

const Image = styled.img`
  width: 50%;
  height: 75%;
  display: block;
  margin: auto;
`;

export default class Home extends Component {
  static propTypes = {};
  render() {
    return (
      <Container>
        <h1>Simon Hempenstall</h1>
        <h2>Full Stack Developer</h2>
        <Image src={require('../assets/profile-pic.jpg')} alt='profile image'/>
        <p>I got my first taste of coding several years ago while working as a primary school teacher.
        There I learnt how to use Scratch to teach children the basics of programming.
        This sparked an interest in coding that has grown ever since.
        I left teaching a few years ago to work for a digital education company, where I was employed as a senior advisor for their website.
        In this role I got the chance to work alongside experienced software engineers and learnt some basic HTML / CSS.
        I quickly realised I wanted the developers jobs and I was in the wrong team!
        </p>
      </Container>
    );
  }
}
