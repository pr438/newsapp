import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export default class NewsItem extends Component {
 
  render() {
    let {title,description,imgUrl,url,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span className="badge rounded-pill bg-danger"> {source}</span>
          </div>

          <img
            src={
              imgUrl
                ? imgUrl
                : "https://www.kitco.com/news/2022-05-13/images/goldchart_0513_am.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {(author = author ?? "Unknown")} On{" "}
                {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-dark btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
