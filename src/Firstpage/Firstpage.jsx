import React from "react";
import "./Firstpage.css";
import { Firstpagedata } from "./Firstpagedata";
import { Button } from "@mui/material";
import { Carousel } from "react-bootstrap";
import Firstpagecard from "./Firstpagecard";
function Firstpage() {
  return (
    <>
      <div className="firstpage">
        <div className="firstpage-header-section">
          <div className="firstpage-first-box">
            <img
              className="firstpage-first-img"
              src={`https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png`}
              alt="notfound"
            />
            <div className="firstpage-text1">अग्रजन सेवक मीडिया नेटवर्क</div>
          </div>

          <Button>
            <div className="firstpage-whitebox">
              <p className="firstpage-text3">Ankush Jain</p>
              <img
                className="firstpage-first-img-4"
                src={`https://file.rendit.io/n/efGn827pzzpthUg7z1Fk.svg`}
                alt="notfound"
              />
            </div>
          </Button>
        </div>
       <div className="firstpage-card-section">
          <div className="firstpage-information-card">
            <div className="firstpage-heading-information">
              <img
                className="firstpage-heading-information-logo"
                src="https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png"
                alt="not-found"
              />
              <p className="firstpage-heading-information-label">
                अग्रजन सेवक मीडिया नेटवर्क
              </p>
            </div>
            <div className="firstpage-detail-information">
              <div className="firstpage-person-details">
                <div className="firstpage-person-name">
                  <p className="firstpage-detail-options">नाम</p>
                  <p className="firstpage-detail-options">: Ankush Jain</p>
                </div>
                <div className="firstpage-person-place">
                  <p className="firstpage-detail-options">स्थान</p>
                  <p className="firstpage-detail-options">: रोहतक</p>
                </div>
                <div className="firstpage-person-status">
                  <p className="firstpage-detail-options">पद</p>
                  <p className="firstpage-detail-options">: पत्रकार</p>
                </div>
                <div className="firstpage-person-rollno">
                  <p className="firstpage-detail-options">सदस्य क्रमांक</p>
                  <p className="firstpage-detail-options">: JDF3456</p>
                </div>
              </div>
              <img
                className="firstpage-person-image"
                src="https://file.rendit.io/n/TXyoPDn1sFJvcL6GXLHx.png"
                alt="not-found"
              />
            </div>
          </div>
          <img
            className="firstpage-card-section-image"
            src={`https://file.rendit.io/n/zfoUqFLkmXape0ds6wT4.png`}
            alt="notfound"
          />
          <img
            className="firstpage-card-section-image2"
            src={`https://file.rendit.io/n/zfoUqFLkmXape0ds6wT4.png`}
            alt="notfound"
          />
             <div className="Crousel-Item">
          <Carousel>
            <Carousel.Item>
            <div className="Crousel-firstpage-information-card">
            <div className="Crousel-firstpage-heading-information">
              <img
                className="Crousel-firstpage-heading-information-logo"
                src="https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png"
                alt="not-found"
              />
              <p className="Crousel-firstpage-heading-information-label">
                अग्रजन सेवक मीडिया नेटवर्क
              </p>
            </div>
            <div className="Crousel-firstpage-detail-information">
              <div className="Crousel-firstpage-person-details">
                <div className="Crousel-firstpage-person-name">
                  <p className="Crousel-firstpage-detail-options">नाम</p>
                  <p className="Crousel-firstpage-detail-options">: Ankush Jain</p>
                </div>
                <div className="Crousel-firstpage-person-place">
                  <p className="Crousel-firstpage-detail-options">स्थान</p>
                  <p className="Crousel-firstpage-detail-options">: रोहतक</p>
                </div>
                <div className="Crousel-firstpage-person-status">
                  <p className="Crousel-firstpage-detail-options">पद</p>
                  <p className="Crousel-firstpage-detail-options">: पत्रकार</p>
                </div>
                <div className="Crousel-firstpage-person-rollno">
                  <p className="Crousel-firstpage-detail-options">सदस्य क्रमांक</p>
                  <p className="Crousel-firstpage-detail-options">: JDF3456</p>
                </div>
              </div>
              <img
                className="Crousel-firstpage-person-image"
                src="https://file.rendit.io/n/TXyoPDn1sFJvcL6GXLHx.png"
                alt="not-found"
              />
            </div>
          </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="dressing">
            
                <img
                  className="Crousel-card-image"
                  src={`https://file.rendit.io/n/zfoUqFLkmXape0ds6wT4.png`}
                  alt="notfound"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="dressing">
                <img
                  className="Crousel-card-image1"
                  src={`https://file.rendit.io/n/EF4Z2UNF98lchk5CN5UL.png`}
                  alt="notfound"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
       <div className="firstpage-cards">
         <Firstpagecard details={Firstpagedata} />
         
       </div>
       
      </div>
      <div className="copyright-block">
          all rights reserved @ aggrajan sewak media network
        </div>
    </>
  );
}
export default Firstpage;
