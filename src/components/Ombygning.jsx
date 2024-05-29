import React from 'react'
import styled from 'styled-components'
import ombygning from './ombygning\ .jpg'
import Header from './Header'

const OmbygningContainer = styled.div`
.case{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #DAE0E8;
    border: 15px solid #fff;
    margin: 10px;
  }
  .colummnO {
    background: url(${ombygning});
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
  
    .colummnO, .colummn1 {
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
    .colummnO, .colummn1 {
      line-height: normal;
    }
  }
  @media screen and (max-width: 480px) {
    .bt {
      font-size: 12px;
      padding: 10px 16px;
    }
    .colummnO, .colummn1 {
      line-height: normal;
    }
  }
  
`
export default function Ombygning() {
  return (
    <>
        <Header/>
        <OmbygningContainer>
            <div className="case">
                <div className="colummn1">
                    <h2>Ombygning</h2>
                    <p>Vi hos Boje Elteknik har rigtig mange års erfaring og vi har specialiserer os i ombygning af elinstallationer i private hjem, virksomheder og offentlige bygninger. Vores erfarne elinstallatører har ekspertise inden for alle typer af elektriske installationer og kan håndtere alt fra mindre reparationer og udskiftninger til større renoveringsprojekter. Vi garanterer altid høj kvalitet og sikkerhed i vores arbejde og sikrer, at alle installationer opfylder de gældende sikkerhedsstandarder. Vores mål er at skabe effektive og pålidelige elinstallationer, der opfylder vores kunders behov og forventninger. Uanset om du har brug for en ombygning af din nuværende elinstallation eller ønsker at installere nye og innovative løsninger, så kan vi hjælpe dig med at realisere dine ønsker. Kontakt os gerne for en uforpligtende samtale og få et tilbud på din næste elinstallation.
                    </p>
                </div>
                <div className="colummnO">
        
                </div>

                <a class="bt" href="/fåettilbud">Få et tilbud</a>
            </div>
        </OmbygningContainer>
    </>
  )
}
