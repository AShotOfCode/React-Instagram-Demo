import React, { Component } from 'react';

import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Button,
} from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import '../styles/ContentStyles.css'
export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    this.httpGet('https://www.reddit.com/r/EarthPorn/top.json')
  }

  httpGet = (url) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    const response = JSON.parse(xmlHttp.responseText)
    const posts = response.data.children
    this.setState({ posts })
    return xmlHttp.responseText;
  }
  render() {
    if (this.state.posts.length === 0) {
      return (
        <p>Loading...</p>
      )
    }
    else 
    return (
      <Grid>
        <Row>
          {this.state.posts.map((post, index) => {
            return (
              <Col xs={12} md={12}>
                <Thumbnail src={post.data.url} alt='This image is no longer here'>
                  <h4><b>{post.data.author}</b> - {post.data.title}</h4>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}
