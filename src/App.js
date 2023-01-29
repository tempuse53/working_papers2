import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import React, { Component } from 'react';

import Articlelist from './Articlelist';
import SearchBox from './Searchbox';

import articles from './working_papers.json';



class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: articles,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }


  render() {
    const filteredArticles = this.state.articles.filter(articles =>{
    return articles.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
          <br></br>
          <h1 className="card-text fs-10 fw-bold" >Working Papers</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Articlelist articles={filteredArticles}/>
        </div>
    );
  }
}

export default App;

