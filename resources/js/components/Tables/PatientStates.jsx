import React,{ Component } from 'react';
import { BsFillXCircleFill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import StateClose from '../Modals/StateClose';

class PatientStates extends Component{

    constructor(props){
        super(props);

    }

    sign() {  
        if(this.props.data.till == null) 
            return(
                    <td>
                        <StateClose stateID = {this.props.data.substate_id} />
                        <button type="button"
                                class="btn btn-outline-danger" 
                                data-bs-toggle="modal" 
                                data-bs-target={'#stateClose_' + this.props.data.substate_id }
                                >
                                    <BsXCircle/> Ukončiť
                        </button>
                    </td>
                );
        
        
        else return(<td><p style={{ marginBottom: 0 }} className='text-secondary'><BsFillXCircleFill/></p></td>);
    }

    getInfo = (id) => {
        axios.post('/home/get/drug/details', {drugID: id}).then((response) => {
            this.setState({
                drugName: response.data.name,
                drugVers: response.data.version,
                drugType: response.data.type,
                drugComp_ID: response.company_id,
            })
        });

        axios.post('/home/get/comp/name', {drugID: id}).then((response) => {
            this.setState({
                compName: response.data
            });
        });
    }

    render(){
        return(
            <tr className='align-middle'>    
                <th scope='row'><p style={{ marginBottom: 0 }}>{ this.props.data.name }</p></th>
                <td><p style={{ marginBottom: 0 }}> { this.props.data.from } </p></td>
                <td><p style={{ marginBottom: 0 }}> { this.props.data.till } </p></td>
                { this.sign() }
            </tr>
        );
    }
}

export default PatientStates;