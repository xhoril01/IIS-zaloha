import React,{ Component } from 'react';
import { BsFillXCircleFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import DrugUse from '../Modals/DrugUse';

class TreatmentDrugs extends Component{

    constructor(props){
        super(props);
    }

    sign() {
        if(this.props.data.till == null) 
            if(this.props.data.main == 1) return (<td><p style={{ marginBottom: 0 }} className='text-primary'><BsCheckCircleFill/></p></td>);         
            else return (<td><p style={{ marginBottom: 0 }} className='text-success'><BsCheckCircleFill/></p></td>);        
        else 
            return(<td><p style={{ marginBottom: 0 }} className='text-secondary'><BsFillXCircleFill/></p></td>);
    }

    information(){
        if(this.props.data.till == null){
            return(
                    <td>
                        <DrugUse drugID = {this.props.data.medicine_id} 
                                 dosageTime = {this.props.data.dosage_time} 
                                 dosagePeriod = {this.props.data.dosage_period}
                                 from = {this.props.data.from}/>
                        <button type="button"
                                class="btn btn-outline-primary" 
                                data-bs-toggle="modal" 
                                data-bs-target={'#drugUse_' + this.props.data.medicine_id }
                                >
                                    <BsInfoCircle/> Info
                        </button>
                    </td>
            );
        }
        else return <td></td>;
    }

    render(){
        return(
            <tr className='align-middle'>    
                <th scope='row'><p style={{ marginBottom: 0 }}>{ this.props.data.name }</p></th>
                <td><p style={{ marginBottom: 0 }}> { this.props.data.from } </p></td>
                <td><p style={{ marginBottom: 0 }}> { this.props.data.till } </p></td>
                { this.sign() }
                { this.information() }
            </tr>
        );
    }
}

export default TreatmentDrugs;