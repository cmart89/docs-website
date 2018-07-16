import React, { Component } from 'react';

class Button extends Component {
	render() {
		return(
				<div className="col-6 col-md-4 text-center" >
						<a href={this.props.destination} className="tile__button">
							<div className="tile__icon">
								<img src={this.props.img} height="100" width="100" alt=''/>
							</div>
							<div className="tile__secondaryText">
								<p>{this.props.text}</p>
							</div>
						</a>
				</div>
		);
	}
}

export default Button;