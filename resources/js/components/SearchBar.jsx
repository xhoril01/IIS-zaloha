import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            sid: props.sid,
            handler: props.handler,
        }
        
    }

    search=()=>{
        var x = document.getElementById("in_search"+this.state.sid).value;
        this.state.handler(x);
    }

    gid=()=>{
        return ("in_search"+this.state.sid);
    }

    render() {
        let self = this;
        return (
            <div id="searching_bar">
                <input id={self.gid()} onChange={()=>self.search()} type="text" placeholder="Vyhľadať..." />
            </div>
        );
    }
}
export default SearchBar;