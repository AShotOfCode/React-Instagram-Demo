import React, { Component } from 'react';
import {
  Col,
  Navbar,
  Nav,
  NavItem,
  Button,
  Glyphicon,
  Row,
  Grid
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
            <img 
              className="logo"
              src={logo}
              alt='Logo'
            />
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
        <Nav>
          <NavItem 
            eventKey={1}
            className="navItem" 
            href="#earth"
            onClick={() => this.props.changeTab('earth')}
          >
            <Button
              className="heartheader"
              bsClass="heartheader"
              bsStyle="link"
              // onClick={() => {
              //   var x = document.getElementsByClassName('heart')
              //   if (x[index].style.color === 'red') {
              //     x[index].style.color = 'rgba(0,0,0,0.3'
              //     scores[index]--
              //     console.log(scores[index])
              //     this.setState({ scores })
              //   } else {
              //     x[index].style.color = 'red'
              //     scores[index]++
              //     console.log(scores[index])
              //     this.setState({ scores })
              //   }
              // }}
            >
              <Glyphicon
                glyph="globe"
                className="icon"
              />
            </Button>
          </NavItem>
          <NavItem 
            eventKey={2} 
            href="#food"
            className="navItem" 
            onClick={() => this.props.changeTab('food')}
          >
          <Button
              className="heartheader"
              bsClass="heartheader"
              bsStyle="link"
              // onClick={() => {
              //   var x = document.getElementsByClassName('heart')
              //   if (x[index].style.color === 'red') {
              //     x[index].style.color = 'rgba(0,0,0,0.3'
              //     scores[index]--
              //     console.log(scores[index])
              //     this.setState({ scores })
              //   } else {
              //     x[index].style.color = 'red'
              //     scores[index]++
              //     console.log(scores[index])
              //     this.setState({ scores })
              //   }
              // }}
            >
              <Glyphicon
                glyph="leaf"
                className="icon"
              />
            </Button>
          </NavItem>
          <NavItem 
            eventKey={3}
            className="navItem" 
            href="#art"
            onClick={() => this.props.changeTab('art')}
          >
          <Button
              className="heartheader"
              bsClass="heartheader"
              bsStyle="link"
              // onClick={() => {
              //   var x = document.getElementsByClassName('heart')
              //   if (x[index].style.color === 'red') {
              //     x[index].style.color = 'rgba(0,0,0,0.3'
              //     scores[index]--
              //     console.log(scores[index])
              //     this.setState({ scores })
              //   } else {
              //     x[index].style.color = 'red'
              //     scores[index]++
              //     console.log(scores[index])
              //     this.setState({ scores })
              //   }
              // }}
            >
              <Glyphicon
                glyph="picture"
                className="icon"
              />
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
