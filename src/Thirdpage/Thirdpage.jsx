import React from 'react'
import "./Thirdpage.css"
import Whiteblock3 from './whiteblock3';
import { thirdpagedata } from './thirdpagedata';
import {Button} from "@mui/material";
function Thirdpage() {
  return (
    <>
    <div className='thirdpage'>
        <div className='thirdpage-main-content'>
        <div className="thirdpage-header-section">
        <div className="thirdpage-first-box">
              <img
                className="thirdpage-first-img"
                src={`https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png`}
                alt="notfound"
              />
              <div className="thirdpage-text1">अग्रजन सेवक मीडिया नेटवर्क</div>
            </div>
            <div className="thirdpage-whitebox">
            <Button>
            
              <p className="thirdpage-text3">Ankush Jain</p>
              <img
                className="thirdpage-first-img-4"
                src={`https://file.rendit.io/n/efGn827pzzpthUg7z1Fk.svg`}
                alt="notfound"
              />
          
              
              </Button>   </div>
        </div>
        <div className='thirdpage-card-section'>
          <div className='thirdpage-information-card'>
            <div className='thirdpage-heading-information'>
                <img className='thirdpage-heading-information-logo' src='https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png' alt='not-found'/>
                <p className='thirdpage-heading-information-label'>अग्रजन सेवक मीडिया नेटवर्क</p>
            </div>
            <div className='thirdpage-detail-information'>
                <div className='thirdpage-person-details'>
                    <div className='thirdpage-person-name'>
                        <p className='thirdpage-detail-options'>नाम</p>
                        <p className='thirdpage-detail-options'>: Ankush Jain</p>
                    </div>
                    <div className='thirdpage-person-place'>
                        <p className='thirdpage-detail-options'>स्थान</p>
                        <p className='thirdpage-detail-options'>: रोहतक</p>
                    </div>
                    <div className='thirdpage-person-status'>
                        <p className='thirdpage-detail-options'>पद</p>
                        <p className='thirdpage-detail-options'>: पत्रकार</p>
                    </div>
                    <div className='thirdpage-person-rollno'>
                        <p className='thirdpage-detail-options'>सदस्य क्रमांक</p>
                        <p className='thirdpage-detail-options'>: JDF3456</p>

                    </div>
                </div>
                <img className='thirdpage-person-image' src='https://file.rendit.io/n/TXyoPDn1sFJvcL6GXLHx.png'  alt='not-found'/>
            </div>
          </div>
          <img
            className="thirdpage-card-section-image"
            src={`https://file.rendit.io/n/zfoUqFLkmXape0ds6wT4.png`}
            alt="notfound"
          />
        </div>
        <div className='thirdpage-whiteblock'>
        <Whiteblock3 details={thirdpagedata}/>
        </div>
        </div>
        <div className="thirdpage-copyright-block">
        all rights reserved @ aggrajan sewak media network
      </div>
    </div>
    
    </>
  )
}

export default Thirdpage;