import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={!imageUrl?"https://bilder.bild.de/fotos/nba-golden-state-warriors-sind-neuer-nba-champion-superstar-steph-curry-heult-vor-freude-b623070a6983454fbc71db154096a7be-80426732/Bild/3.bild.jpg":imageUrl} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    )
  }
}

export default NewsItems