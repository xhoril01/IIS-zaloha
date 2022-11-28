import React,{ Component } from 'react';
import { BsFillXCircleFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import DrugClose from '../Modals/DrugClose';

class PatientDrugs extends Component{

    constructor(props){
        super(props);
    }

    sign() {
        
        if(this.props.data.till == null) 
            return(
                    <td>
                        <DrugClose drugID = {this.props.data.medicine_id} />
                        <button type="button"
                                class="btn btn-outline-danger" 
                                data-bs-toggle="modal" 
                                data-bs-target={'#drugClose_' + this.props.data.medicine_id }
                                ><BsXCircle/> Ukončiť
                        </button>
                    </td>
                );
        else 
            return(<td><p style={{ marginBottom: 0 }} className='text-secondary'><BsFillXCircleFill/></p></td>);
    }

    dosage() {
        switch(this.props.data.dosage_period){

            case 1: return( <p style={{ marginBottom: 0 }}> { this.props.data.dosage_time }x / deň</p>); break;

            case 2: return( <p style={{ marginBottom: 0 }}> { this.props.data.dosage_time }x / týždeň</p>); break;

            case 3: return( <p style={{ marginBottom: 0 }}> { this.props.data.dosage_time }x / mesiac</p>); break;

            case 4: return( <p style={{ marginBottom: 0 }}> { this.props.data.dosage_time }x / 3 mesiace</p>); break;

            case 5: return( <p style={{ marginBottom: 0 }}> { this.props.data.dosage_time }x / 6 mesiacov</p>); break;

            default: return(<p></p>)
        }
    }

    render(){
        return(
            <tr className='align-middle'>    
                <th scope='row'><p style={{ marginBottom: 0 }}>{ this.props.data.name }</p></th>
                <td>{ this.dosage() }</td>
                <td><p style={{ marginBottom: 0 }}> { this.props.data.from } </p></td>
                <td><p style={{ marginBottom: 0 }}> { this.props.data.till } </p></td>
                { this.sign() }
            </tr>
        );
    }
}

export default PatientDrugs;