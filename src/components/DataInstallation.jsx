import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Data1 from './Data1.jpg'

const DataInstallationContainer = styled.div`
.case{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #DAE0E8;
    border: 15px solid #fff;
    margin: 10px;
  }
  
  .colummnD {
    background: url(${Data1});
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
    line-height: 1.7;
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
  
    .colummnD, .colummn1 {
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
    .colummnD, .colummn1 {
      line-height: normal;
    }
  }
  @media screen and (max-width: 480px) {
    .bt {
      font-size: 12px;
      padding: 10px 16px;
    }
    .colummnD, .colummn1 {
      line-height: normal;
    }
  }

`
export default function DataInstallation() {
  return (
    <> 
        <Header/>
        <DataInstallationContainer>
            <div className="case">
                <div className="colummn1">
                    <h2>Data installation</h2>
                    <p>Data installation er en vigtig del af enhver virksomheds struktur, da det indebærer installation af netværkskomponenter, for at sikre en effektiv datastrøm. Boje Elteknik, er god til at lave data installation, og har ekspertise og erfaring til at sikre, at alle installationer udføres korrekt og i overensstemmelse med gældende standarder og best practices. Vores team af professionelle elektrikere og teknikere kan hjælpe med alt fra kabelføring og stikforbindelser til konfiguration og fejlfinding af kabler of stik. Med en pålidelig og effektiv data installationspartner kan virksomheder være sikre på, at deres datainfrastruktur fungerer problemfrit og sikkerhedsmæssigt. Og vi har en stærk samarbejdspartner der kan hjælpe med at opsætte trådløse netværk.
                    </p>
                </div>
                <div className="colummnD">
            
                </div>
    
               <a className="bt" href="/fåettilbud">Få et tilbud</a>
            </div>
        </DataInstallationContainer>
    </>
  )
}
