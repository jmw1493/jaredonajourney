import React, { Component } from 'react';
// import Day1 from './travel-blogs/day1.jsx';

class TravelBlogs extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    if (this.props.HS) this.props.toggleHS();
    fetch('/get-travel-blogs')
      .then(res => res.json())
      .then((articles) => {
        console.log('fetch was successful')
        this.setState({articles})
      })
      .catch((err) => console.log('this is an error: ' + err))
  }

  render() {
    // if (this.state.articles[0]) console.log(typeof this.state.articles[0].title)
    return (
      <div id='travel-blogs'>
        <div id='travel-blogs-header'>
          <h2>TravelBlogs</h2>
        </div>
        <div id='travel-blogs-main'>
          {this.state.articles.map((article, i) =>
            <div className='preview' key={i}>
              <h2>{article.title}</h2>
              <img src={article.mainPic} alt='random pic'/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TravelBlogs;