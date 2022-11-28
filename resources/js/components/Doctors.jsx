import axios from 'axios';
import React,{ Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';
import DoctorRow from './Tables/DoctorRow';
import DocAdd from './Modals/DocAdd';


class Doctors extends Component{

    constructor(props){
        super(props);
        this.state = {
            doctors: []
        };
    }

    componentDidMount() {
        this.getDocsInfo();
    }

    getDocsInfo=()=>{
        let self = this;
        axios.get('/home/get/doctors/info').then(function(response){
            self.setState({
                doctors: response.data
            });
        });
    }

    render(){
        return(
            <div className='container'>
                <ToastContainer/>
                <DocAdd/>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'> DOKTORI </div>
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col'>Meno</th>
                                        <th scope='col'>Priezvisko</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Možnosti</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { this.state.doctors.map(function(x,i) {
                                        return <DoctorRow key={i} data={x} />
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

export default Doctors;

if (document.getElementById('doctor_view')) {
    ReactDOM.render(<Doctors/>, document.getElementById('doctor_view'));
}