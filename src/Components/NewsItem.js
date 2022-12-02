import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/resources/wp-content/uploads/2016/08/headlines.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark" rel="noreferrer">
              Read More 
            </a>
            <h6 className="my-2"> Source: <span class="badge bg-danger"> {source} </span></h6>
            <p className="card-text"><small className="text-muted-bolder"> By {!author?"Unknown":author} on {new Date(date).toUTCString()} </small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
