import axios from 'axios';
import React,{ Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CompAdd extends Component{

    constructor(props){
        super(props);

        this.state = {
            compName: null,
            compAddr: null,
            compPhone: null,
            compMail: null,
            compDesc: null,
            compPwd: null,
            username: null,
            userlast: null,
            usermail: null,
        }
    }

    compNameInput = (event) =>{
        this.setState({
            compName: event.target.value
        })
    }

    compAddrInput = (event) =>{
        this.setState({
            compAddr: event.target.value
        })
    }

    compPhoneInput = (event) =>{
        this.setState({
            compPhone: event.target.value
        })
    }

    compMailInput = (event) =>{
        this.setState({
            compMail: event.target.value
        })
    }

    compDescInput = (event) =>{
        this.setState({
            compDesc: event.target.value
        })
    }

    compPwdInput = (event) =>{
        this.setState({
            compPwd: event.target.value
        })
    }

    compUserNameInput = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    compUserLastInput = (event) =>{
        this.setState({
            userlast: event.target.value
        })
    }

    compUserMailInput = (event) =>{
        this.setState({
            usermail: event.target.value
        })
    }

    compAdd = () => {
        axios.post('/home/add/company', {
            compName: this.state.compName,
            compAddr: this.state.compAddr,
            compPhone: this.state.compPhone,
            compMail: this.state.compMail,
            compDesc: this.state.compDesc,
            compPwd: this.state.compPwd,
            username: this.state.username,
            userlast: this.state.userlast,
            usermail: this.state.usermail

        }).then(() => {
            toast.success("Údaje boli pridané");
            setTimeout(() => {
                location.reload();
            }, 1500)
        });
    }

    render(){
        return(
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className='btn btn-primary text-right col-3 offset-md-9'
                            data-bs-toggle='modal'
                            data-bs-target='#compAdd'
                    >
                        Pridať firmu
                    </button>
                </div>
                <div className="modal" id='compAdd' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Pridať firmu</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='form'>
                                    
                                    <div className='form-group'>
                                        <input type="text"
                                               id="compName"
                                               className='form-control mb-3'
                                               placeholder='Meno firmy'
                                               onChange={ this.compNameInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                               id="compAddr"
                                               className='form-control mb-3'
                                               placeholder='Adresa firmy'
                                               onChange={ this.compAddrInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                            id="compPhone"
                                            className='form-control mb-3'
                                            placeholder='Kontakt'
                                            onChange={ this.compPhoneInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                            id="compMail"
                                            className='form-control mb-3'
                                            placeholder='Email firmy'
                                            onChange={ this.compMailInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                            id="compDesc"
                                            className='form-control mb-3'
                                            placeholder='Popis firmy'
                                            onChange={ this.compDescInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div>
                                        <h5><strong>Prihlasovacie údaje</strong></h5> 
                                    </div>

                                    <div className='form-group'>
                                        <input type="text"
                                               id="userName"
                                               className='form-control mb-3 password'
                                               placeholder='Meno'
                                               onChange={ this.compUserNameInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                               id="userLast"
                                               className='form-control mb-3 password'
                                               placeholder='Priezvisko'
                                               onChange={ this.compUserLastInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="text"
                                               id="userMail"
                                               className='form-control mb-3 password'
                                               placeholder='Email'
                                               onChange={ this.compUserMailInput }
                                        />
                                    </div>

                                    <div><br/></div>

                                    <div className='form-group'>
                                        <input type="password"
                                               id="compPwd"
                                               className='form-control mb-3 password'
                                               placeholder='Heslo'
                                               onChange={ this.compPwdInput }
                                        />
                                    </div>

                                    
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input type="button"
                                    className='btn btn-info'
                                    value="Vytvoriť"
                                    onClick={ this.compAdd }
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

export default CompAdd;