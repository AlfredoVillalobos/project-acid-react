import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tweetAction from '../actions/tweets'
import Tweets from '../component/Tweets';

class TweetsContainer extends Component {
  
  componentDidMount(){
    const { actions } = this.props
    actions.fetchTweet();
  }

  render(){
    return(
      <div>
        <Tweets {...this.props}/>
      </div>
    );
  };
}


const mapStateToProps = state => {
  return {
    tweets: state.tweets.tweets   
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(
      {...tweetAction}, dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetsContainer);