import React, { Component } from 'react';

import Header from './components/Header'
import Earth from './components/Earth'
import Food from './components/Food'
import Art from './components/Art'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSubreddit: 'earth'
    }
  }

  changeTab = (tab) => {
    this.setState({ currentSubreddit: tab })
  }

  render() {
    const { currentSubreddit } = this.state
    let subreddit = 'Loading...'
    if (currentSubreddit === 'earth') {
      subreddit = (<Earth />)
    } else if (currentSubreddit === 'food') {
      subreddit = (<Food />)
    } else if (currentSubreddit === 'art') {
      subreddit = (<Art />)
    }
    return (
      <div className="App">
        <Header 
          changeTab={this.changeTab}
        />
        {subreddit}
      </div>
    );
  }
}

export default App;
