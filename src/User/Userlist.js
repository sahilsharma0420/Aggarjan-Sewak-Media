import React from "react";
import "./User.css"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button } from "@mui/material";
const Userlist = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="userlist" key={index}>
                   
                       <div className={`user${value.id}`}>
                     
                        <img src={value.image} alt="not found"/>
                        <div className="userlist-right">
                            <div className="user-title">
                            <div className="user-title-label">{value.title}</div>
                            <div className="user-title-icon"><BorderColorIcon/></div>
                            </div>
                            <div className="user-subtitle">{value.subtitle}</div>
                            <div className="user-description">{value.description}</div>
                        </div>
                        
                        </div>
                        <div className="userlist-button-section">
                        <Button variant="contained" size="small">लैंडलाइन नंबर</Button>
                        <Button variant="contained" size="small">मोबाइल नंबर</Button>
                        <Button variant="contained" size="small">बूस्टपोस्ट</Button>
                </div>
                </div>
            ))};
        </>
    );
};
export default  Userlist;
