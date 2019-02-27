import React from "react";
import Card from "react-bootstrap/Card";
import default_poster from "../../Assets/images/default_poster.jpg";
import {
  FaVideo,
  FaCommentAlt,
  FaAward,
  FaShare,
  FaSave
} from "react-icons/fa";

const RedditCard = props => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <div className="info">
            <span>
              <FaVideo />
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;
              <strong>{props.redditData.subreddit_name_prefixed}</strong>
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;Posted by {props.redditData.author_fullname}
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;{props.redditData.created_utc} hours ago
            </span>
          </div>
          <h2 className="title">{props.redditData.title}</h2>
          <div className="link">
            <span>
              {props.redditData.permalink}...
              <img src="" height="10px" width="10px" />
            </span>
          </div>
        </Card.Header>
        <Card.Body>
          {props.redditData.url || props.redditData.thumbnail ? (
            <Card.Img
              src={
                props.redditData.url ||
                props.redditData.thumbnail ||
                default_poster
              }
            />
          ) : (
            <Card.Img src={default_poster} />
          )}
        </Card.Body>
        <Card.Footer>
          <span className="comments">
            &nbsp;&nbsp;&nbsp;
            <FaCommentAlt /> &nbsp;&nbsp;<strong>comments</strong>
          </span>
          <span className="awards">
            &nbsp;&nbsp;&nbsp;
            <FaAward /> &nbsp;&nbsp;<strong>Award</strong>
          </span>
          <span className="share">
            &nbsp;&nbsp;&nbsp;
            <FaShare /> &nbsp;&nbsp;<strong>Share</strong>
          </span>
          <span className="Save">
            &nbsp;&nbsp;&nbsp;
            <FaSave />
            &nbsp;&nbsp;
            <strong>Save</strong>
          </span>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default RedditCard;
