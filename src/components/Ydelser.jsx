import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Byggestrøm from './Byggestrøm.png'
import Data from './Data.png'
import Ombygning from './Ombygning.png'
import Tilbygning from './Tilbygning-kopi.png'
import Rådgivning from './Rådgivning.png'
import Udskiftning from './Udskiftning-kopi.png'
import Kontor from './Kontor.png'
import Renovering from './Renovering.png'

const YdelserContainer = styled.div`

.ydelse{
    margin: 15px;
   
  }
  span{
    text-align: center;
  }
  div.gallery {
    border: 10px solid #B1D3E4;
  }
  .gallery{
    margin: 15px;
    background-color: #B1D3E4;
  }
  
  div.gallery:hover {
    border: 5px solid #47ABD2;
  }
  
  div.gallery img {
    width: 100%;
    height: auto;
    
  }
  
  div.desc {
    padding: 15px;
    text-align: center;
    color: #fff;
  }
  
  
  
  .responsive {
    padding: 0 6px;
    float: left;
    width: 31.33333%;
  }
  
  @media only screen and (max-width: 700px) {
    .responsive {
      width: 49.33333%;
      margin: 6px 0;
    }
  }
  
  @media only screen and (max-width: 500px) {
    .responsive {
      width: 100%;
    }
  }
  
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default function Ydelser() {

  return (
    <>
       <Header/>
       <YdelserContainer>
            <section className="ydelse">
                <span><h3>Vi arbejder for begge Private og Erhverv</h3></span>
                <div className="responsive">
                    <div className="gallery">
                        <a href="/byggestrøm" target="_parent">
                          <img src={Byggestrøm} alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Byggestrøm</div>
                    </div>
                </div>
        
                <div className="responsive">
                    <div className="gallery">
                        <a href="/datainstallation" target="_parent">
                           <img src={Data} alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Data installation</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a href="/ombygning" target="_parent">
                            <img src={Ombygning} alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Ombygninbg</div>
                    </div>
                </div>
        
                <div className="responsive">
                    <div className="gallery">
                        <a href="/tilbygning"   target="_parent">
                            <img src={Tilbygning} alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Tilbygning</div>
                    </div>
                </div>
    
                <div className="responsive">
                    <div className="gallery">
                        <a  href="/rådgivning" target="_parent">
                            <img src={Rådgivning} alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Rådgivning</div>
                    </div>
                </div>
        
                <div className="responsive">
                    <div className="gallery">
                        <a  href="/udskiftning"    target="_parent">
                           <img src={Udskiftning} alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Udskiftning af tavler</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a  href="/kontor"    target="_parent">
                            <img src={Kontor} alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Kontor</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a  href="/renovering"    target="_parent">
                            <img src={Renovering} alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Renovering</div>
                    </div>
                </div>
       
            </section>
        </YdelserContainer>
    </>
  )
}
