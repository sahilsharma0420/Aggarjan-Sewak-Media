import React from "react";
import "./Fourthpage.css";
import { fourthpagedata } from "./fourthpagedata";
import { Button, Stack, ButtonGroup } from "@mui/material";
import Whiteblock4 from "./whiteblock4";
function Fourthpage() {
  return (
    <>
      <div className="fourthpage">
        <div className="fourthpage-main-content">
          <div className="fourthpage-header-section">
            <div className="fourthpage-first-box">
              <img
                className="fourthpage-first-img"
                src={`https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png`}
                alt="notfound"
              />
              <div className="fourthpage-text1">अग्रजन सेवक मीडिया नेटवर्क</div>
            </div>
            <div className="fourthpage-side-panel">
              <Button>
                <div className="fourthpage-business-button">
                  <img
                    className="fourthpage-business-image"
                    src="https://file.rendit.io/n/QcZIfvSQ2s0JApnJdzj6.png"
                    alt="not found"
                  />
                  <p className="fourthpage-business-text">व्यापार जोड़ें</p>
                </div>
              </Button>
              <Button>
                <div className="fourthpage-whitebox">
                  <p className="fourthpage-text3">Ankush Jain</p>
                  <img
                    className="fourthpage-first-img-4"
                    src={`https://file.rendit.io/n/efGn827pzzpthUg7z1Fk.svg`}
                    alt="notfound"
                  />
                </div>{" "}
              </Button>
            </div>
          </div>
          <div className="fourthpage-card-section">
            <div className="fourthpage-information-card">
              <div className="fourthpage-heading-information">
                <img
                  className="fourthpage-heading-information-logo"
                  src="https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png"
                  alt="not-found"
                />
                <p className="fourthpage-heading-information-label">
                  अग्रजन सेवक मीडिया नेटवर्क
                </p>
              </div>
              <div className="fourthpage-detail-information">
                <div className="fourthpage-person-details">
                  <div className="fourthpage-person-name">
                    <p className="fourthpage-detail-options">नाम</p>
                    <p className="fourthpage-detail-options">: Ankush Jain</p>
                  </div>
                  <div className="fourthpage-person-place">
                    <p className="fourthpage-detail-options">स्थान</p>
                    <p className="fourthpage-detail-options">: रोहतक</p>
                  </div>
                  <div className="fourthpage-person-status">
                    <p className="fourthpage-detail-options">पद</p>
                    <p className="fourthpage-detail-options">: पत्रकार</p>
                  </div>
                  <div className="fourthpage-person-rollno">
                    <p className="fourthpage-detail-options">सदस्य क्रमांक</p>
                    <p className="fourthpage-detail-options">: JDF3456</p>
                  </div>
                </div>
                <img
                  className="fourthpage-person-image"
                  src="https://file.rendit.io/n/TXyoPDn1sFJvcL6GXLHx.png"
                  alt="not-found"
                />
              </div>
            </div>
            <img
              className="fourthpage-card-section-image"
              src={`https://file.rendit.io/n/zfoUqFLkmXape0ds6wT4.png`}
              alt="notfound"
            />
          </div>
          <div className="fourthpage-whiteblock">
            <div className="fourthpage-buttons">
              <Stack direction="row">
                <ButtonGroup variant="contained" size="small">
                  <Button
                    style={{
                      backgroundColor: "#f39507",
                      border: "1px solid #f39507",
                    }}
                  >
                    <div className="fourthpage-button1">व्यापार</div>
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #f39507",
                    }}
                  >
                    <div className="fourthpage-button2">व्यक्तिगत</div>
                  </Button>
                </ButtonGroup>
              </Stack>
              <div className="search-button">
                <img
                  className="search-button-image1"
                  src="https://file.rendit.io/n/PY94Pekb5HZSo9DJPFD6.svg"
                  alt="not-found"
                />
                <p className="city">शहर चुनें</p>
                <img
                  className="search-button-image2"
                  src="https://file.rendit.io/n/sp3hR6uIj84vmabeo31W.svg"
                  alt="not-found"
                />
                <p className="search">खोज के लिए यहाँ लिखें</p>
                <img
                  className="search-button-image3"
                  src="https://file.rendit.io/n/gB2MTB0X293FbFK09HA8.svg"
                  alt="not-found"
                />
              </div>
            </div>
            <div className="servives">
              <Whiteblock4 details={fourthpagedata} />
              <div className="fourthpage-line1"></div>
              <div className="fourthpage-line2"></div>
              <div className="fourthpage-line3"></div>
              <div className="fourthpage-line4"></div>
              <div className="fourthpage-line5"></div>
              <div className="fourthpage-line6"></div>
              <div className="fourthpage-line7"></div>
              <div className="fourthpage-line8"></div>
              <div className="fourthpage-line9"></div>
              <div className="fourthpage-line10"></div>
              <div className="fourthpage-line11"></div>
              <div className="fourthpage-line12"></div>
              <div className="fourthpage-line13"></div>
              <div className="fourthpage-line14"></div>
              <div className="fourthpage-line15"></div>
              <div className="fourthpage-line16"></div>
              <div className="fourthpage-line17"></div>
              <div className="fourthpage-line18"></div>
            </div>
          </div>
        </div>
        <div className="copyright-block">
          all rights reserved @ aggrajan sewak media network
        </div>
      </div>
    </>
  );
}

export default Fourthpage;
