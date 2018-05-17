import './App.css'
import React, { Component } from 'react'
import MainPage from './main_page/main_page'
import RedditSearch from './reddit_search/reddit_search'
import SearchResultsList from './search_results/search_results'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: undefined,
    }
  }

  render() {
    return (
      <div className="App">
        <MainPage/>
        <RedditSearch setAppState={this.setState.bind(this)}/>

        { this.state.results ?
          <SearchResultsList results={this.state.results} />
          :
          undefined
        }

      </div>
    )
  }
}

export default App

