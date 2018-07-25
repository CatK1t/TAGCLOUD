import React, { Component } 			from 'react';
import {Link} 										from 'react-router-dom';
import {getTag} 									from '../actions/tag';
import {connect} 									from 'react-redux';

class TagInfos extends Component {


	constructor(props){

		super(props)
    this.state={
			tags:  this.props.getTags(this.props.state.match.params.id)
			
		}
  }

  render() { 
		console.log(this.props.base.tag.label)
      return (
        <header id="header">
					<nav>
						<ul>
							<li><Link to={'/Home'}><h1>h</h1></Link></li>
							<li><Link to={'/login'}><h1>Login</h1></Link></li>
						</ul>
					</nav>
        </header>
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
  )(TagInfos);
