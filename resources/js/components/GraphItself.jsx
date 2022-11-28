import axios from 'axios';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


import Chart from 'chart.js/auto';
//import './mychart.js';

import {format, parseISO,subDays} from "date-fns";
import Loader from './Loader';
import formatDistanceToNowStrict from 'date-fns/esm/formatDistanceToNowStrict/index.js';

class GraphItself extends Component{

    constructor(props){
        super(props);


        this.state = {
            handler: this.props.handler,
            cur_chart: "Nope",
        }

    }

    load_data=async()=>{
        this.addLoad();
        if(this.state.cur_chart != "Nope") this.state.cur_chart.destroy();
        this.state.handler(this.rewrite_graph);
    }   

    rewrite_graph=(data)=>{
        let config_data  = {
            labels: data['date'],
            datasets: [{
                label: data['0'].name,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data['0'].values,
                fill: this.getGType(data['type'])
            }]
        };
        if(data['1']!=undefined){
        config_data.datasets.push(
            {
                label: data['1'].name,
                backgroundColor: 'rgb(19, 52, 105)',
                borderColor: 'rgb(35, 104, 217)',
                data: data['1'].values,
                fill: this.getGType(data['type'])
            }
        );}
        if(data['2']!=undefined){
        config_data.datasets.push(
            {
                label: data['2'].name,
                backgroundColor: 'rgb(58, 115, 48)',
                borderColor: 'rgb(66, 230, 37)',
                data: data['2'].values,
                fill: this.getGType(data['type'])
            }
        );}
        if(data['3']!=undefined){
        config_data.datasets.push(
            {
                label: data['3'].name,
                backgroundColor: 'rgb(97, 90, 42)',
                borderColor: 'rgb(191, 170, 11)',
                data: data['3'].values,
                fill: this.getGType(data['type'])
            }
        );}
        const config = {
            type: this.getGraphType(data['type']),
            data: config_data,
            options: {}
        };
        this.func(config);
    }

    getGraphType=(grrr)=>{
        if(grrr == 0) return "line";
        if(grrr == 1) return "bar";
        if(grrr == 2) return "line";
    }

    getGType=(grrr)=>{
        if(grrr == 2) return "origin";
        else return "false";
    }

    removeChild=()=>{
        let mn = document.getElementById("mm_ll");
        while(mn.lastChild)
            mn.removeChild(mn.lastChild);
    }

    addLoad=()=>{
        let mn = document.getElementById("mm_ll");
        let nn = document.createElement('div');
        ReactDOM.render(<Loader/>,nn);
        mn.appendChild(nn);
    }


    func=(config)=>{
        const elem = document.getElementById("graph_instance");
        this.state.cur_chart = new Chart(
            elem,
            config
        );
        this.removeChild();
    }

    render() {
        let self = this;
        return (
            <div id="graph_parrent">
                <canvas id="graph_instance">
                </canvas>
                <div id="mm_ll">

                </div>
                <input type="button" onClick={this.load_data} value="Generovať graf"/>
            </div>
        );
    }
}
export default GraphItself;