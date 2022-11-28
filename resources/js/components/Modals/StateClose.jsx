import axios from 'axios';
import React,{ Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class StateClose extends Component{

    constructor(props){
        super(props);
    }

    closeState = () => {
        axios.post('/home/prehlad_pacientov/info/close/state', { 
            stateID: this.props.stateID
        }).then(() => {
            toast.error("Stav bol ukončený");
            
            setTimeout(() => {
                location.reload();
            }, 2500)
        })
    }

    render(){
        return(
            <div className="modal" id={'stateClose_' + this.props.stateID } tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ukončiť stav</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Naozaj chcete ukončiť stav?
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className='btn btn-danger'
                                    onClick={ this.closeState }
                                    data-bs-dismiss="modal"
                            >
                                Áno
                            </button>
                            
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Nie</button>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default StateClose;