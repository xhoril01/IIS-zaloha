import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import { now } from 'lodash';
import PlusButton from './PlusButton';
import TagGetterWindow from './TagGetterWindow';
import TagThingyGrapher from './TagThingyGrapher';
import GraphItself from './GraphItself';
import Carder from './Card_Func/Carder';

class Getter extends Component{

    constructor(props){
        super(props);

        this.state = {
            selected_value:"VAS doktor",
            date_from:"",
            date_till:"",
            graph_type: 0,
            
            selected: 0,
            filter_sets:[
                {
                name: "Nový filter",
                filter_state_whitelist: [],
                filter_state_blacklist: [],
                filter_medicine_whitelist: [],
                filter_medicine_blacklist: [],
                },
            ],


            refresh_func: "",
            rename_func:""
        }
    }

    componentDidMount(){
        this.Refresh();
    }

    //FilterGroups

    AddNewFilter=()=>{
        this.state.filter_sets.push(
            {
                name: "Nový filter",
                filter_state_whitelist: [],
                filter_state_blacklist: [],
                filter_medicine_whitelist: [],
                filter_medicine_blacklist: [],
            }
        )
    }
    RemoveFilter=(removeThisOne)=>{
        this.state.filter_sets.splice(removeThisOne, 1);
    }
    SelectFilter=(selected)=>{
        this.state.selected = selected;

        this.Refresh();
    }
    GetRenameFunc=(func)=>{
        this.state.rename_func=func;
    }
    GetRefreshFunc=(func)=>{
        this.state.refresh_func=func;
    }
    ChangeFillName=()=>{
        let nn = document.getElementById('my_filter_naaame').value;
        this.state.filter_sets[this.state.selected].name = nn;
        this.state.rename_func(nn);
        this.state.refresh_func();
    }

    getTreatmentData=async(childFunc)=>{
        let data = JSON.stringify(this.state);
        let response = await axios.get('/home/get/treatments/filter',{params:{data}});
        childFunc(response.data);
    }

    //Global graph variables

    SetGraphType=()=>{
        this.state.graph_type = document.getElementById('my_select_type').value;
    }

    SetGraphValue=()=>{
        this.state.graph_value = document.getElementById('my_select_value').value;
    }

    SetFromDate=()=>{
        this.state.date_from = document.getElementById('mm_date_from').value;;
    }
    SetTillDate=()=>{
        this.state.date_till = document.getElementById('mm_date_till').value;;
    }

    //Tag work

    Refresh=()=>{
        this.RemoveOldTags();
        this.GenerateBlackMedicines();
        this.GenerateWhiteMedicines();
        this.GenerateWhiteStates();
        this.GenerateBlackStates();
    }
    RemoveOldTags=()=>{
        var myNode = document.getElementById("my_white_medicine");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
        myNode = document.getElementById("my_black_medicine");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
        myNode = document.getElementById("my_white_state");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
        myNode = document.getElementById("my_black_state");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }

    //Generators
    GenerateWhiteMedicines=()=>{
        let self = this;
        const myNode = document.getElementById("my_white_medicine");
        for(let i = 0; i < this.state.filter_sets[this.state.selected].filter_medicine_whitelist.length;i++){
            const elem = document.createElement("div");
            ReactDOM.render(<TagThingyGrapher name={this.state.filter_sets[this.state.selected].filter_medicine_whitelist[i]} handler={self.RemoveMedicineWhite}/>,elem);
            myNode.appendChild(elem); 
        };
    }
    GenerateBlackMedicines=()=>{
        let self = this;
        const myNode = document.getElementById("my_black_medicine");
        for(let i = 0; i < this.state.filter_sets[this.state.selected].filter_medicine_blacklist.length;i++){
            const elem = document.createElement("div");
            ReactDOM.render(<TagThingyGrapher name={this.state.filter_sets[this.state.selected].filter_medicine_blacklist[i]} handler={self.RemoveMedicineBlack}/>,elem);
            myNode.appendChild(elem); 
        };
    }
    GenerateWhiteStates=()=>{
        let self = this;
        const myNode = document.getElementById("my_white_state");
        for(let i = 0; i < this.state.filter_sets[this.state.selected].filter_state_whitelist.length;i++){
            const elem = document.createElement("div");
            ReactDOM.render(<TagThingyGrapher name={this.state.filter_sets[this.state.selected].filter_state_whitelist[i]} handler={self.RemoveStateWhite}/>,elem);
            myNode.appendChild(elem); 
        };
    }
    GenerateBlackStates=()=>{
        let self = this;
        const myNode = document.getElementById("my_black_state");
        for(let i = 0; i < this.state.filter_sets[this.state.selected].filter_state_blacklist.length;i++){
            const elem = document.createElement("div");
            ReactDOM.render(<TagThingyGrapher name={this.state.filter_sets[this.state.selected].filter_state_blacklist[i]} handler={self.RemoveStateBlack}/>,elem);
            myNode.appendChild(elem); 
        };
    }

