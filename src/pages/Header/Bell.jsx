import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

class Bell extends Component {
    constructor(props) {
        super(props)

            this.state = {
                isLoggendIn: true //true tiene notifi , false no tiene notifi
            }
        
    }

    render(){
        if(this.state.isLoggendIn){
            return(
                <div className="icons">
                <div className="incon">
                <FontAwesomeIcon icon={faBell} className="campana"/> 
                <div className="counter"></div>  
                </div>
                 </div>
            )
        }else{
            return(
                <div className="icons">
                    <div className="incon">
                    <FontAwesomeIcon icon={faBell} className="campana"/> 
                    </div>
                 </div>
        
                );
        }

       
    }
}


export default Bell;