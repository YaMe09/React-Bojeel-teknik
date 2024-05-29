import React from 'react'
import styled from 'styled-components'
import udskiftning from './elektriker.jpeg'
import Header from './Header'

const UdskiftningContainer = styled.div`
.case{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #DAE0E8;
    border: 15px solid #fff;
    margin: 10px;
  }
  .colummnU {
    background: url(${udskiftning});
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
  
    .colummnU, .colummn1 {
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
    .colummnU, .colummn1 {
      line-height: normal;
    }
  }
  @media screen and (max-width: 480px) {
    .bt {
      font-size: 12px;
      padding: 10px 16px;
    }
    .colummnU, .colummn1 {
      line-height: normal;
    }
  }
  
`
export default function Udskiftning() {
  return (
    <>
      <Header/>
      <UdskiftningContainer>
        <div className="case">
            <div className="colummn1">
              <h2>Udskiftning af tavler</h2>
              <p>Når det kommer til udskiftning af tavler, er det vigtigt at hyre en professionel elinstallatør for at sikre, at arbejdet bliver udført korrekt og sikkert. Et elinstallatørfirma vil have den nødvendige ekspertise og erfaring til at håndtere opgaven effektivt og sikre, at den nye tavle opfylder alle gældende sikkerhedsstandarder. Når du hyrer Boje Elteknik til at foretage udskiftning af tavler, vil vi først foretage en grundig inspektion af din eksisterende installation for at identificere eventuelle problemer eller behov for opgraderinger. Derefter vil de hjælpe med at vælge den rigtige tavle til dine behov og installere den på en sikker og effektiv måde. Ved at hyre et professionelt elinstallatørfirma som Boje Elteknik til at håndtere udskiftning af tavler, kan du have tillid til, at arbejdet bliver udført korrekt og sikkert, og at din elinstallation er i god stand. Så hvis du har brug for at udskifte din tavle, så kontakt os i dag for at få den hjælp, du har brug for.
              </p>
            </div>
            <div className="colummnU">
        
            </div>

           <a className="bt" href="/fåettilbud">Få et tilbud</a>
        </div>
      </UdskiftningContainer>
    </>
  )
}
