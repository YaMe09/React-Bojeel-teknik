import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import tilbygning from './Tilbygning1.jpg'


const TilbygningContainer = styled.div`
.case{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #DAE0E8;
    border: 15px solid #fff;
    margin: 10px;
}
.colummnT {
    background: url(${tilbygning});
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
  
    .colummnT, .colummn1 {
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
    .colummnT, .colummn1 {
      line-height: normal;
    }
  }
  @media screen and (max-width: 480px) {
    .bt {
      font-size: 12px;
      padding: 10px 16px;
    }
    .colummnT, .colummn1 {
      line-height: normal;
    }
  }  

`
export default function Tilbygning() {
  return (
    <>
        <Header/>
        <TilbygningContainer>
            <div className="case">
                <div className="colummn1">
                    <h2>Tilbygning</h2>
                    <p>Vi har i Boje Elteknik, lavet rigtig mange tilbygning gennem årene, og er derfor et professionelt elinstallatørfirma, der specialiserer sig i at udføre elinstallationer i forbindelse med tilbygninger. Med mange års erfaring og ekspertise på området, kan firmaet levere skræddersyede løsninger, der matcher kundens behov og ønsker. Ved at samarbejde tæt med kunderne sikrer Boje Elteknik, at alle installationer bliver udført effektivt, sikkert og i høj kvalitet. Firmaets dygtige team af certificerede elektrikere har stor ekspertise inden for alt fra belysning og stikkontakter til sikring af energioptimering og automatisering. Uanset om det drejer sig om en privat bolig eller en erhvervsejendom, kan Tilbygning elinstallatørfirma sikre, at dine elinstallationer er i topform og opfylder alle gældende krav og standarder. Med fokus på kundetilfredshed og kvalitetsarbejde er firmaet det rette valg, når det kommer til elinstallationer i forbindelse med tilbygninger.
                    </p>
                </div>
                <div className="colummnT">
        
                </div>

                <a class="bt" href="/fåettilbud">Få et tilbud</a>
            </div>
        </TilbygningContainer>

    </>
  )
}
