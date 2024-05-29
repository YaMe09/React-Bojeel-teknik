import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { Icon } from 'react-icons-kit';
import {facebook2} from 'react-icons-kit/icomoon/facebook2'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'

const KontaktContainer = styled.div`
.row {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:10px;
  }
  
  .column {
    width: 45%;
    padding: 10px;
    height: 300px;
    border: 15px #DAE0E8 solid;
    background-color:#B1D3E4;
    box-shadow: 0 2px 4px rgb(6, 6, 6);
  }
  
  .column1 {
    width: 45%;
    padding: 10px;
    height: 300px;
    border: 15px #DAE0E8 solid;
    background-color:#B1D3E4;
    box-shadow: 0 2px 4px rgb(6, 6, 6);
  }
  
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  h2 {
    text-align: center;
    margin-top: 15px;
  }
  
  .kon {
    padding-left: 30px;
    margin-top: 15px; 
    text-decoration: none;
    color: #000;
  }
  .kon a{
    text-decoration: none;
  }
  
  .icon-bar {
    justify-content: center;
    algin-items:center;
    text-align: center;
    padding-top:35px;
  }
  
  .icon-bar a {
    display: inline-block;
    transition: all 0.3s ease;
    color: white;
    margin: 15px;
    font-size:40px;
  }
  
  
  
  
  
  @media screen and (max-width: 600px) {
    .row {
      flex-direction: row;
    }
  
    .column, .column1 {
      width: 100%;
      margin: 5px;
    }
  }

`
export default function Kontakt() {
    return (
      <>
         <Header/>
         <KontaktContainer>
             <div className="row">
                  <div className="column">
                      <h2>Kontakt oplysning</h2>
                      <p className="kon">Flemming Boje Jørgensen
                         Aut. El-installatør, indehaver.
                      </p>
                      <a href="tel:+4596967557">
                      <p class="kon">Tel.: 60 96 75 57</p></a>
                      <a href='mailto:flemming@boje-elteknik.dk'>
                      <p class="kon">E-mail: flemming@boje-elteknik.dk</p></a>
                      <p class="kon">CVR. nr. 37762334 </p>
                      <p class="kon">Adresse: Smedevænge 13, 4600 Køge </p>
  
                  </div>
                  <div className="column1">
                      <h2>Følge os på</h2>
                      <p className="kon">sociale medier og ser alle vores nye og tilbuder</p>
                      <div className="icon-bar">
                          <a href='https://www.linkedin.com/posts/boje-elteknik-aps_her-er-et-godt-eksempel-p%C3%A5-hvad-vi-kan-activity-7195138017290833921-WVbv/?originalSubdomain=dk'>
                            <Icon icon={linkedin} size={80} style={{ color: '#007bb5' }}/> 
                          </a>
                            
                          <a href='https://www.facebook.com/profile.php?id=61559475357666&locale=da_DK'>
                            <Icon icon={facebook2} size={80} style={{ color: '#3B5998' }}/>
                          </a>
                      </div>
                  </div>
              </div>
          </KontaktContainer>
      </>
    )
  }
  