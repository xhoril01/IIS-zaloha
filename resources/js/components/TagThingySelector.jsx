import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class TagThingySelector extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: props.name,
            handler: props.handler,
        }
        
    }

    functt=()=>{
        this.state.handler(this.state.name);
    }


    render() {
        let self = this;
        return (
            <div id="TagThingySelector">
                <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={self.functt}>{self.state.name}</button>
            </div>
        );
    }
}
export default TagThingySelector;