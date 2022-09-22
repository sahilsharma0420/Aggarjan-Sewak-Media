import React from 'react'
import "./Service.css";
const Whiteblock3 = (props) => {
  return (
    <>
            {props.details.map((value,index) => (
                <div className="card-reason" key={index}>
                   
                       <div className={`service4${value.id}`}>
                     
                        <img className={`image${value.id}`}src={value.services} alt="not found"/>
                        <p className="thirdpage-description-reason">{value.name}</p>
                        </div>
                </div>
            ))};
        </>
  )
}

export default Whiteblock3;