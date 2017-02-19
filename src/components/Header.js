import React, { Component } from 'react';
import {
  Col,
  Navbar,
  Nav
} from 'react-bootstrap'

import '../styles/HeaderStyles.css'
import logo from '../assets/img/logo.png'
import logoText from '../assets/img/logoText.png'

export default class Header extends Component {
  render() {
    return (
      <Navbar 
        className="navBar"
        fixedTop
        fluid
      >
        <Nav
          className="nav"
          pullLeft
        > 
          <Col xsHidden>
          <img 
            className="logo"
            src={logo}
            alt='Logo'
          />
          </Col>
        </Nav>
        <Navbar.Header>
         <Navbar.Toggle className="toggle" />
          <Navbar.Brand>
            <a href='#'>
              <img 
                className="logoText"
                src={logoText}
                alt='Logo'
              />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}
