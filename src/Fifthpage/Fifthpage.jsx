import React from "react";
import "./Fifthpage.css";
import { fifthpagedata } from "./fifthpagedata";
import { Button, Stack, ButtonGroup } from "@mui/material";
import Whiteblock5 from "./whiteblock5";
function Fifthpage() {
  return (
    <>
      <div className="fifthpage">
        <div className="fifthpage-main-content">
          <div className="fifthpage-header-section">
            <div className="fifthpage-first-box">
              <img
                className="fifthpage-first-img"
                src={`https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png`}
                alt="notfound"
              />
              <div className="fifthpage-text1">अग्रजन सेवक मीडिया नेटवर्क</div>
            </div>
            <div className="fifthpage-side-panel">
              <Button>
                <div className="fifthpage-business-button">
                  <img
                    className="fifthpage-business-image"
                    src="https://file.rendit.io/n/QcZIfvSQ2s0JApnJdzj6.png"
                    alt="not found"
                  />
                  <p className="fifthpage-business-text">व्यापार जोड़ें</p>
                </div>
              </Button>
              <Button>
                <div className="fifthpage-whitebox">
                  <p className="fifthpage-text3">Ankush Jain</p>
                  <img
                    className="fifthpage-first-img-4"
                    src={`https://file.rendit.io/n/efGn827pzzpthUg7z1Fk.svg`}
                    alt="notfound"
                  />
                </div>{" "}
              </Button>
            </div>
          </div>
          <div className="fifthpage-card-section">
            <div className="fifthpage-information-card">
              <div className="fifthpage-heading-information">
                <img
                  className="fifthpage-heading-information-logo"
                  src="https://file.rendit.io/n/NfiJx3UOyNarekUJiQy8.png"
                  alt="not-found"
                />
                <p className="fifthpage-heading-information-label">
                  अग्रजन सेवक मीडिया नेटवर्क
                </p>
              </div>
              <div className="fifthpage-detail-information">
                <div className="fifthpage-person-details">
                  <div className="fifthpage-person-name">
                    <p className="fifthpage-detail-options">नाम</p>
                    <p className="fifthpage-detail-options">: Ankush Jain</p>
                  </div>
                  <div className="fifthpage-person-place">
                    <p className="fifthpage-detail-options">स्थान</p>
                    <p className="fifthpage-detail-options">: रोहतक</p>
                  </div>
                  <div className="fifthpage-person-status">
                    <p className="fifthpage-detail-options">पद</p>
                    <p className="fifthpage-detail-options">: पत्रकार</p>
                  </div>
                  <div className="fifthpage-person-rollno">
                    <p className="fifthpage-detail-options">सदस्य क्रमांक</p>
                    <p className="fifthpage-detail-options">: JDF3456</p>
                  </div>
                </div>
                <img
                  className="fifthpage-person-image"
                  src="https://file.rendit.io/n/TXyoPDn1sFJvcL6GXLHx.png"
                  alt="not-found"
                />
              </div>
            </div>
            <img
              className="fifthpage-card-section-image"
              src={`https://file.rendit.io/n/zfoUqFLkmXape0ds6wT4.png`}
              alt="notfound"
            />
          </div>
          <div className="fifthpage-whiteblock">
            <div className="fifthpage-buttons">
              <Stack direction="row">
                <ButtonGroup variant="contained" size="small">
                  <Button
                    style={{
                      backgroundColor: "#f39507",
                      border: "1px solid #f39507",
                    }}
                  >
                    <div className="fifthpage-button1">व्यापार</div>
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #f39507",
                    }}
                  >
                    <div className="fifthpage-button2">व्यक्तिगत</div>
                  </Button>
                </ButtonGroup>
              </Stack>
              <div className="Search-button">
                <img
                  className="Search-button-image1"
                  src="https://file.rendit.io/n/PY94Pekb5HZSo9DJPFD6.svg"
                  alt="not-found"
                />
                <p className="City">शहर चुनें</p>
                <img
                  className="Search-button-image2"
                  src="https://file.rendit.io/n/sp3hR6uIj84vmabeo31W.svg"
                  alt="not-found"
                />
                <p className="Search">खोज के लिए यहाँ लिखें</p>
                <img
                  className="Search-button-image3"
                  src="https://file.rendit.io/n/gB2MTB0X293FbFK09HA8.svg"
                  alt="not-found"
                />
              </div>
            </div>
            <div className="servives">
              <Whiteblock5 details={fifthpagedata} />
              <div className="fifthpage-line1"></div>
              <div className="fifthpage-line2"></div>
              <div className="fifthpage-line3"></div>
              <div className="fifthpage-line4"></div>
              <div className="fifthpage-line5"></div>
              <div className="fifthpage-line6"></div>
              <div className="fifthpage-line7"></div>
              <div className="fifthpage-line8"></div>
              <div className="fifthpage-line9"></div>
              <div className="fifthpage-line10"></div>
              <div className="fifthpage-line11"></div>
              <div className="fifthpage-line12"></div>
              <div className="fifthpage-line13"></div>
              <div className="fifthpage-line14"></div>
              <div className="fifthpage-line15"></div>
              <div className="fifthpage-line16"></div>
              <div className="fifthpage-line17"></div>
              <div className="fifthpage-line18"></div>
              <div className="fifthpage-line19"></div>
              <div className="fifthpage-line20"></div>
              <div className="fifthpage-line21"></div>
              <img className="side-image" src="https://file.rendit.io/n/zgS6u2DEYCINUDT1gxHs.png" alt="not found"/>
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

export default Fifthpage;
