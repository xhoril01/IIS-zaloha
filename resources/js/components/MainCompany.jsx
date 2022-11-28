import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import CompanyMedicineRow from './Tables/CompanyMedicineRow';
import CompanyModalGraph from './Modals/CompanyModalGraph'

class MainCompany extends Component{

    constructor(props){
        super(props);
        this.state = {
            med:[],
            loading: 1,
        };

    }

    componentDidMount(){
        this.getDocsInfo();
    }

    getDocsInfo=()=>{
        let self = this;
        axios.get('/home/get/company_meds/info').then(function(response){
            self.setState({
                med: response.data,
            });
        });
    }

    setRefreshFunc=(func)=>{
        this.state.drawGraph=func;
    }

    buttonClicked=(id)=>{
        //console.log("clicked");
        this.state.drawGraph(id);
    }

    //.map(function(x,i){<CompanyMedicineRow id={x} index={i} />})
    render(){
        let self = this;
        return(
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header text-center'>
                                <h2>Vyvíjané lieky:</h2> 
                            </div>

                            <table className="table table-responsive-md">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col'>Názov</th>
                                        <th scope='col'>Typ</th>
                                        <th scope='col'>Verzia</th>
                                        <th scope='col'>Počet aktívnych použivateľov</th>
                                        <th scope='col'>Celkový počet použivaťeľov</th>
                                        <th scope='col'>Graf</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {  
                                this.state.med.map(function(x,i) {
                                    return <CompanyMedicineRow index={i+1} id={x} func={self.buttonClicked}/>
                                })
                                }
                                </tbody>
                            </table>
                            <CompanyModalGraph func={this.setRefreshFunc} />
                        </div>
                    </div> 
                </div>
            </div>
            );
        }
}

export default MainCompany;

if (document.getElementById('comp_mainer')) {
    ReactDOM.render(<MainCompany/>, document.getElementById('comp_mainer'));
}