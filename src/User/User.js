import React, { useState, useEffect } from "react";
import "./User.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button, FormControlLabel } from "@mui/material";
import Userlist from "./Userlist";
import { State, City ,userlistdata} from "./Datauser";
import {Radio} from "@mui/material";
import {RadioGroup} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
function User() {
  const [state, setstate] = useState([]);
  const [city, setcity] = useState([]);
  useEffect(() => {
    setstate(State);
  }, []);
  const handleservice = (id) => {
    const s1 = City.filter((x) => x.stateId === id);
    setcity(s1);
  };
  return (
    <>
      <div className="user">
        <div className="user-header-section">
          <div className="user-first-box">
            <img
              className="user-first-img"
              src={process.env.PUBLIC_URL + `/images/logo1.png`}
              alt="notfound"
            />
            <div className="user-text1">अग्रजन सेवक मीडिया नेटवर्क</div>
          </div>
          <div className="user-whitebox">
            <Button>
              <p className="user-text3">Ankush Jain</p>
              <img
                className="user-first-img-4"
                src={`https://file.rendit.io/n/efGn827pzzpthUg7z1Fk.svg`}
                alt="notfound"
              />
            </Button>{" "}
          </div>
        </div>
        <div className="user-card-section">
          <div className="user-information-card">
            <div className="user-heading-information">
              <img
                className="user-heading-information-logo"
                src={process.env.PUBLIC_URL + `/images/logo1.png`}
                alt="not-found"
              />
              <p className="user-heading-information-label">
                अग्रजन सेवक मीडिया नेटवर्क
              </p>
            </div>
            <div className="user-detail-information">
              <div className="user-person-details">
                <div className="user-person-name">
                  <p className="user-detail-options">नाम</p>
                  <p className="user-detail-options">: Ankush Jain</p>
                </div>
                <div className="user-person-place">
                  <p className="user-detail-options">स्थान</p>
                  <p className="user-detail-options">: रोहतक</p>
                </div>
                <div className="user-person-status">
                  <p className="user-detail-options">पद</p>
                  <p className="user-detail-options">: पत्रकार</p>
                </div>
                <div className="user-person-rollno">
                  <p className="user-detail-options">सदस्य क्रमांक</p>
                  <p className="user-detail-options">: JDF3456</p>
                </div>
              </div>
              <img
                className="user-person-image"
                src="https://file.rendit.io/n/TXyoPDn1sFJvcL6GXLHx.png"
                alt="not-found"
              />
            </div>
          </div>
   
          <div className="user-form">
            <img
              className="form-image"
              src="https://file.rendit.io/n/TXyoPDn1sFJvcL6GXLHx.png"
              alt="not found"
            />
            <form>
              <div className="first-row">
                <div className="form-name">
                  <label>नाम</label>
                  <input type="text" name="name" />
                </div>
                <div className="state">
                  <label>राज्य</label>
                  <select onChange={(e) => handleservice(e.target.value)}>
                    <option className="outeroption" value="0">
                      Select Services
                    </option>
                    {state && state !== undefined
                      ? state.map((ctr, index) => {
                          return (
                            <option key={index} value={ctr.id}>
                              {ctr.name}
                            </option>
                          );
                        })
                      : "NO Country"}
                  </select>
                </div>
              </div>
              <div className="second-row">
                <div className="district">
                  <label>शहर</label>
                  <select>
                    <option className="outeroption" value="1">
                      Select city
                    </option>

                    {city && city !== undefined
                      ? city.map((ctr, index) => {
                          return (
                            <>
                              <option key={index} value={ctr.id}>
                                {ctr.name}
                              </option>
                            </>
                          );
                        })
                      : "NO Country"}
                  </select>
                </div>

                <div className="caste">
                  <label>गोत्र का चयन करें</label>
                  <input />
                </div>
              </div>
              <div className="form-buttons">
                <Button variant="contained" size="small">
                
                  पिन बदलें
                </Button>
                <Button variant="contained" size="small">
                  अपडेट करें
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="user-lower-section">
          
          <RadioGroup>
          <div className="user-left-section">
            <div className="member-type1">
              <FormControlLabel value='1' control={<Radio/>} label='सरक्षक सदस्य बने'/>
              <input type='number' className="member-input" placeholder="1000"></input>
            </div>
            <div className="member-type2">
            <FormControlLabel value='2' control={<Radio/>} label='मुख्य सरक्षक सदस्य बने'/>
            <input type='number' className="member-input" placeholder="1000"></input>
            </div>
            <div className="member-type3">
            <FormControlLabel value='3' control={<Radio/>} label='जिला ब्यूरो प्रमुख'/>
            <input type='number' className="member-input" placeholder="1000"></input>
            </div>
            <Button variant="contained" size="medium">
                procedd to pay
                </Button>
            </div>
            </RadioGroup>

       
          <div className="user-right-section">
          <Userlist details={userlistdata}/>
          <div className="bottom-buttons">
          <Button variant="contained" size="medium"><ShareIcon/>ऐप शेयर करे</Button>
                <Button variant="contained" size="meduim">लॉग आउट</Button>
          </div>
        </div>
        </div>
        <div className="user-copyright-block">
          all rights reserved @ aggrajan sewak media network
        </div>
      </div>
    </>
  );
}

export default User;
