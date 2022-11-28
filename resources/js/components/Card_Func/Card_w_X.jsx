import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Card_w_X extends Component{

    constructor(props){
        super(props); 

        this.state = {
            number: this.props.number,
            name: this.props.name,
            onSelect: this.props.onSelect,
            onDelete: this.props.onDelete,
            selected: this.props.selected
        }
    }

    name_pressed=()=>{
        this.state.onSelect(this.state.number);
    }

    x_pressed=()=>{
        this.state.onDelete(this.state.number);
    }

    selectedF=()=>{
        if(this.state.selected=="1"){
            return "p-3 mb-2 bg-light";
        }else{
            return "p-3 mb-2 bg-secondary";
        }
    }

    render() {
        let self = this;
        return (
            <div className='row' class={this.selectedF()} >
                <div className='col-md-1'/>
                <input className='col-md-10' onClick={this.name_pressed} type="button" value={this.state.name}/>
                <input className='col-md-1' onClick={this.x_pressed} type="button" value="X"/>
                
            </div>
        );
    }
}
export default Card_w_X;