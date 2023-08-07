import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css'
import Scroll from './Scroll'



class App extends React.Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchField:" "
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                return response.json()
            }).then(users=>{
                {this.setState({robots:users})}
            })
        
    }

    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
        
    }
    render(){
        const filteredrobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length===0){
            return(
                <h1>LOADING...</h1>
            )
        }
        else{

        
    return(
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <Scroll>
             <CardList robots={filteredrobots} />    
            </Scroll>
            
            </div>
        )  
    }
   }
  

}

export default App;