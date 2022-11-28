import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompanyRow from './Tables/CompanyRow';
import CompAdd from './Modals/CompAdd';

class Companies extends Component{

    constructor(props){
        super(props);
        this.state = {
            companies: []
        };
    }

    componentDidMount() {
        this.getCompsInfo();
    }

    getCompsInfo=()=>{
        let self = this;
        axios.get('/home/get/companies/info').then(function(response){
            self.setState({
                companies: response.data
            });
        });
    }

    render(){
        return(
            <div className='container'>
                <ToastContainer/>
                <CompAdd/>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'> FIRMY </div>
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col'>Meno</th>
                                        <th scope='col'>Popis</th>
                                        <th scope='col'>Možnosti</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { this.state.companies.map(function(x,i) {
                                        return <CompanyRow key={i} data={x} />
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

export default Companies;

if (document.getElementById('company_view')) {
    ReactDOM.render(<Companies/>, document.getElementById('company_view'));
}