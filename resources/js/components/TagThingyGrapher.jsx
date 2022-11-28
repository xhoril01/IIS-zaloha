import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class TagThingyGrapher extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: props.name,
            close: props.handler,
        }
        
    }

    closer=()=>{
        this.props.handler(this.state.name);
    }

    render() {
        let self = this;
        return (
            <span id="TagThingySelector" class="m-2 p-3 bg-secondary rounded border">
                <label>{this.state.name}</label>
                <button type="button" class="btn btn-primary ml-1" onClick={self.closer}>X</button>
            </span>
        );
    }
}
export default TagThingyGrapher;