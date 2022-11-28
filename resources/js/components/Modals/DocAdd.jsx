import axios from 'axios';
import React,{ Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DocAdd extends Component{

    constructor(props){
        super(props);

        this.state = {
            docName: null,
            docLast: null,
            docMail: null,
            docPwd: null,
        }
    }

    docNameInput = (event) =>{
        this.setState({
            docName: event.target.value
        })
    }

    docLastInput = (event) =>{
        this.setState({
            docLast: event.target.value
        })
    }

    docEmailInput = (event) =>{
        this.setState({
            docMail: event.target.value
        })
    }

    docPwdInput = (event) =>{
        this.setState({
            docPwd: event.target.value
        })
    }

    docAdd = () => {
        axios.post('/home/add/doctor', {
            docName: this.state.docName,
            docLast: this.state.docLast,
            docMail: this.state.docMail,
            docPwd: this.state.docPwd
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
                            data-bs-target='#docAdd'
                    >
                        Pridať doktora
                    </button>
                </div>
                <div className="modal" id='docAdd' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Pridať doktora</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='form'>
                                    <div className='form-group'>
                                        <input type="text"
                                               id="docName"
                                               className='form-control mb-3'
                                               placeholder='Meno doktora'
                                               onChange={ this.docNameInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                               id="docLast"
                                               className='form-control mb-3'
                                               placeholder='Priezvisko doktora'
                                               onChange={ this.docLastInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                               id="docMail"
                                               className='form-control mb-3'
                                               placeholder='Email doktora'
                                               onChange={ this.docEmailInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="password"
                                               id="docPwd"
                                               className='form-control mb-3 password'
                                               placeholder='Heslo'
                                               onChange={ this.docPwdInput }
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input type="button"
                                    className='btn btn-info'
                                    value="Vytvoriť"
                                    onClick={ this.docAdd }
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

export default DocAdd;