import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PatientImg from './PatientImg';
import DoctorReport from './Tables/DoctorReport';
import PatientReport from './Tables/PatientReport';
import PatientStates from './Tables/PatientStates';
import PatientDrugs from './Tables/PatientDrugs';
import StateAdd from './Modals/StateAdd';
import PatDrugAdd from './Modals/PatDrugAdd';
import NewDocReport from './Modals/NewDocReport';
import ChangeVisitDate from './Modals/ChangeVisitDate';

class PatientInfo extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            patName: null,
            patLast: null,
            patMail: null,
            patGen: null,
            patAge: null,
            docReports: [],
            patReports: [],
            activeStates: [],
            inactiveStates: [],
            activeDrugs: [],
            inactiveDrugs: [],
            stateNames: [],
            nextVisit: null
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.post('/home/prehlad_pacientov/info/get/pats/data', {
            patient_id: this.props.id
        }).then((response) => {
            this.setState({
                patName: response.data[0].name,
                patLast: response.data[0].last_name,
                patMail: response.data[0].email,
                patGen: response.data[0].gender,
                patAge: response.data[0].age,
                nextVisit: response.data[0].next_visit,
            });
        });

        axios.post('/home/prehlad_pacientov/info/get/docs/reports', {
            patient_id: this.props.id
        }).then((response) => {
            this.setState({
                docReports: response.data
            })
        })

        axios.post('/home/prehlad_pacientov/info/get/pats/reports', {
            patient_id: this.props.id
        }).then((response) => {
            this.setState({
                patReports: response.data
            })
        })

        axios.post('/home/prehlad_pacientov/info/get/pats/active/states',{
            patient_id: this.props.id
        }).then((response) => {
            this.setState({
                activeStates: response.data
            });
        });

        axios.post('/home/prehlad_pacientov/info/get/pats/inactive/states',{
            patient_id: this.props.id
        }).then((response) => {
            this.setState({
                inactiveStates: response.data
            });
        });

        axios.post('/home/prehlad_pacientov/info/get/pats/active/drugs',{
            patient_id: this.props.id
        }).then((response) => {
            this.setState({
                activeDrugs: response.data
            });
        });

        axios.post('/home/prehlad_pacientov/info/get/pats/inactive/drugs',{
            patient_id: this.props.id
        }).then((response) => {
            this.setState({
                inactiveDrugs: response.data
            });
        });

    }

    render(){
        return(
            <div className='container'>
                <ToastContainer/>
                <div className='card border-dark bg-white'>
                    <div className='card-header text-center'>
                        <h2><strong> INFORMÁCIE O PACIENTOVI </strong></h2>
                    </div>

                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-4'> 
                                <PatientImg gender={ this.state.patGen }/>
                            </div>

                            <div className='col-md-4 fs-5'>
                                <strong>Meno: </strong>  { this.state.patName }<br/><br/>
                                <strong>Priezvisko: </strong>  { this.state.patLast }<br/><br/>
                                <strong>Email: </strong>  { this.state.patMail }<br/><br/>
                                <strong>Vek: </strong>  { this.state.patAge }<br/><br/>
                                <strong>Pohlavie: </strong>  { this.state.patGen }<br/><br/>
                                <strong>Dátum najbližšej kontroly: </strong>  {this.state.nextVisit} <br/>
                            </div>

                            <div className='col-md-4 d-flex flex-column justify-content-around align-center'>
                                <div className='p-2'>
                                    <NewDocReport patient_id = { this.props.id } />
                                </div>

                                <div className='p-2'>
                                    <button type='button' 
                                        className='btn btn-primary fs-5' 
                                        style={{ padding: 12 }}
                                        data-bs-toggle='modal'
                                        data-bs-target={'#changeVisitDate_' + this.props.id}>
                                                                    
                                            Zmeniť dátum kontroly
                                    </button>
                                    <ChangeVisitDate patient_id = {this.props.id} date = {this.state.nextVisit}/>

                                 </div>                                   
                            </div>
                        </div>
                        
                        <div><br/></div>

                        <div className='row justify-content-center'>

                            <div className='col-md-6'>
                                
                                <div className='card bg-light border-secondary mb-3 text-center overflow-scroll' style={{ height: 350 }}>
                                    <div className='card-header text-center'>
                                        <h4><strong><em> Stavy pacienta </em></strong></h4>
                                    </div>

                                    <div className='card-body'>
                                        <table className="table table-responsive-md">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope='col'>Stav</th>
                                                    <th scope='col'>Od</th>
                                                    <th scope='col'>Do</th>
                                                    <th scope='col'>Aktívne</th>
                                                </tr>
                                            </thead>
                                                
                                            <tbody>
                                                { this.state.activeStates.map(function(x,i) {
                                                    return <PatientStates key={i} data={x}/> 
                                                })}

                                                { this.state.inactiveStates.map(function(x,i) {
                                                    return <PatientStates key={i} data={x}/>
                                                })}
                                            </tbody>
                                        </table>

                                        <StateAdd patient_id = {this.props.id}/>

                                    </div>
                                    
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='card bg-light border-secondary mb-3 text-center overflow-scroll' style={{ height: 350 }}>
                                    
                                    <div className='card-header text-center'>
                                        <h4><strong><em> Lieky pacienta </em></strong></h4>
                                    </div>

                                    <div className='card-body'>
                                        <table className="table table-responsive-md">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope='col'>Názov</th>
                                                    <th scope='col'>Dávka</th>
                                                    <th scope='col'>Od</th>
                                                    <th scope='col'>Do</th>
                                                    <th scope='col'>Aktívne</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                { this.state.activeDrugs.map(function(x,i) {
                                                    return <PatientDrugs key={i} data={x}/>
                                                })}

                                                { this.state.inactiveDrugs.map(function(x,i) {
                                                    return <PatientDrugs key={i} data={x}/>
                                                })}
                                            </tbody>
                                        </table>

                                        <PatDrugAdd patient_id = {this.props.id}/>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-md-6'>
                                <div className='card bg-light border-secondary mb-3 text-center overflow-scroll' style={{ height: 350 }}>
                                    
                                    <div className='card-header text-center'>
                                        <h4><strong><em> Hlásenia doktora </em></strong></h4>
                                    </div>

                                    <div className='card-body'>
                                        <table className="table table-responsive-md">
                                            <thead className="thead-dark">
                                                <tr className='align-middle'>
                                                    <th scope='col'>Dátum</th>
                                                    <th scope='col'></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                { this.state.docReports.map(function(x,i) {
                                                        return <DoctorReport key={i} data={x} />
                                                })} 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='card bg-light border-secondary mb-3 text-center overflow-scroll' style={{ height: 350 }}>
                                    
                                    <div className='card-header text-center'>
                                        <h4><strong><em> Hlásenia pacienta </em></strong></h4>
                                    </div>

                                    <div className='card-body'>
                                        
                                        <table className="table table-responsive-md">
                                            <thead className="thead-dark">
                                                <tr className='align-middle'>
                                                    <th scope='col'><h7>Dátum</h7></th>
                                                    <th scope='col'></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                { this.state.patReports.map(function(x,i) {
                                                        return <PatientReport key={i} data={x} />
                                                })} 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            );
        }
}

export default PatientInfo;

if (document.getElementById('patient_info')) {
    ReactDOM.render(<PatientInfo id={document.getElementById('patient_info').getAttribute("patient_id")}/>, document.getElementById('patient_info'));
}