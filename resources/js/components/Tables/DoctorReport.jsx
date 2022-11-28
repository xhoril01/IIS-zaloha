import axios from 'axios';
import React,{ Component } from 'react';
import { BsSearch } from "react-icons/bs";
import DocReportInfo from '../Modals/DocReportInfo';

class DoctorReport extends Component{

    constructor(props){
        super(props);

        this.state = {
            ront: null,
            func: null,
            pain: null,
            swell: null,
            sediment: null,
            crp: null,
            vas: null,
            vasP: null,
            das: null
        }
    }

    getInfo = (id) => {
        axios.post('/home/prehlad_pacientov/info/get/doc/reports/data', {
            patient_id: id
        }).then((response) => {
            this.setState({
                ront: response.data[0].Ront,
                func: response.data[0].Func,
                pain: response.data[0].Pain,
                swell: response.data[0].Swell,
                sediment: response.data[0].Sediment,
                crp: response.data[0].CRP,
                vas: response.data[0].VAS,
                vasP: response.data[0].VASp,
                das: response.data[0].DAS
            })
        })
    }

    render(){
        return(
            <tr className='align-middle'>
                <td>{ this.props.data.date }</td>
                <td>
                    <button type="button"
                            class="btn btn-outline-primary" 
                            data-bs-toggle="modal" 
                            data-bs-target={'#docReportInfo_' + this.props.data.id }
                            onClick={() => { this.getInfo(this.props.data.id) }}
                                >
                                    <BsSearch/> Info
                        </button>
                        <DocReportInfo reportID = {this.props.data.id} reportDate = {this.props.data.date} data = {this.state}/>
                </td>
            </tr>
        );
    }
}

export default DoctorReport;