import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class SingleComponent extends Component{
	render(){
		return(
			<h1>SingleComponent</h1>
		);
	}
}

ReactDOM.render(<SingleComponent/>,document.getElementById('single-component'));
