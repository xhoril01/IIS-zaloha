import axios from 'axios';
import React,{ Component } from 'react';
import DrugInfo from '../Modals/DrugInfo';
import DrugUpdate from '../Modals/DrugUpdate';
import DrugDelete from '../Modals/DrugDelete';

class DrugRow extends Component{

    constructor(props){
        super(props);

        this.state = {
            drugName: null,
            drugVers: null,
            drugType: null,
            drugComp_ID: null,
            compName: null
        }
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
            <tr>    
                <th scope='row'> { this.props.data.id } </th>
                <td> { this.props.data.name } </td>
                <td>
                    <div class="btn-group" role="group">
                        <button type="button"
                            class="btn btn-outline-primary" 
                            data-bs-toggle="modal" 
                            data-bs-target={'#drugInfo_' + this.props.data.id }
                            onClick={() => { this.getInfo(this.props.data.id) }}
                                >
                                    Zobraziť
                        </button>
                        <DrugInfo drugID = {this.props.data.id} data = {this.state}/>

                        <button type="button"
                                class="btn btn-outline-primary" 
                                data-bs-toggle="modal" 
                                data-bs-target={'#drugUpdate_' + this.props.data.id }
                                onClick={() => { this.getInfo(this.props.data.id) }}
                                >
                                    Upraviť
                        </button>
                        <DrugUpdate drugID = {this.props.data.id} data = {this.state}/>

                        <DrugDelete drugID = {this.props.data.id}/>
                        <button type="button"
                                class="btn btn-outline-danger" 
                                data-bs-toggle="modal" 
                                data-bs-target={'#drugDelete_' + this.props.data.id }
                                onClick={() => { this.getInfo(this.props.data.id) }}
                                >
                                    Vymazať
                        </button>

                    </div>
                </td>
            </tr>
        )
    }
}

export default DrugRow;