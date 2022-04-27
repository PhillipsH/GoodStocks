import React from "react";
import { Link } from "react-router-dom";

const style = {
  cardBody: {
    width: "95%",
    margin: "1.5em",
    textAlign: "left",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  "link:hover": {
    color: "black",
  },
  UserTickerBox:{
    display: "flex",
    justifyContent:"space-between"
  }
};

const post = ({ id, title, poster, postBody, date, commentCount, ticker }) => {
  return (
    <Link to={"/ticker/" + ticker} style={style.link}>
      <div className="card" style={style.cardBody}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div style={style.UserTickerBox}>
            <h6 className="card-subtitle mb-2 text-muted">By: {poster}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{ticker}</h6>
          </div>

          <p className="card-text">{postBody}</p>
          <small className="card-text">{date}</small>
          <br></br>
          <a href={`/ticker/test/comments/${id}`} className="card-link">
            Comments({commentCount})
          </a>
        </div>
      </div>
    </Link>
  );
};

export default post;
