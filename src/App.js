import React, { Component } 			from 'react';
import {Switch, Route, Redirect} 	from 'react-router-dom';

import TagInfo  									from './components/TagInfo';
import Header   									from './components/Header';
import Footer    									from './components/Footer';
import Home 											from './components/Home';
import Login 											from './components/Login';

import 														'./App.css';

class App extends Component {

	render() {
		return (
			<div className="App container">
				<Header />

					<Switch>
						<Route 			 path='/Home' 					component={Home}/>
						<Route exact path='/login' 					component={Login}/>
						<Route 			 path='/:id' 						render= { props => <TagInfo state={props} isAuthed={true} />}/>
						<Redirect 	 from='/' to='/Home' />
					</Switch>

				<Footer />
			</div>
		);
	}
}

export default App;
