import React from 'react'
import "./Fourthpage.css"
import { fourthpagedata } from './fourthpagedata';
import {Button,Stack,ButtonGroup} from "@mui/material";
import Whiteblock4 from './whiteblock4';
function Fourthpage() {
  return (
    <>
    <div className='fourthpage'>
        <div className='main-content'>
        <div className="header-section">
        <div className="first-box">
              <img
                className="first-img"
                src={`https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png`}
                alt="notfound"
              />
              <div className="text1">अग्रजन सेवक मीडिया नेटवर्क</div>
            </div>
            <div className='side-panel'>
            <Button><div className="business-button">
            <img className='business-image' src='https://file.rendit.io/n/QcZIfvSQ2s0JApnJdzj6.png' alt='not found'/>
            <p className='business-text'>व्यापार जोड़ें</p>
            </div>
            </Button> 
            <Button>
            <div className="whitebox">
              <p className="text3">Ankush Jain</p>
              <img
                className="first-img-4"
                src={`https://file.rendit.io/n/efGn827pzzpthUg7z1Fk.svg`}
                alt="notfound"
              />
            </div>    </Button>
            </div>
        </div>
        <div className='fourthpage-card-section'>
          <div className='information-card'>
            <div className='heading-information'>
                <img className='heading-information-logo' src='https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png' alt='not-found'/>
                <p className='heading-information-label'>अग्रजन सेवक मीडिया नेटवर्क</p>
            </div>
            <div className='detail-information'>
                <div className='person-details'>
                    <div className='person-name'>
                        <p className='detail-options'>नाम</p>
                        <p>: Ankush Jain</p>
                    </div>
                    <div className='person-place'>
                        <p className='detail-options'>स्थान</p>
                        <p>: रोहतक</p>
                    </div>
                    <div className='person-status'>
                        <p className='detail-options'>पद</p>
                        <p>: पत्रकार</p>
                    </div>
                    <div className='person-rollno'>
                        <p className='detail-options'>सदस्य क्रमांक</p>
                        <p>: JDF3456</p>

                    </div>
                </div>
                <img className='person-image' src='https://file.rendit.io/n/TXyoPDn1sFJvcL6GXLHx.png'  alt='not-found'/>
            </div>
          </div>
          <img
            className="card-section-image"
            src={`https://file.rendit.io/n/zfoUqFLkmXape0ds6wT4.png`}
            alt="notfound"
          />
        </div>
        <div className='fourthpage-whiteblock'>
          <div className='fourthpage-buttons'>
          <Stack direction='row'>
            <ButtonGroup variant='contained'size='small' >
              <Button style={{backgroundColor:"#f39507",border:"1px solid #f39507"}}><div className='fourthpage-button1'>व्यापार</div></Button>
              <Button style={{backgroundColor:"#ffffff",border:"1px solid #f39507"}}><div className='fourthpage-button2'>व्यक्तिगत</div></Button>
            </ButtonGroup>
          </Stack>
          <div className='search-button'>
            <img className='search-button-image1' src='https://file.rendit.io/n/PY94Pekb5HZSo9DJPFD6.svg' alt='not-found'/>
            <p className='city'>शहर चुनें</p>
            <img className='search-button-image2' src='https://file.rendit.io/n/sp3hR6uIj84vmabeo31W.svg' alt='not-found'/>
            <p className='search'>खोज के लिए यहाँ लिखें</p>
            <img className='search-button-image3'src='https://file.rendit.io/n/gB2MTB0X293FbFK09HA8.svg' alt='not-found'/>
          </div>
          </div>
          <div className='servives'>
          <Whiteblock4 details={fourthpagedata}/>
          </div>
        </div>
        </div>
        <div className="copyright-block">
        all rights reserved @ aggrajan sewak media network
      </div>
    </div>
    <div className='fourthpage-line1'></div>
    <div className='fourthpage-line2'></div>
    <div className='fourthpage-line3'></div>
    <div className='fourthpage-line4'></div>
    <div className='fourthpage-line5'></div>
    <div className='fourthpage-line6'></div>
    <div className='fourthpage-line7'></div>
    <div className='fourthpage-line8'></div>
    <div className='fourthpage-line9'></div>
    <div className='fourthpage-line10'></div>
    </>
  )
}

export default Fourthpage