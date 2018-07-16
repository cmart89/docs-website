import React,{Component} from 'react';

class TileForm extends Component{
	render(){
		return( 
			<div>
				<h1>TileForm</h1>
				<form>
					<div className="form-group row">
						<label className="col-sm-3" htmlFor="type">type</label>
						<div className="col-sm-9">
							<select className="form-control" onChange={this.props.onChange} name="type">
								<option value="">---select a type---</option>
								<option value="hero">hero</option>
								<option value="general">general</option>
								<option value="general-2">general-2</option>
								<option value="abs">abs</option>
							</select>
						</div>
					</div>
					{this.props.tile[0].type !== "hero" &&
						<div className="form-group row">
							<label className="col-sm-3" htmlFor="color">color</label>
							<div className="col-sm-9">
								<input className="form-control" onChange={this.props.onChange} type="text" name="color"></input>
							</div>
						</div>
					}

					{this.props.tile[0].type !== "hero" &&
						<div className="form-group row">
							<label className="col-sm-3" htmlFor="backgroundColor">backgroundColor</label>
							<div className="col-sm-9">
								<input className="form-control" onChange={this.props.onChange} type="text" name="backgroundColor"></input>
							</div>
						</div>
					}

					{this.props.tile[0].type !== "" &&
						<div className="form-group row">
							<label className="col-sm-3" htmlFor="backgroundImg">backgroundImg</label>
							<div className="col-sm-9">
								<input className="form-control" onBlur={this.props.onChange} type="text" name="backgroundImg"></input>
							</div>
						</div>
					}

					{this.props.tile[0].type !== "" &&
						<div className="form-group row">
							<label className="col-sm-3" htmlFor="primaryText">primaryText</label>
							<div className="col-sm-9">
								<input className="form-control" onChange={this.props.onChange} type="text" name="primaryText"></input>
							</div>
						</div>
					}

					{this.props.tile[0].type !== "hero" &&
						<div className="form-group row">
							<label className="col-sm-3" htmlFor="secondaryText">secondaryText</label>
							<div className="col-sm-9">
								<input className="form-control" onChange={this.props.onChange} type="text" name="secondaryText"></input>
							</div>
						</div>
					}

					{this.props.tile[0].type !== "hero" &&
						<div className="form-group row">
							<label className="col-sm-3" htmlFor="thirdText">thirdText</label>
							<div className="col-sm-9">
								<input className="form-control" onChange={this.props.onChange} type="text" name="thirdText"></input>
							</div>
						</div>
					}

					{this.props.tile[0].type !== "hero" &&
						<div className="form-group row">
						<label className="col-sm-3" htmlFor="destination">destination</label>
						<div className="col-sm-9">
							<input className="form-control" onChange={this.props.onChange} type="text" name="destination"></input>
						</div>
					</div>	
					}

				</form>
			</div>
		);
	}
}

export default TileForm;