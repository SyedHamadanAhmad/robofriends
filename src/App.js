import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css'



class App extends React.Component {
    constructor(){
        super()
        this.state={
            robots:robots,
            searchField:" "
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
        
    }
    render(){
        const filteredrobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
    return(
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <CardList robots={filteredrobots} />
            </div>
        )  
      
   }
  
}

export default App;