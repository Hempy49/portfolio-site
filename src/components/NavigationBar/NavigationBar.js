import React, { Component } from 'react';
import { NavigationContainer, NavItem, StyledA, NavButton } from './NavigationBar.style'
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

class NavigationBar extends Component {
    render () {
      return (
        <NavButton>
        <NavigationContainer>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/projects'>Projects</NavItem>
        <NavItem to='/aboutMe'>About Me</NavItem>
        <StyledA href={'https://github.com/Hempy49/CV'}>Resume</StyledA>
        <NavItem to='/contact'>Contact</NavItem>
        </NavigationContainer>
        </NavButton>
      )
    }
  }

  export default NavigationBar;
