import React, { Component } from "react";
import { robots } from "../Components/robots.js"
import SearchBox from "../Components/Searchbox.js"
import CardList from '../Components/CardList.js';
import Scroll from "../Components/Scroll.js";
import "./App.css";





class App extends Component {
    constructor () {
        super();
        this.state = {
           robbots: robots,
           searchfield: "",
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
    render() {
        const filteredArrey = robots.filter((robots)=> {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());   
        })
        return (
            <div className='tc'>
            <h1 id="salam" className='f1'>Family ROBOT Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots= {filteredArrey} />
            </Scroll>
            </div>
        );
    }
}

export default App;