import axios from 'axios';
import React,{ Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DocUpdate extends Component{

    constructor(props){
        super(props);

        this.state = {
            docName: null,
            docLast: null,
            docMail: null
        }
    }

    docNameChange = (event) =>{
        this.setState({
            docName: event.target.value
        });
    }

    docMailChange = (event) =>{
        this.setState({
            docMail: event.target.value
        });
    }

    docLastChange = (event) =>{
        this.setState({
            docLast: event.target.value
        });
    }

    static getDerivedStateFromProps(props, current_state){
        let docUpdate = {
            docName: null,
            docLast: null,
            docMail: null
        };

        // Update from input
        if(current_state.docName && (current_state.docName !== props.data.docName)) return null;
        if(current_state.docLast && (current_state.docLast !== props.data.docLast)) return null;
        if(current_state.docMail && (current_state.docMail !== props.data.docMail)) return null;

        // Update from props
        if( current_state.docName !== props.data.docName || current_state.docName === props.data.docName ){
            docUpdate.docName = props.data.docName;
        }

        if( current_state.docLast !== props.data.docLast || current_state.docLast === props.data.docLast ){
            docUpdate.docLast = props.data.docLast;
        }

        if( current_state.docMail !== props.data.docMail || current_state.docMail === props.data.docMail ){
            docUpdate.docMail = props.data.docMail;
        }

        return docUpdate;
    }

    updateDoc = () =>{
        axios.post('/home/update/doc/info', {
            docID: this.props.docID,
            docName: this.state.docName,
            docLast: this.state.docLast,
            docMail: this.state.docMail
        }).then(() => {
            toast.success("Údaje boli aktualizované");
            setTimeout(() => {
                location.reload();
            }, 2500)
        });
    }

    render(){
        return(
            <div className="modal" id={'docUpdate_' + this.props.docID } tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Aktualizovať informácie</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <form className='form'>
                            <div className='form-group'>
                                <strong>Meno</strong><br/> 
                                <input type="text"
                                       id="docName"
                                       className='form-control mb-3'
                                       value={ this.state.docName ?? ""}
                                       onChange={ this.docNameChange }
                                />
                            </div>

                            <div className='form-group'>
                                <strong>Priezvisko</strong><br/> 
                                <input type="text"
                                       id="docLast"
                                       className='form-control mb-3'
                                       value={ this.state.docLast ?? ""}
                                       onChange={ this.docLastChange }
                                />
                            </div>

                            <div className='form-group'>
                                <strong>Email</strong><br/> 
                                <input type="text"
                                       id="docMail"
                                       className='form-control mb-3'
                                       value={ this.state.docMail ?? ""}
                                       onChange={ this.docMailChange }
                                />
                            </div>
                            
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="submit"
                               className='btn btn-info'
                               value="Aktualizovať"
                               onClick={ this.updateDoc }
                               data-bs-dismiss="modal"
                        />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zavrieť</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DocUpdate;