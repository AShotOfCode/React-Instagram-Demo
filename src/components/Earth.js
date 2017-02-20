import React, { Component } from 'react';

import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Button,
  Glyphicon
} from 'react-bootstrap'

import axios from 'axios'

import logo from '../assets/img/logo.png'
import '../styles/ContentStyles.css'

export default class Earth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      comments: [],
      scores: []
    }
  }

  componentDidMount = () => {
    this.httpGet('https://www.reddit.com/r/earthporn/top.json', this.getComments)
  }

  httpGet = (url, callback) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    const response = JSON.parse(xmlHttp.responseText)
    const posts = response.data.children
    console.log(posts)
    const scores = posts.map((post) => {
        return post.data.score
    })
    this.setState({ posts, scores }, callback)
    return xmlHttp.responseText;
  }

  getComments = () => {
    let { posts } = this.state
    posts = posts.map((post) => {
      return axios.get('https://www.reddit.com/r/earthporn/comments/' + post.data.id + '.json?')
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
            let numOfComments = this.state.comments[index].length
            let { scores } = this.state
            return (
              <Col xs={12} md={12} key={index}>
                <Thumbnail src={post.data.url} alt='This image is no longer here'>
                  <h4>
                    <b>{scores[index]} votes</b> 
                    <Button
                      className="heart"
                      bsClass="heart"
                      bsStyle="link"
                      onClick={() => {
                        var x = document.getElementsByClassName('heart')
                        if (x[index].style.color === 'red') {
                          x[index].style.color = 'rgba(0,0,0,0.3'
                          scores[index]--
                          console.log(scores[index])
                          this.setState({ scores })
                        } else {
                          x[index].style.color = 'red'
                          scores[index]++
                          console.log(scores[index])
                          this.setState({ scores })
                        }
                      }}
                    >
                      <Glyphicon
                        glyph="heart"
                        className="icon"
                      />
                    </Button>
                  </h4>
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
                    `View all ${numOfComments} comments`
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
