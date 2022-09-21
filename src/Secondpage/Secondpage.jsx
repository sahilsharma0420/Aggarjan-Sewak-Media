import React from 'react'
import "./Secondpage.css";
import { Carousel } from 'react-bootstrap';
import {Button} from "@mui/material";
function Secondpage() {
  return (
    <div className='secondpage'>
        <div className='main-header'>
        <div className='logo-label'>
            <img className='logo' src='https://file.rendit.io/n/i6eVE4eCy7Q1r47emUYJ.png' alt='not found' />
            <p className='label'>अग्रजन सेवक मीडिया नेटवर्क</p>
        </div>
        <div className='side-header'>
        <div className='news-search-bar'>
        <Button variant="outlined" style={{border:"none"}}><div className='searchbar'><img
            style={{paddingRight:"10px"}}   src={`https://file.rendit.io/n/PY94Pekb5HZSo9DJPFD6.svg`}
            /><p className='secondpage-city'  >शहर चुनें</p><img style={{marginLeft:'5px'}}  src={`https://file.rendit.io/n/sp3hR6uIj84vmabeo31W.svg`} /><p className="secondpage-search" >खोज के लिए यहाँ लिखें</p> <img style={{paddingLeft:"40px"}} src={`https://file.rendit.io/n/gB2MTB0X293FbFK09HA8.svg`} /></div></Button>
        </div>
        <div className='button2'>
     <Button style={{color:"black"}}>  <div className='news-addition'>
          <img className='plus' src={`https://file.rendit.io/n/QcZIfvSQ2s0JApnJdzj6.png`} alt="not found"/>
          <p>खबर जोड़ें</p>
        </div></Button>  
        </div>
        <div className='button3'>
        <Button  style={{color:"black"}}>     <div className='name'>
          <p  className='namevalue' style={{textAlign:"left"}}>Ankush Jain</p>
          <p className='namevalue'>v</p>
        </div></Button></div> 
        </div>
        </div>
        <div className='menu'>
           <div className="menu-container">
            <p>होम</p>
            <p>लाइफस्टाइल</p>
            <p>ऑटो</p>
            <p>गैजेट्स</p>
            <p>बिजनेस</p>
            <p>धर्म</p>
            <p>विदेश</p>
            <p>करियर</p>
            <p>मनोरंजन</p>
            <p>क्रिकेट</p>
            <p>राज्य</p>
            <p> देश</p>
            <p> वीडियो</p>
            <p>फोटो</p>
            <p>यूज़ ब्रीफ</p>
            </div>

        </div>
        <div className='content'>
        <div className='left-content'>
         <div className='courtroom'>
            <div className='courtroom-information' >
                <img className='left-arrow' src='https://file.rendit.io/n/ooqUNHCMPqGEgFE4X9EC.svg'/>
                <div className='courtroom-text'>
                <p className='courtroom-text1'>बरेली के मेडिसिटी अस्पताल के डॉक्टर समेत चार पर केस दर्ज</p>
                <img className='loading' src='https://file.rendit.io/n/6b9i5ZEbZ6PUUz4WKm25.svg'/>
                </div>
                <img className='right-arrow' src='https://file.rendit.io/n/aPQjhN7KgEJ9ayfcPyLr.svg'/>
            </div>
         </div>
         <div className='crousel-second'>
    <Carousel  >
      <Carousel.Item>
      <div className='courtroom3'>
            <div className='courtroom-information' >
                <img className='left-arrow' src='https://file.rendit.io/n/ooqUNHCMPqGEgFE4X9EC.svg'/>
                <div className='courtroom-text'>
                <p className='courtroom-text1'>बरेली के मेडिसिटी अस्पताल के डॉक्टर समेत चार पर केस दर्ज</p>
                <img className='loading' src='https://file.rendit.io/n/6b9i5ZEbZ6PUUz4WKm25.svg'/>
                </div>
                <img className='right-arrow' src='https://file.rendit.io/n/aPQjhN7KgEJ9ayfcPyLr.svg'/>
            </div>
         </div>
      
      </Carousel.Item>
      <Carousel.Item>
      <div className='courtroom1'>
            <div className='courtroom-information' >
                <img className='left-arrow' src='https://file.rendit.io/n/ooqUNHCMPqGEgFE4X9EC.svg'/>
                <div className='courtroom-text'>
                <p className='courtroom-text1'>बरेली के मेडिसिटी अस्पताल के डॉक्टर समेत चार पर केस दर्ज</p>
                <img className='loading' src='https://file.rendit.io/n/6b9i5ZEbZ6PUUz4WKm25.svg'/>
                </div>
                <img className='right-arrow' src='https://file.rendit.io/n/aPQjhN7KgEJ9ayfcPyLr.svg'/>
            </div>
         </div>

        
      </Carousel.Item>
      <Carousel.Item>
      <div className='courtroom2'>
            <div className='courtroom-information' >
                <img className='left-arrow' src='https://file.rendit.io/n/ooqUNHCMPqGEgFE4X9EC.svg'/>
                <div className='courtroom-text'>
                <p className='courtroom-text1'>बरेली के मेडिसिटी अस्पताल के डॉक्टर समेत चार पर केस दर्ज</p>
                <img className='loading' src='https://file.rendit.io/n/6b9i5ZEbZ6PUUz4WKm25.svg'/>
                </div>
                <img className='right-arrow' src='https://file.rendit.io/n/aPQjhN7KgEJ9ayfcPyLr.svg'/>
            </div>
         </div>
        
      </Carousel.Item>
    </Carousel>
    </div>
         {/*first-information */}
         <div className='first-information'>
            <div className='first-information-left'>
            <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
            </div>
            <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
            </div>
            <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
            </div>
            <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
            </div>
            </div>
            <div className='first-information-right'>
                <img className='yoga' src='https://file.rendit.io/n/qvA447rQyrj7F7HfqmBJ.png'/>
                <div className='information-cover1'>
      <div className="information1">
        <img
          className="flag1"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news1">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share1">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line1'></div>
                </div>
                <div className='information-cover1'>
      <div className="information1">
        <img
          className="flag1"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news1">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share1">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line1'></div>
                </div>
            </div>
         </div>
          {/*first-information */}
          {/*entertainment */}
          <div className='entertainment-heading'>
            <div className='entertainment-block'>मनोरंजन</div>
            <div className='entertainment-line'></div>
          </div>
          <div className='entertainment'>
            <div className='entertainment-left'>
            <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
     </div>
      <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
     </div>
      <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
     </div>
      <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
     </div>
            </div>
            <div className='entertainment-right'>
            <img className='yoga' src='https://file.rendit.io/n/qvA447rQyrj7F7HfqmBJ.png' />
            <div className='information-cover1'>
      <div className="information1">
        <img
          className="flag1"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news1">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share1">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line1'></div>
                </div>
     <div className='information-cover1'>
      <div className="information1">
        <img
          className="flag1"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news1">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share1">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line1'></div>
                </div>
             </div>
          </div>
          {/*entertainment */}
          {/*business*/}
          <div className='business-heading'>
            <div className='business-block'>व्यापार</div>
            <div className='business-line'></div>
          </div>
          <div className='business'>
            <div className="business-left">
            <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
     </div>
      <div className='information-cover'>
      <div className="information">
        <img
          className="flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='information-line'></div>
     </div>
      
            </div>
            <div className='business-right'>
                <img className='yoga' src='https://file.rendit.io/n/qvA447rQyrj7F7HfqmBJ.png'/>
            
     
            </div>
          </div>
          {/*business */}
          {/* newscontent*/}
          <div className='news-heading1'>
            <div className='news-block1'>खबर 2 मिनट</div>
            <div className='news-line1'></div>
          </div>
          <div className='right-content1'>
            <div className='right-content1-left'>
            <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
            </div>
            <div className='right-content1-right'>
            <img className='lg-yoga-right' src='https://file.rendit.io/n/dQN3w334whoBeoQaN7HE.png'/>
            <div className='person1'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date1">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
            </div>
          </div>
          {/*news-content */}
        </div>
        <div className='right-content'>
            <img className='lg-yoga' src='https://file.rendit.io/n/dQN3w334whoBeoQaN7HE.png'/>
            <div className='news-heading'>
            <div className='news-block'>खबर 2 मिनट</div>
            <div className='news-line'></div>
          </div>
          <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
          <img className='lg-yoga1' src='https://file.rendit.io/n/dQN3w334whoBeoQaN7HE.png'/>
          <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <div className='person'>
        <img className='person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
        </div>
        </div>
        <div className='mobile-content'>
        <div className='mobile-crousel-second '>
    <Carousel  >
      <Carousel.Item>
      <div className='courtroom3'>
            <div className='courtroom-information' >
                <img className='left-arrow' src='https://file.rendit.io/n/ooqUNHCMPqGEgFE4X9EC.svg'/>
                <div className='courtroom-text'>
                <p className='courtroom-text1'>बरेली के मेडिसिटी अस्पताल के डॉक्टर समेत चार पर केस दर्ज</p>
                <img className='loading' src='https://file.rendit.io/n/6b9i5ZEbZ6PUUz4WKm25.svg'/>
                </div>
                <img className='right-arrow' src='https://file.rendit.io/n/aPQjhN7KgEJ9ayfcPyLr.svg'/>
            </div>
         </div>
      
      </Carousel.Item>
      <Carousel.Item>
      <div className='courtroom1'>
            <div className='courtroom-information' >
                <img className='left-arrow' src='https://file.rendit.io/n/ooqUNHCMPqGEgFE4X9EC.svg'/>
                <div className='courtroom-text'>
                <p className='courtroom-text1'>बरेली के मेडिसिटी अस्पताल के डॉक्टर समेत चार पर केस दर्ज</p>
                <img className='loading' src='https://file.rendit.io/n/6b9i5ZEbZ6PUUz4WKm25.svg'/>
                </div>
                <img className='right-arrow' src='https://file.rendit.io/n/aPQjhN7KgEJ9ayfcPyLr.svg'/>
            </div>
         </div>

        
      </Carousel.Item>
      <Carousel.Item>
      <div className='courtroom2'>
            <div className='courtroom-information' >
                <img className='left-arrow' src='https://file.rendit.io/n/ooqUNHCMPqGEgFE4X9EC.svg'/>
                <div className='courtroom-text'>
                <p className='courtroom-text1'>बरेली के मेडिसिटी अस्पताल के डॉक्टर समेत चार पर केस दर्ज</p>
                <img className='loading' src='https://file.rendit.io/n/6b9i5ZEbZ6PUUz4WKm25.svg'/>
                </div>
                <img className='right-arrow' src='https://file.rendit.io/n/aPQjhN7KgEJ9ayfcPyLr.svg'/>
            </div>
         </div>
        
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='mobile-lower-information'>
        <div className='mobile-information-cover'>
      <div className="mobile-information">
        <img
          className="mobile-flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="mobile-news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="mobile-date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='mobile-information-line'></div>
     </div>
     <div className='mobile-information-cover'>
      <div className="mobile-information">
        <img
          className="mobile-flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="mobile-news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="mobile-date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='mobile-information-line'></div>
     </div>
     <img className='mobile-yoga' src='https://file.rendit.io/n/qvA447rQyrj7F7HfqmBJ.png'/>
     <div className='mobile-information-cover'>
      <div className="mobile-information">
        <img
          className="mobile-flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="mobile-news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="mobile-date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='mobile-information-line'></div>
     </div>
     <div className='mobile-entertainment-heading'>
            <div className='mobile-entertainment-block1'>मनोरंजन</div>
            <div className='mobile-entertainment-line'></div>
          </div>
          <div className='mobile-information-cover'>
      <div className="mobile-information">
        <img
          className="mobile-flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="mobile-news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="mobile-date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='mobile-information-line'></div>
     </div>
     <img className='mobile-yoga' src='https://file.rendit.io/n/qvA447rQyrj7F7HfqmBJ.png'/>
     <div className='mobile-information-cover'>
      <div className="mobile-information">
        <img
          className="mobile-flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="mobile-news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="mobile-date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='mobile-information-line'></div>
     </div>
     <div className='mobile-business-heading'>
            <div className='mobile-business-block1'>व्यापार</div>
            <div className='mobile-business-line'></div>
          </div>
          <div className='mobile-information-cover'>
      <div className="mobile-information">
        <img
          className="mobile-flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="mobile-news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="mobile-date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='mobile-information-line'></div>
     </div>
     <img className='mobile-yoga' src='https://file.rendit.io/n/qvA447rQyrj7F7HfqmBJ.png'/>
     <div className='mobile-information-cover'>
      <div className="mobile-information">
        <img
          className="mobile-flag"
          src={`https://file.rendit.io/n/1tIxNlMMOzAlCNMOyxLc.png`}
        />
        <div>
          <div className="mobile-news">
            {" "}
            पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का, अब...
          </div>
          <div className="mobile-date-share">
            <p>Tue, 21 Jun 2022 04:35 PM</p>
            <img src={`https://file.rendit.io/n/rhtzitKVi4uPz2f0VRPJ.svg`} />
          </div>
        </div>
      </div>
      <div className='mobile-information-line'></div>
     </div>
     <div className='mobile-news-heading1'>
            <div className='mobile-news-block2'>खबर 2 मिनट</div>
            <div className='mobile-news-line1'></div>
          </div>
          <div className='mobile-person'>
        <img className='mobile-person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="mobile-person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
      <img className='mobile-lg-yoga1' src='https://file.rendit.io/n/dQN3w334whoBeoQaN7HE.png'/>
      <div className='mobile-person'>
        <img className='mobile-person-image' src='https://file.rendit.io/n/Gkqez6820weLUO8GIzku.png'/>
       <div className="mobile-person-date">पंजाब के IAS अफसर संजय पोपली और उनके सचिव गिरफ्तार, टेंडर मंजूर करने को ठेकेदार से मांगी थी कमीशन</div>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Secondpage