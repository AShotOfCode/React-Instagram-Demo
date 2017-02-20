import React, { Component } from 'react';

import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Button,
} from 'react-bootstrap'

import axios from 'axios'

import logo from '../assets/img/logo.png'
import '../styles/ContentStyles.css'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      comments: []
    }
  }

  componentDidMount = () => {
    this.httpGet('https://www.reddit.com/r/EarthPorn/top.json', this.getComments)
  }

  httpGet = (url, callback) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    const response = JSON.parse(xmlHttp.responseText)
    const posts = response.data.children
    this.setState({ posts }, callback)
    return xmlHttp.responseText;
  }

  getComments = () => {
    let { posts } = this.state
    posts = posts.map((post) => {
      return axios.get('https://www.reddit.com/r/EarthPorn/comments/' + post.data.id + '.json?')
    })
    axios.all(posts)
    .then((results) => {
      const comments = results.map((post) => {
        return post.data[1].data.children
      })
      this.setState({ comments })
    })
  }
  render() {
    if (this.state.comments.length === 0) {
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
              <Col xs={12} md={12} key={index}>
                <Thumbnail src={post.data.url} alt='This image is no longer here'>
                  <h4><b>{post.data.score} likes</b></h4>
                  <h4><b>{post.data.author}</b> - {post.data.title}</h4>
                  {this.state.comments[index].map((comment, index) => {
                      if (index < 3) {
                        return <p><b>{comment.data.author}</b> - {comment.data.body}</p>
                      } else {
                        return null
                      }
                    })
                  }
                  <a href={'http://reddit.com' + post.data.permalink}>{this.state.comments[index].length > 3
                    ? 
                    `View all ${this.state.comments[index].length} comments`
                    : ''}
                    </a>
                </Thumbnail>
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}
