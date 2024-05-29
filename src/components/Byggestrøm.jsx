import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Byggstrøm3 from './Byggstrøm3.jpg'

const ByggestrømContainer = styled.div`
.case{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #DAE0E8;
  border: 15px solid #fff;
  margin: 10px;
}
.colummnB {
  background: url(${Byggstrøm3});
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

  .colummnB, .colummn1 {
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
  .colummnB, .colummn1 {
    line-height: normal;
  }
}
@media screen and (max-width: 480px) {
  .bt {
    font-size: 12px;
    padding: 10px 16px;
  }
  .colummnB, .colummn1 {
    line-height: normal;
  }
}

`
export default function Byggestrøm() {
  return (
    <>
      <Header/>
      <ByggestrømContainer>
        <div className="case">
          <div className="colummn1">
            <h2>Byggestrøm </h2>
            <p>Byggestrøm elinstallatørfirma er en professionel og pålidelig elinstallatør, der specialiserer sig i installation
              af byggestrøm til byggepladser. Med mange års erfaring og ekspertise inden for elinstallationer, kan vi sikre, at
              dine byggestrømsbehov bliver opfyldt på en effektiv og sikker måde.
  
              Vi tilbyder en bred vifte af elinstallationsløsninger til byggevirksomheder, entreprenører og private
              ejendomsejere. Vores team af veluddannede og erfarne elektrikere er dedikerede til at levere høj kvalitet arbejde
              og overholde alle sikkerhedsstandarder.

              Uanset om du har brug for midlertidig byggestrøm til en ny byggeplads, renoveringsprojekt eller begivenhed, kan
              Byggestrøm elinstallatørfirma sikre, at din elinstallation er korrekt dimensioneret og installeret til at opfylde
              dine specifikke behov. Kontakt os i dag for at få mere information om vores services og hvordan vi kan hjælpe dig
              med dit næste projekt.
            </p>
          </div>
          <div className="colummnB">
        
          </div>

          <a className="bt" href="/fåettilbud">Få et tilbud</a>
        </div>

      </ByggestrømContainer>
    </>
  )
}
