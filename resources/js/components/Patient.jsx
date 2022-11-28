import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PatientRow from './Tables/PatientRow';
import PatientAdd from './Modals/PatientAdd';

class Patient extends Component{

    constructor(props){
        super(props);
        this.state = {
            patients: []
        };
    }

    componentDidMount() {
        this.getPatsInfo();
    }

    getPatsInfo=()=>{
        let self = this;
        axios.get('/home/get/patients/info').then(function(response){
            self.setState({
                patients: response.data
            });
        });
    }

    render(){
        return(
            <div className='container'>
                <ToastContainer/>
                <PatientAdd/>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header text-center'><h2>PACIENTI</h2> </div>
                            <table className="table table-hover">
                                <thead className="thead-dark ">
                                    <tr className='align-middle'>
                                        <th scope='col'><p className='fs-5' style={{ marginBottom: 0 }}>#</p></th>
                                        <th scope='col'><p className='fs-5' style={{ marginBottom: 0 }}>Meno</p></th>
                                        <th scope='col'><p className='fs-5' style={{ marginBottom: 0 }}>Priezvisko</p></th>
                                        <th scope='col'><p className='fs-5' style={{ marginBottom: 0 }}>Možnosti</p></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { this.state.patients.map(function(x,i) {
                                        return <PatientRow key={i} data={x} />
                                    })} 
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>
            </div>
            );
        }
}

export default Patient;

if (document.getElementById('patient_view')) {
    ReactDOM.render(<Patient/>, document.getElementById('patient_view'));
}