import { Component } from 'react';

class Loader extends Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div className='text-center'>
                <div id="my_load_icon" className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Načítavanie...</span>
                </div>
            </div>
        );
    }
}

export default Loader;