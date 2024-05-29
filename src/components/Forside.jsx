import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Boje from './Boje.jpg'

const ForsideContainer = styled.div`
#root{
  padding: 0;
  margin: 0; 
}
.container {
    position: relative;
  }
  
  .container img {
    width: 100%;
    height: 80vh;
    
  }
  
  .container .btn {
    position: absolute;
    top: 65%;
    left: 38%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #B1D3E4;
    color: white;
    font-size: 16px;
    padding: 22px 32px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 2px 4px #47ABD2;
  }
  
  .container .btn:hover {
    background-color: #47ABD2;
  }

`

export default function Forside() {
  return (
    <div>
        <Header/>
        <ForsideContainer>
            <div className="container">
                <img src={Boje} alt="forside"/>
                <a className="btn" href="/fåettilbud">Få et tilbud</a>
            </div>
        </ForsideContainer>
    </div>
  )
}
