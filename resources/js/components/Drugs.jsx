import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DrugRow from './Tables/DrugRow';
import DrugAdd from './Modals/DrugAdd';

class Drugs extends Component{

    constructor(props){
        super(props);
        this.state = {
            drugs: []
        };
    }

    componentDidMount() {
        this.getDrugsInfo();
    }

    getDrugsInfo=()=>{
        let self = this;
        axios.get('/home/get/drugs/info').then(function(response){
            self.setState({
                drugs: response.data
            });
        });
    }

    render(){
        return(
            <div className='container'>
                <ToastContainer/>
                <DrugAdd/>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'> LIEKY </div>
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col'>Meno</th>
                                        <th scope='col'>Možnosti</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { this.state.drugs.map(function(x,i) {
                                        return <DrugRow key={i} data={x} />
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

export default Drugs;

if (document.getElementById('drug_view')) {
    ReactDOM.render(<Drugs/>, document.getElementById('drug_view'));
}