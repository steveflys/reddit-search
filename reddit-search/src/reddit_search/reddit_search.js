import React, { Component } from 'react'
import superagent from 'superagent'

class RedditSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFormBoard: '',
      searchFormLimit: 0,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    superagent.get(`http://www.reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`)
    .then(res => this.props.setAppState({results: res.body.data.children}))
    .catch(console.error)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="reddit-search">
        <form onSubmit={this.handleSubmit}>
        Board
          <input
            type="text"
            name="searchFormBoard"
            value={this.state.searchFormBoard}
            onChange={this.handleChange}/><br/>
        Max Number of Results
          <input
            type="number" min="0" max="100"
            name="searchFormLimit"
            value={this.searchFormLimit}
            onChange={this.handleChange}/>

          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default RedditSearch