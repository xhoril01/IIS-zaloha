
import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Card_wt_X extends Component{

    constructor(props){
        super(props); 

        this.state = {
            number: this.props.number,
            name: this.props.name,
            onSelect: this.props.onSelect,
            selected: this.props.selected
        }
    }

    get_name=()=>{
        return this.state.name;
    }

    name_pressed=()=>{
        this.state.onSelect(this.state.number);
    }

    render() {
        let self = this;
        return (
            <div class="p-3 mb-2 bg-light row">
                <div lassName='col-md-1'/>
                <input className='col-md-10' onClick={this.name_pressed} type="button" value={this.get_name()}/>
                <div lassName='col-md-1'/>
            </div>
        );
    }
}
export default Card_wt_X;