import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import rådgivning from './Rådgivning.jpeg'

const RådgivningContainer = styled.div`

.case{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #DAE0E8;
    border: 15px solid #fff;
    margin: 10px;
  }
.colummnG {
    background: url(${rådgivning});
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
  
    .colummnG, .colummn1 {
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
    .colummnG, .colummn1 {
      line-height: normal;
    }
  }
  @media screen and (max-width: 480px) {
    .bt {
      font-size: 12px;
      padding: 10px 16px;
    }
    .colummnG, .colummn1 {
      line-height: normal;
    }
  }
`
export default function Rådgivning() {
  return (
    <>
     <Header/>
     <RådgivningContainer>
        <div className="case">
            <div className="colummn1">
                <h2>Rådgivning</h2>
                <p className="p">Vi er et rådgivende elinstallatørfirma, der tilbyder professionel vejledning og rådgivning inden for elinstallationer og elektriske systemer. Vi kan hjælpe med alt fra planlægning og design af elinstallationer til udførelse af installationsarbejde og vedligeholdelse af elektriske systemer. Vi har specialiseret viden og erfaring inden for elteknik og kan hjælpe både private og virksomheder med at sikre, at deres elektriske installationer lever op til gældende lovgivning og sikkerhedsstandarder. Vi kan også rådgive om energioptimering og andre relevante emner inden for elteknik. Vi kan også fungere som konsulenter og samarbejdspartnere for arkitekter, ingeniører og byggefirmaer i forbindelse med større byggeprojekter, hvor der er behov for specialiseret ekspertise inden for elinstallationer.
                </p>
            </div>
            <div className="colummnG">
        
            </div>

           <a className="bt" href="/fåettilbud">Få et tilbud</a>
        </div> 
    
     </RådgivningContainer>
    
    </>
  )
}
