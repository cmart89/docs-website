import React,{Component} from 'react';

class ButtonsForm extends Component{
	render(){
		const buttonsList = this.props.tile[0].buttons.map((button,index) => 
			<div key={index}>
				<h4>Button {index+1} <button className="btn btn-sm btn-danger" onClick={(e) => this.props.onRemove(index)}>remove</button></h4>
				<div className="form-group row clearfix">
					<label className="col-sm-2" htmlFor="title">title</label>
					<div className="col-sm-10">
						<input className="form-control" value={this.props.tile[0].buttons[index].title} onChange={(e) => this.props.buttonOnChange(e,index)} name="title"></input>
					</div>
				</div>
				<div className="form-group row clearfix">
					<label className="col-sm-2" htmlFor="background">background</label>
					<div className="col-sm-10">
						<input className="form-control" value={this.props.tile[0].buttons[index].background} onChange={(e) => this.props.buttonOnChange(e,index)} name="background"></input>
					</div>
				</div>
				<div className="form-group row clearfix">
					<label className="col-sm-2" htmlFor="color">color</label>
					<div className="col-sm-10">
						<input className="form-control" value={this.props.tile[0].buttons[index].color} onChange={(e) => this.props.buttonOnChange(e,index)} name="color"></input>
					</div>
				</div>
				<div className="form-group row clearfix">
					<label className="col-sm-2" htmlFor="img_path">img_path</label>
					<div className="col-sm-10">
						<input className="form-control" placeholder={this.props.tile[0].buttons[index].img_path} onBlur={(e) => this.props.buttonOnChange(e,index)} name="img_path"></input>
					</div>
				</div>				
			</div>
		);
		return(
			<div>
				<h1>ButtonsForm</h1>
				{buttonsList}
				<button className="btn btn-lg btn-default" name="add" onClick={this.props.onAddButton}>Add a button</button>
			</div>
		);
	}
}

export default ButtonsForm;