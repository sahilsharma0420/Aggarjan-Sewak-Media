import React from "react";
import "./Fifthpage.css"
const Whiteblock5 = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="card-reason" key={index}>
                   
                       <div className={`services${value.id}`}>
                     
                        <img src={value.services} alt="not found"/>
                        <p className="fifthpage-description-reason">{value.name}</p>
                        </div>
                </div>
            ))};
        </>
    );
};
export default  Whiteblock5;
