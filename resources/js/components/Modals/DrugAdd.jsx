import axios from 'axios';
import React,{ Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DrugAdd extends Component{

    constructor(props){
        super(props);

        this.state = {
            drugName: null,
            drugVers: null,
            drugType: null,
            compName: null
        }
    }

    drugNameInput = (event) =>{
        this.setState({
            drugName: event.target.value
        })
    }

    drugVersrInput = (event) =>{
        this.setState({
            drugVers: event.target.value
        })
    }

    drugTypeInput = (event) =>{
        this.setState({
            drugType: event.target.value
        })
    }

    compNameInput = (event) =>{
        this.setState({
            compName: event.target.value
        })
    }

    drugAdd = () => {
        axios.post('/home/add/drug', {
            drugName: this.state.drugName,
            drugVers: this.state.drugVers,
            drugType: this.state.drugType,
            compName: this.state.compName,

        }).then(() => {
            toast.success("Údaje boli pridané");
            setTimeout(() => {
                location.reload();
            }, 2500)
        });
    }

    render(){
        return(
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className='btn btn-primary text-right col-3 offset-md-9'
                            data-bs-toggle='modal'
                            data-bs-target='#drugAdd'
                    >
                        Pridať liek
                    </button>
                </div>
                <div className="modal" id='drugAdd' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Pridať liek</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='form'>
                                    
                                    <div className='form-group'>
                                        <input type="text"
                                               id="drugname"
                                               className='form-control mb-3'
                                               placeholder='Názov lieku'
                                               onChange={ this.drugNameInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                               id="drugVers"
                                               className='form-control mb-3'
                                               placeholder='Verzia lieku'
                                               onChange={ this.drugVersrInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                            id="drugType"
                                            className='form-control mb-3'
                                            placeholder='Typ lieku'
                                            onChange={ this.drugTypeInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                            id="compName"
                                            className='form-control mb-3'
                                            placeholder='Spoločnosť'
                                            onChange={ this.compNameInput }
                                        />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <input type="button"
                                    className='btn btn-info'
                                    value="Vytvoriť"
                                    onClick={ this.drugAdd }
                                    data-bs-dismiss="modal"
                                />

                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zatvoriť</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DrugAdd;