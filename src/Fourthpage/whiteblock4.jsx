import React from "react";
import "./Fourthpage.css"
const Whiteblock4 = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="card-reason" key={index}>
                   
                       <div className={`service${value.id}`}>
                     
                        <img src={value.services} alt="not found"/>
                        <p className="description-reason">{value.name}</p>
                        </div>
                </div>
            ))};
        </>
    );
};
export default  Whiteblock4;
