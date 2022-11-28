import axios from 'axios';
import React,{ Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DrugDelete extends Component{

    constructor(props){
        super(props);
    }

    deleteDrug = () => {

        axios.delete('/home/delete/drug/' + this.props.drugID).then((response) => {
            toast.error("Údaje boli vymazané");
            setTimeout(() => {
                location.reload();
            }, 2500)
        });
    }

    render(){
        return(
            <div className="modal" id={'drugDelete_' + this.props.drugID } tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Vymazať liek</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Naozaj chcete vymazať záznam?
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className='btn btn-danger'
                                    onClick={ this.deleteDrug }
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

export default DrugDelete;