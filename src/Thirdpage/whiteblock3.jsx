import React from 'react'
import "./Thirdpage.css";
const Whiteblock3 = (props) => {
  return (
    <>
            {props.details.map((value,index) => (
                <div className="card-reason" key={index}>
                   
                       <div className={`service4${value.id}`}>
                     
                        <img src={value.services} alt="not found"/><span className="card-title-reason">{value.title}</span>
                        <p className="thirdpage-description-reason">{value.name}</p>
                        </div>
                </div>
            ))};
        </>
  )
}

export default Whiteblock3;