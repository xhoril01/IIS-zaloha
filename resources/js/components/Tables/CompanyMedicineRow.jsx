import axios from 'axios';
import React,{ Component } from 'react';
import { BsInfoCircle } from "react-icons/bs";

class CompanyMedicineRow extends Component{

    constructor(props){
        super(props);

        this.state = {
            id:this.props.id,
        }
    }

    componentDidMount(){
        this.myFunc();
    }

    myFunc = async()=>{
        let varia = await axios.get("/home/get/company_meds/info/"+this.state.id);
        this.setState({
            medName:varia.data['name'],
            medV:varia.data['version'],
            medType: varia.data['type'],
            medAc: varia.data['ac'],
            medPC: varia.data['pc']

        });
        
    }

    funcier=()=>{
        this.props.func(this.state.id);
    }

    render(){
        return(
            <tr className='align-middle'>
                <th scope='row'> { this.props.index } </th>
                <td> { this.state.medName } </td>
                <td> { this.state.medType } </td>
                <td> { this.state.medV } </td>
                <td> { this.state.medAc } </td>
                <td> { this.state.medPC } </td>
                <td> 
                    <button type="button" 
                           onClick={this.funcier} 
                           className='btn btn-outline-primary' 
                           data-bs-toggle="modal" 
                           data-bs-target="#comp_modal"
                           >
                           <BsInfoCircle/>  Info
                    </button>
                </td>
            </tr>
        )
    }
}

export default CompanyMedicineRow;