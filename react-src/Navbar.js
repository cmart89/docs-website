import React,{Component} from 'react';

export class Navbar extends Component{
	render(){
		return(
			<div className="navbar--hp">
				<a className="navbar__logo" href="#"><img src="../images/homepage/logo.PNG"></img></a>
				<div className="navbar__hamburger">
					<button type="button" className="menu-toggle navbar-toggle collapsed">
            <span className="sr-only">Toggle navigation</span>
            <span className="menu-toggle__span menu-toggle__span--first icon-bar"></span>
            <span className="menu-toggle__span menu-toggle__span--second icon-bar"></span>
            <span className="menu-toggle__span menu-toggle__span--last icon-bar"></span>
          </button>
				</div>
				<a className="navbar__store-locator" href="#"></a>
			</div>
		);
	}
}

export default Navbar; 