import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import renovering from './23019_IMG_5610.jpeg'

const RenoveringContainer = styled.div`
.case{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #DAE0E8;
    border: 15px solid #fff;
    margin: 10px;
}
.colummnR {
    background: url(${renovering});
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 45%;
    float: right;
    padding: 10px;
    height: 450px;
    margin: 15px; 
  }
  .colummn1 {
    width: 45%;
    float: left;
    padding: 10px;
    height: 450px;
    margin: 15px 0;
    line-height: 2;
  }
  
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  h2 {
    text-align: center;
  }
  
  .bt{
    padding: 15px 20px;
    background-color: #B1D3E4;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgb(6, 6, 6);
    color: white;
    cursor: pointer;
    margin: 25px 15px 15px 25px ;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 30px;
    text-decoration: none;
    font-size: 20px;
    width: 96%;
  }
  
  .bt:hover {
    background-color: #47ABD2;
  }
  
  
  @media screen and (max-width: 600px) {
    .case {
      flex-direction: row;
    }
  
    .colummnR, .colummn1 {
      width: 100%;
      margin: 5px;
      line-height: normal;
    }
  }
  
  
  @media only screen and (max-width: 768px) {
    .bt {
      padding: 10px 20px;
      font-size: 14px;
    }
    .colummnR, .colummn1 {
      line-height: normal;
    }
  }
  @media screen and (max-width: 480px) {
    .bt {
      font-size: 12px;
      padding: 10px 16px;
    }
    .colummnR, .colummn1 {
      line-height: normal;
    }
  }

`
export default function Renovering() {
  return (
    <>
        <Header/>
        <RenoveringContainer>
            <div className="case">
                <div className="colummn1">
                    <h2>Renovering</h2>
                    <p>Boje Elteknik udfører en professionel rådgivning, så du som kunde er sikker på at få den løsning der passer til dit behov. Vi er ansvarlig for at opdatere og forbedre elektriske systemer i en bygning. Dette omfatter udskiftning af gamle ledninger, installation af nye stikkontakter og lysarmaturer, samt sikring af at alt er i overensstemmelse med gældende sikkerhedsstandarder. En renovering af elinstallationer kan bidrage til at forbedre sikkerheden, energieffektiviteten og funktionaliteten i en bygning. Det sikker også at der f.eks. ikke er nogle gamle stofledninger der er møre, og andre ting der kan skabe en ustabil installation.  
 
                    </p>
                </div>
                <div className="colummnR">
        
                </div>

                <a className="bt" href="/fåettilbud">Få et tilbud</a>
            </div>
        </RenoveringContainer>
    </>
  )
}
