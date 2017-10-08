import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style'
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

class NavigationBar extends Component {
    render () {
      return (
        <NavigationContainer>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/projects'>Projects</NavItem>
         </NavigationContainer>
      )
    }
  }

  export default NavigationBar;
