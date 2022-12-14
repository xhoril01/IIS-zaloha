import axios from 'axios';
import React,{ Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class NewPatReport extends Component{

    constructor(props){
        super(props);

        this.state = {
            q1: '0', q11: '0', 
            q2: '0', q12: '0',
            q3: '0', q13: '0',
            q4: '0', q14: '0',
            q5: '0', q15: '0',
            q6: '0', q16: '0',
            q7: '0', q17: '0',
            q8: '0', q18: '0',
            q9: '0', q19: '0',
            q10: '0', q20: '0',
            
            b11: '0', b18: '0',
            b12: '0', b19: '0',
            b13: '0', b110: '0',
            b14: '0', b111: '0',
            b15: '0', b112: '0',
            b16: '0', b113: '0',
            b17: '0', 
            
            b21: '0', b25: '0',
            b22: '0', b26: '0',
            b23: '0', b27: '0',
            b24: '0', b28: '0',
        
            other: ""
        }
    }

    NewPatReport = () => {
        if(this.state.other !== "") this.setState({b113: '1'});

        axios.post('/home/moja_liecba/new/pat/report', { 
            q1: this.state.q1,    q11: this.state.q11, 
            q2: this.state.q2,    q12: this.state.q12,
            q3: this.state.q3,    q13: this.state.q13,
            q4: this.state.q4,    q14: this.state.q14,
            q5: this.state.q5,    q15: this.state.q15,
            q6: this.state.q6,    q16: this.state.q16,
            q7: this.state.q7,    q17: this.state.q17,
            q8: this.state.q8,    q18: this.state.q18,
            q9: this.state.q9,    q19: this.state.q19,
            q10: this.state.q10,  q20: this.state.q20,

            b11: this.state.b11,  b18: this.state.b18,
            b12: this.state.b12,  b19: this.state.b19,
            b13: this.state.b13,  b110: this.state.b110,
            b14: this.state.b14,  b111: this.state.b111,
            b15: this.state.b15,  b112: this.state.b112,
            b16: this.state.b16,  b113: this.state.b113,
            b17: this.state.b17,
                
            b21: this.state.b21,  b25: this.state.b25,
            b22: this.state.b22,  b26: this.state.b26,
            b23: this.state.b23,  b27: this.state.b27,
            b24: this.state.b24,  b28: this.state.b28,

            other: this.state.other,
            patient_id: this.props.patient_id

        }).then(() => {
            toast.success("Hl??senie bolo pridan??");
        })
    }
    
    eventHandler = (event) => {
        const infoName = event.target.name;
        const value = event.target.value;

        this.setState({
            [infoName]: value});
    }

    render(){
        return(
            <>
                <button type='button' 
                    className='btn btn-primary fs-5' 
                    style={{ padding: 12 }}
                    data-bs-toggle='modal'
                    data-bs-target={'#newDocReport'}>
                                                
                        Prida?? hl??senie
                </button>
                
                
                <div className="modal" id='newDocReport' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Prida?? hl??senie</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body position-relative">
                                <h5><strong> 1. Pros??me zvol??te jednu z mo??ost?? v ka??dom riadku, ktor?? najlep??ie vystihuje Va??e schopnosti v minulom t????dni: </strong></h5>
                                
                                <form>
                                    <div className='row '>
                                        <div><br/></div>
                                        <h6><strong>Obliekanie a upravovanie sa</strong></h6>
                                       
                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? obliec?? sa, uviaza?? si ??n??rky, zapn???? gomb??ky?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q1' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? umy?? si vlasy ??amp??nom?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q2' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div><br/></div>

                                        <h6><strong>Vst??vanie</strong></h6>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? vsta?? z klasickej stoli??ky, ktor?? nem?? operadl???</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q3' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? ??ahn???? si do postele a vsta?? z nej?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q4' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>
                                    </div>

                                    <div className='row '>
                                        <div><br/></div>

                                        <h6><strong>Jedenie</strong></h6>
                                        
                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? pokr??ja?? si m??so?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q5' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? zdvihn???? pln?? ????lku alebo poh??r k Va??im ??stam?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q6' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>
                                        
                                        <div className='col-md-auto'>
                                            <label htmlFor="ront" style={{ marginTop:10 }}>Ste schopn?? otvori?? nov?? krabicu mlieka alebo pracieho pr????ku?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q7' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>
                                    </div>

                                    <div className='row '>

                                        <div><br/></div>

                                        <h6><strong>Ch??dza</strong></h6>
                                        
                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? prech??dza?? sa vonku po rovine?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q8' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? vyst??pi?? 5 schodov?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q9' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                    </div>        
                                </form>

                                <div><br/></div>

                                <h5><strong>2. Pros??me ozna??te kri??ikom v??etky pom??cky alebo zariadenia, ktor?? obvykle pou????vate na vy????ie uveden?? aktivity: </strong></h5>
                                <div className='row text-grey'>
                                    <div className='col-md-4 d-flex flex-column'>
                                        <div className="form-check" >
                                            <input class="form-check-input" type="checkbox" value="1" id="stick" onChange={this.eventHandler} name='b11'/>
                                            <label class="form-check-label" for="stick"> Vych??dzkov?? pali??ka </label>
                                        </div>

                                        <div class="form-check col-md-auto">
                                            <input class="form-check-input" type="checkbox" value="1" id="walker" onChange={this.eventHandler} name='b12'/>
                                            <label class="form-check-label" for="walker"> Chod??tko, presuvn?? r??m </label>
                                        </div>

                                        <div class="form-check col-md-auto">
                                            <input class="form-check-input" type="checkbox" value="1" id="tools" onChange={this.eventHandler} name='b13'/>
                                            <label class="form-check-label" for="tools"> Upraven?? alebo ??peci??lne n??radie </label>
                                        </div>

                                        <div class="form-check col-md-auto">
                                            <input class="form-check-input" type="checkbox" value="1" id="chair" onChange={this.eventHandler} name='b14'/>
                                            <label class="form-check-label" for="chair"> Upraven?? alebo ??peci??lne kreslo </label>
                                        </div>
                                    </div>

                                    <div className='col-md-4 d-flex flex-column'>

                                        <div class="form-check col-md-auto">
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b15'/>
                                            <label class="form-check-label" for="flexCheckDefault"> Pom??cky na obliekanie (h????ik na gomb??ky, ??ahadlo na zips, dlh?? obuv??k ) </label>
                                        </div>

                                        <div class="form-check col-md-auto">
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b16'/>
                                            <label class="form-check-label" for="flexCheckDefault"> Barle </label>
                                        </div>

                                        <div class="form-check col-md-auto">
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b17'/>
                                            <label class="form-check-label" for="flexCheckDefault"> Kolesov?? voz??k</label>
                                        </div>
                                    </div>
                                </div>

                                <div><br/></div>

                                <h5><strong>3. Pros??me ozna??te kr????ikom oblasti, v ktor??ch obvykle potrebujete pomoc druhej osoby:</strong></h5>

                                <div className='row '>
                                    <div className="form-check col-md-3" >
                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b21'/>
                                        <label class="form-check-label" for="flexCheckDefault"> Obliekanie a upravovanie </label>
                                    </div>

                                    <div className="form-check col-md-3" >
                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b22'/>
                                        <label class="form-check-label" for="flexCheckDefault"> Vst??vanie </label>
                                    </div>

                                    <div className="form-check col-md-3" >
                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b23'/>
                                        <label class="form-check-label" for="flexCheckDefault"> Jedenie </label>
                                    </div>

                                    <div className="form-check col-md-3" >
                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b24'/>
                                        <label class="form-check-label" for="flexCheckDefault"> Ch??dza </label>
                                    </div>
                                </div>

                                <div><br/></div>

                                <h5><strong>4. Pros??me, zakr????kujte jednu odpove?? v ka??dom riadku, ktor?? najlep??ie vystihuje Va??e schopnosti v minulom t????dni: </strong></h5>
                                <form>
                                    <div className='row '>
                                        <div><br/></div>
                                        <h6><strong>Hygiena</strong></h6>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? umy?? sa a osu??i?? cel?? Va??e telo?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q10' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? sa ok??pa?? vo vani?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q11' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront" style={{ marginTop: 10 }}>Ste schopn?? posadi?? sa na z??chodov?? misu a vsta?? z nej?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q12' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div><br/></div>
                                        <h6><strong>Dosah</strong></h6>
                                        
                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? dosiahnu?? 2-3kg predmet,napr. vrecko zemiakov z v????ky tesne nad Va??ou hlavou?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q13' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront" style={{ marginTop: 10 }}>Ste schopn?? zohn???? sa dolu,aby ste zdvihli oble??enie zo zeme?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q14' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div><br/></div>
                                        <h6><strong>Stisk</strong></h6>
                                        
                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? otvori?? dvere auta?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q15' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? otvori?? zav??rac?? poh??r, ktor?? u?? bol pred t??m otvoren???</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q16' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront" style={{ marginTop: 10 }}>Ste schopn?? otvori?? a zatvori?? vodovodn?? koh??tik?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q17' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div><br/></div>
                                        <h6><strong>Aktivita</strong></h6>
                                        
                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? vybavova?? praktick?? z??le??itosti a nakupova???</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q18' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront">Ste schopn?? nasadn???? do auta a vyst??pi?? z neho?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q19' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>

                                        <div className='col-md-auto'>
                                            <label htmlFor="ront" style={{ marginTop: 10 }}>Ste schopn?? vys??va??, robi?? dom??ce pr??ce a ??ahk?? pr??cu v z??hrade?</label>
                                            <select className="form-select" aria-label="Ront select" onChange={this.eventHandler} name='q20' required>

                                                <option selected value="0">Bez ak??chko??vek probl??mov</option>    
                                                <option value="1">S men????mi probl??mami</option>    
                                                <option value="2">S ve??k??mi probl??mami</option>
                                                <option value="3">Som ??plne nechopn??/??</option>   

                                            </select>
                                        </div>
                                    </div>        
                                </form>

                                <div><br/></div>

                                <h5><strong>5. Pros??me ozna??te kr????ikom v??etky pom??cky a zariadenia, ktor?? obvykle pou????vate pre vy????ie uveden?? aktivity: </strong></h5>
                                <div className='row '>
                                    <div className='col-md-4 d-flex flex-column'>
                                        <div className="form-check col-md-auto" >
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b18'/>
                                            <label class="form-check-label" for="flexCheckDefault"> Zv????en?? seda??ka na z??chodovej mise </label>
                                        </div>

                                        <div className="form-check col-md-auto" >
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b19'/>
                                            <label class="form-check-label" for="flexCheckDefault"> Seda??ka vo vani </label>
                                        </div>

                                        <div className="form-check col-md-auto" >
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b110'/>
                                            <label class="form-check-label" for="flexCheckDefault"> Otv??ra?? zav??rac??ch poh??rov (pri otv??ran?? u?? pred t??m otvoren??ch) </label>
                                        </div>
                                    </div>
                                    
                                    <div className='col-md-4 d-flex flex-column'>
                                        <div className="form-check col-md-auto" >
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b111'/>
                                            <label class="form-check-label" for="flexCheckDefault"> Dr??adlo vo vani </label>
                                        </div>

                                        <div className="form-check col-md-auto" >
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b112'/>
                                            <label class="form-check-label" for="flexCheckDefault"> N??radie s dlhou r????kou umo????uj??ce dosahovanie predmetov </label>
                                        </div>

                                        <div className="form-check col-md-auto" >
                                            <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b113'/>
                                            <label class="form-check-label" for="flexCheckDefault"> In?? (uve??te pros??m) </label>
                                            <input class="form-control" type="text" placeholder='In??' onChange={this.eventHandler} name='other'/>
                                        </div>
                                    </div>    
                                </div>

                                <div><br/></div>

                                <h5><strong>6. Pros??me ozna??te kr????ikom oblasti, v ktor??ch obvykle potrebujete pomoc inej osoby:</strong></h5>
                                <div className='row '>
                                    <div className="form-check col-md-3" >
                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b25'/>
                                        <label class="form-check-label" for="flexCheckDefault"> Hygiena </label>
                                    </div>

                                    <div className="form-check col-md-3" >
                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b26'/>
                                        <label class="form-check-label" for="flexCheckDefault"> Dosahovanie predmetov </label>
                                    </div>

                                    <div className="form-check col-md-auto" >
                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b27'/>
                                        <label class="form-check-label" for="flexCheckDefault"> Uchopenie a otv??ranie vec?? </label>
                                    </div>

                                    <div className="form-check col-md-auto" >
                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onChange={this.eventHandler} name='b28'/>
                                        <label class="form-check-label" for="flexCheckDefault"> Dom??ce pr??ce a vybavovanie praktick??ch z??le??itost?? </label>
                                    </div>
                                </div>
                            </div>

                            <div className='modal-footer'>
                                <div className='col-md-2'>
                                    <button type="submit"
                                            className='btn btn-info fs-5'
                                            data-bs-dismiss="modal"
                                            onClick={ this.NewPatReport }
                                        >
                                            Prida??
                                    </button>
                                </div>

                                <div className='col-md-2'>
                                    <button type="button" 
                                            className="btn btn-secondary fs-5"  
                                            data-bs-dismiss="modal"
                                        >
                                            Zatvori??
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewPatReport;