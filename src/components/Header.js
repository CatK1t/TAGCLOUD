import React, { Component } 			from 'react';
import {Link} 										from 'react-router-dom';

class Header extends Component {



  render() {  
      return (
        <header id="header">
					<nav>
						<ul>
							<li><Link to={'/Home'}><h1>Home</h1></Link></li>
							<li><Link to={'/login'}><h1>Login</h1></Link></li>
						</ul>
					</nav>
        </header>
      );

  }


}

export default Header;
