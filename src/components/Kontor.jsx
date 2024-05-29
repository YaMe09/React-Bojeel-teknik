import React from 'react'
import styled from 'styled-components'
import kontor from './Kontor1.jpeg'
import Header from './Header'


const KontorContainer = styled.div`
.case{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #DAE0E8;
    border: 15px solid #fff;
    margin: 10px;
  }
.colummnK {
    background: url(${kontor});
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
  
    .colummnK, .colummn1 {
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
    .colummnK, .colummn1 {
      line-height: normal;
    }
  }
  @media screen and (max-width: 480px) {
    .bt {
      font-size: 12px;
      padding: 10px 16px;
    }
    .colummnK, .colummn1 {
      line-height: normal;
    }
  }
`
export default function Kontor() {
  return (
    <>
        <Header/>
        <KontorContainer>
            <div className="case">
                <div className="colummn1">
                    <h2>Kontor</h2>
                    <p>Boje Elteknik, har specialiserer sig i alle former for elektriske installationer på kontorer og virksomheder. 
                      Vores erfarne montører og teknikere kan hjælpe med alt fra installation af lys og stikkontakter til datainstallationer og sikringssystemer.
                      Boje Elteknik har et stort fokus på kvalitet og service, og de arbejder tæt sammen med dig som kunde for at sikre, at alle installationer 
                      opfylder deres behov og krav. Vi sørger altid for at overholde gældende regler og standarder inden for elinstallationer, og vi kan rådgive 
                      om de nyeste teknologier og løsninger på markedet. Boje Elteknik har et godt ry i branchen for deres pålidelighed, professionalisme og effektive
                      arbejde. Vores mål er at skabe sikre og funktionelle elektriske installationer, der bidrager til en optimal arbejdsplads for vores kunder.
                    </p>
                </div>
                <div className="colummnK">
        
                </div>

                <a className="bt" href="/fåettilbud">Få et tilbud</a>
            </div>
        </KontorContainer>
    </>
  )
}
