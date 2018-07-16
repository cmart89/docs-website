import React, { Component } from 'react';
import Tile from './Tile.js';
import Navbar from './Navbar.js';
import TileForm from './TileForm.js';
import ButtonsForm from './ButtonsForm.js';


class App extends Component {
  state = {
    tiles:[
      {
        type: "",
        color: "",
        backgroundImg: "",
        primaryText: "",
        secondaryText:"",
        thirdText: "",
        destination: "",
        buttons: []
      }
    ]
  }

  onChange = (e) => {
    //set the values of the new tile object based on the form values submited
    const newTiles = [{...this.state.tiles[0]}];

    newTiles[0] = {
      ...newTiles[0],
      [e.target.name] : e.target.value
    }

    this.setState({
      tiles: newTiles
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.type.value);

    //set the values of the new tile object based on the form values submited
    const newTiles = [
      {
        type: e.target.type.value,
        color: e.target.color.value,
        backgroundImg: e.target.backgroundImg.value,
        backgroundColor: e.target.backgroundColor.value,
        primaryText: e.target.primaryText.value,
        secondaryText: e.target.secondaryText.value,
        thirdText: e.target.thirdText.value,
        destination: e.target.destination.value,
        buttons: []
      }
    ];

    this.setState({
      tiles: newTiles
    });

  }

  onAddButton = () => {
    var newTiles = [...this.state.tiles];

    var newButton = {
      title: "",
      background: "",
      color: "",
      img_path: ""
    };
    var newButtonsArray = [...this.state.tiles[0].buttons,newButton];

    newTiles[0].buttons = newButtonsArray;

    this.setState({tiles: newTiles});
  }

  buttonOnChange = (e,index) => {
    var newTiles = [...this.state.tiles]

    newTiles[0].buttons[index] = {
      ...newTiles[0].buttons[index],
      [e.target.name]: e.target.value
    }

    this.setState({tiles:newTiles});

  }

  onRemove = (index) => {

    console.log(index);

    //create newTiles
    var newTiles = [...this.state.tiles];

    //delete the element in index
    newTiles[0].buttons.splice(index,1);

    console.log(newTiles[0].buttons);

    //set tiles = newTiles
    this.setState({
      tiles: newTiles
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-6">
            <TileForm 
              tile={this.state.tiles}
              onSubmit={this.onSubmit} 
              onChange={this.onChange}/>
          </div>
          <div className="col-md-6">
            <ButtonsForm 
              tile={this.state.tiles}
              onAddButton={this.onAddButton} 
              onRemove={this.onRemove} 
              buttonOnChange={this.buttonOnChange}/>
          </div>
          <div className="col-md-12">
            <h2>Tile Result</h2>
            <Tile 
              tiles={this.state.tiles}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;