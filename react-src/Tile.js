import React,{Component} from 'react';
import Button from './Button.js';

export class Tiles extends Component{
	render(){
		const tiles = this.props.tiles.map((tile,index) => {
			const heroStyle = {
				backgroundImage: 'url('+tile.backgroundImg+')'
			};

			const scMHod = {
				backgroundColor: tile.backgroundColor
			};

			switch(tile.type){
				case 'hero':
					return(
		      	<div key={index} className={"tile-hp tile-hp--" + tile.type} style={heroStyle}> 
			        <p className="tile-hp__primaryText" dangerouslySetInnerHTML={{__html: tile.primaryText}}></p>
			      </div>
		      );
		    case 'sc-m-hod':
		    	return(
		    		<div key={index} className={"tile-hp tile-hp--" + tile.type} style={scMHod}> 
			        <a className="tile-hp__container-link" href={tile.destination_path} style={{textDecoration: 'none'}}>
			        	<img className="tile-hp__icon" src={tile.backgroundImg} />
			        	<p className="tile-hp__primaryText">Shop and Compare</p>      
				        <div className="tile-hp__button">
				        	{tile.buttons.map((button,index)=>
					          <button key={index}>{button.title}</button>
					        )}
				        </div>
			        </a>
			      </div>
		    	);
		    case 'buttons':
		    	return(
		    		<div key={index} className={"tile-hp tile-hp--" + tile.type}> 
			        <p className="tile-hp__primaryText">What do you want to do?</p>      
			        {tile.buttons.map((button,index)=>
			          <button key={index}>{button.title}</button>
			        )}
			      </div>
		    	);
		    case 'general':
		    	return(
		    		<div key={index} className={"tile-hp tile-hp--" + tile.type}> 
			        <p className="tile-hp__primaryText"><strong>{tile.primaryText}</strong></p>    
			        <p className="tile-hp__secondaryText">{tile.secondaryText}</p>  
			        <div className="tile-hp__button">
			        	{tile.buttons.map((button,index)=>
				          <button style={{backgroundColor:button.background,color:button.color}} key={index}>{button.title}</button>
				        )}
			        </div>
			      </div>
		    	);
		    case 'general-2':
		    	return(
		    		<div key={index} className={"tile-hp tile-hp--" + tile.type}> 
		    			<img className="tile-hp__icon" src={tile.backgroundImg}></img>
			        <p className="tile-hp__primaryText"><strong>{tile.primaryText}</strong></p>    
			        <p className="tile-hp__secondaryText">{tile.secondaryText}</p> 
			        <p className="tile-hp__thirdText">{tile.thirdText}</p>
			        <input className="tile-hp__input" placeholder="Enter Street Address"></input>
			      </div>
		    	);
		     case 'abs':
		    	return(
		    		<div key={index} className={"container-fluid tile-hp tile-hp--" + tile.type} >
			      	<p className="tile__primaryText">{tile.primaryText}</p>
							<div className="container-fluid">
								<div className="row ">
									{tile.buttons.map((button,index)=>
					          			<Button key={index} img={button.img_path} text={button.title} destination={button.destination_path} >{button.title}</Button>
					        		)}
								</div>
						</div>
			      </div>
		    	);
				default:
					return(
		      	<div key={index} className={"tile-hp tile-hp--" + tile.type} style={heroStyle}> 
			        <p className="tile-hp__primaryText" dangerouslySetInnerHTML={{__html: tile.primaryText}}></p>      
			        {tile.buttons.map((button,index)=>
			          <button key={index}>{button.title}</button>
			        )}
			      </div>
		      );
			}

      
		});
		
		return(
			<div>
				{tiles}
			</div>
		);
	}
}

export default Tiles;