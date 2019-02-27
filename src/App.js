import React, { Component } from "react";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/custom.css";
import "./styles/styles.scss";
import { getReddit, setLoading } from "./Redux/ActionCreators/reddits";
import { connect } from "react-redux";
import RedditCard from "./Components/RedditCard/RedditCard";
import Helper from "./Helper/helper";
import config from "./Constants/config";
import LoadingIcon from "./Assets/images/loading.gif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reddits: {}
    };
    this.setStateData = this.setStateData.bind(this);
    this.getRedditdata = this.getRedditdata.bind(this);
    this.createSubreddits = this.createSubreddits.bind(this);
  }

  componentDidMount() {
    Helper.getData(config.subreddits[0]).then(response => {
      this.setStateData("reddits", response);
    });
    // if (window.myWorker) {
    //   window.myWorker.postMessage("Hello World");
    //   // window.myWorker.onmessage = function(e) {
    //   //   redditData = e.data.page.data.data.children;
    //   //   debugger;
    //   //   redditWidget = redditData.map(item => {
    //   //     return <RedditCard redditData={item.data} />;
    //   //   });
    //   //   this.
    //   //   console.log("DATA", redditWidget);
    //   // };
    // }
  }

  componentWillReceiveProps(nextProps, nextState) {
    debugger;
    if (nextProps.reddit.redditName !== this.props.reddit.redditName) {
      Helper.getData(nextProps.reddit.redditName).then(response => {
        this.setStateData("reddits", response);
        this.props.dispatch(setLoading(false));
      });
    }
  }

  setStateData(key, data) {
    this.setState({
      [key]: data
    });
  }

  getRedditdata(redditName) {
    this.props.dispatch(getReddit(redditName));
  }

  createSubreddits() {
    let redditView = <div />;
    if (this.state.reddits.data) {
      let redditData = this.state.reddits.data.children || {};
      redditView = redditData.map((item, key) => {
        return <RedditCard key={key} redditData={item.data} /> || <div />;
      });
    }
    return redditView;
  }

  render() {
    return (
      <div>
        <Header
          clickHandler={this.getRedditdata}
          selectedCat={this.props.reddit.redditName}
        />
        <div className="main-body">
          {this.props.loading ? (
            <div className="loading">
              <img src={LoadingIcon} height="100px" width="100px" />
            </div>
          ) : (
            this.createSubreddits()
          )}
        </div>
      </div>
    );
  }
}

const mapStateToPrps = state => ({
  reddit: state.reddit,
  loading: state.loading
});

export default connect(
  mapStateToPrps,
  null
)(App);
