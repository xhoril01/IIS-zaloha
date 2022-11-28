import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import TagGetterWindow from './TagGetterWindow';
import { IoIosAddCircleOutline } from "react-icons/io";

class PlusButton extends Component{

    constructor(props){
        super(props);

        this.state = {
            type: props.type,
            handler: props.handler,
        }
        
    }

    get_modal_id=()=>{
        return "#tag_modal"+this.state.type;
    }

    render() {
        let self = this;
        return (
            <div id="plus_button">
                <button type="button" class="btn btn-primary fs-5" data-bs-toggle="modal" data-bs-target={self.get_modal_id()}><IoIosAddCircleOutline/></button>
                <TagGetterWindow type={self.state.type} handler={self.state.handler} />
            </div>
        );
    }
}
export default PlusButton;

if (document.getElementById('plus_butt')) {
    ReactDOM.render(<PlusButton />, document.getElementById('plus_butt'));
}