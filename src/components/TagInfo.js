import React, { Component } 			from 'react';
import {getTag} 									from '../actions/tag';
import {connect} 									from 'react-redux';


class TagInfo extends Component {

	constructor(props){
		super(props)

		this.tag = {
			sentiment: {}
		}
	}

	componentDidMount(){
		this.props.getTags(this.props.state.match.params.id);
	}

	listType() {
		var listTypes = []
		for(var i in this.props.base.tag.pageType){
			listTypes.push(i+': '+ this.props.base.tag.pageType[i]+';')
		}
		
		return listTypes.map((el,k)=>{
			var html = <ul key={k}><li>{el}</li></ul>;
			return html;
		});
	}

	total(e) {
		let sentiment = {...e};
		let positive =  sentiment.positive ? +sentiment.positive : 0;
		let neutral  = 	sentiment.neutral  ? +sentiment.neutral  : 0;
		let negative = 	sentiment.negative ? +sentiment.negative : 0;

		this.tag.sentiment.positive = positive;
		this.tag.sentiment.neutral  = neutral;
		this.tag.sentiment.negative = negative;

		let sum = positive + neutral + negative;
		return sum;
	}

  render() {  
      return (
        <div className="TagInfo">
					<h1>Tag Info</h1>
					<div className="info">
						<span> Label: {this.props.base.tag.label} </span>
						<span> Total Mentions: {this.total(this.props.base.tag.sentiment)} </span>
						<span> Positive Mentions: {this.tag.sentiment.positive} </span>
						<span> Neutral Mentions: {this.tag.sentiment.neutral} </span>
						<span> Negative Mentions: {this.tag.sentiment.negative} </span>
						<span className="listTypes"> List of page types: {this.listType()} </span>
					</div>
        </div>
      );
  }
}
export default connect (
	state => ({
		base: state
	}),
	dispatch => ({
		getTags: (e) => {
			dispatch(getTag(e));
		}
	})
  )(TagInfo);

