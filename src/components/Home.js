import React, { Component } 			from 'react';
import {connect} 									from 'react-redux';
import {Link} 										from 'react-router-dom';

import {getBaseAction} 						from '../actions/app';

class Home extends Component {

	componentDidMount(){
		this.props.getBase();
	}

	showTags() {

		let base = [];

		for(var j in this.props.base.app){

			let tags = this.props.base.app[j]; 
			
			if(JSON.stringify(this.props.base.app)){
				base.push(tags);
				}
			}
			
			return base.map((el,k)=>{
				let size = {
					fontSize: el.sentimentScore 
				}
				return <Link key={k} to={{pathname: el.id, state: {base}}}><span style={size} > {el.label}</span></Link>
			})
		}

  render() {
      
      return (
				
        <div className="Home">
					{this.showTags()}
        </div>
      );
  }
}

export default connect (
	state => ({
		base: state
	}),
	dispatch => ({
	  getBase: () => {
		  dispatch(getBaseAction());
	  }
	})
  )(Home);