    //Adders
    AddWhiteState=(state)=>{
        this.state.filter_sets[this.state.selected].filter_state_whitelist.push(state);
        this.Refresh();
    }
    AddBlackState=(state)=>{
        this.state.filter_sets[this.state.selected].filter_state_blacklist.push(state);
        this.Refresh();
    }
    AddWhiteMedicine=(state)=>{
        this.state.filter_sets[this.state.selected].filter_medicine_whitelist.push(state);
        this.Refresh();
    }
    AddBlackMedicine=(state)=>{
        this.state.filter_sets[this.state.selected].filter_medicine_blacklist.push(state);
        this.Refresh();
    }

    //Removers
    RemoveStateWhite=(state)=>{
        const index = this.state.filter_sets[this.state.selected].filter_state_whitelist.indexOf(state);
        if (index > -1) { 
            this.state.filter_sets[this.state.selected].filter_state_whitelist.splice(index, 1);
        }
        this.Refresh();
    }
    RemoveStateBlack=(state)=>{
        const index = this.state.filter_sets[this.state.selected].filter_state_blacklist.indexOf(state);
        if (index > -1) { 
            this.state.filter_sets[this.state.selected].filter_state_blacklist.splice(index, 1);
        }
        this.Refresh();
    }
    RemoveMedicineWhite=(state)=>{
        const index = this.state.filter_sets[this.state.selected].filter_medicine_whitelist.indexOf(state);
        if (index > -1) { 
            this.state.filter_sets[this.state.selected].filter_medicine_whitelist.splice(index, 1);
        }
        this.Refresh();
    }
    RemoveMedicineBlack=(state)=>{
        const index = this.state.filter_sets[this.state.selected].filter_medicine_blacklist.indexOf(state);
        if (index > -1) { 
            this.state.filter_sets[this.state.selected].filter_medicine_blacklist.splice(index, 1);
        }
        this.Refresh();
    }


    render() {
        let self = this;
        return (
            <div>
                <label>
                    Typ grafu:
                    <select onChange={self.SetGraphType} id="my_select_type" class="graph-type" name="mm_graph_type">
                        <option value="0">Čiarový</option>
                        <option value="1">Stĺpcový</option>
                        <option value="2">Vyplnený</option>
                    </select>
                </label>
                <label>
                    Zvolené hodnoty: 
                    <select onChange={self.SetGraphValue} id="my_select_value" class="graph-type" name="mm_graph_type">
                        <option value="VASp">VAS hodnota pacienta</option>
                        <option value="VAS">VAS hodnota</option>
                        <option value="DAS">DAS hodnota</option>
                        <option value="HQp">HQ pacienta</option>
                        <option value="CRP">CRP hodnota</option>
                        <option value="Sediment">Hodnota sedimentácie</option>
                        <option value="Ront">Röntgenové poškodenie</option>
                        <option value="Func">Funkčné poškodenie</option>
                        <option value="Pain">Počet bolestivých kĺbov</option>
                        <option value="Swell">Počet napuchnutých kĺbov</option>
                    </select>
                </label>
                <div>


                <div id="my_display_getter">
                    <GraphItself handler={self.getTreatmentData}/>
                </div>


                <div className="row">
                <div className="col-md-1"/>
                <div className="col-md-9">Od:<input onChange={self.SetFromDate} type="date" id="mm_date_from"/></div>
                <div className="col-md-2">Do:<input onChange={self.SetTillDate} type="date" id="mm_date_till"/></div>
                </div>

                <Carder re={this.GetRenameFunc} rf={this.GetRefreshFunc} onRename={this.ChangeFillName} onCreate={this.AddNewFilter} onSelect={this.SelectFilter} onDelete={this.RemoveFilter} />

                Názov:
                <input type="text" id="my_filter_naaame" onChange={this.ChangeFillName}/>

                </div>
                Vymedziť na liek:
                <div class="d-flex justify-content-start m-2" id="my_white_medicine">

                </div>
                <PlusButton type="Medicine_White" handler={self.AddWhiteMedicine}/>
                Vynechať liek:
                <div class="d-flex justify-content-start m-2" id="my_black_medicine">

                </div>
                <PlusButton type="Medicine_Black" handler={self.AddBlackMedicine}/>
                Vymedziť na stav:
                <div class="d-flex justify-content-start m-2" id="my_white_state">

                </div>
                <PlusButton type="State_White" handler={self.AddWhiteState}/>
                Vynechať stav:
                <div class="d-flex justify-content-start m-2" id="my_black_state">

                </div>
                <PlusButton type="State_Black" handler={self.AddBlackState}/>
            </div>
        );
    }
}
export default Getter;

if (document.getElementById('getter')) {
    ReactDOM.render(<Getter />, document.getElementById('getter'));
}