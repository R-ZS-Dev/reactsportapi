import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    constructor(){
        super();
        // console.log("HEEEEEEE");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?category=sport&apiKey=71b4debbee0c4895bb58cd471b552993";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles})
    }

  render() {
    return (
      <div className="container my-3">
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-4" key={element.url}>
                <NewsItems title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItems>
            </div>
            })}
        </div>
      </div>
    )
  }
}

export default News