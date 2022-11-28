import React,{ Component } from 'react';
import logoG from '../../../public/img/girl_icon.png'
import logoM from '../../../public/img/men_icon.jpeg'

class PatientImg extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.gender === 'Female')
            return(
                <img src={logoG} class="rounded-circle" height='300' width='300' alt="logoG"></img>
            );

        else
            return(
                    <img src={logoM} class="rounded-circle" height='300' width='300' alt="logoM"></img>
                );
        }
}

export default PatientImg;