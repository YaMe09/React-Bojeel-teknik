import React from 'react';
import styled from 'styled-components';
import logo from './Boje El-teknik logo.png'
import { Icon } from 'react-icons-kit';
import {arrow_down} from 'react-icons-kit/ikons/arrow_down'
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { linkedin2 } from 'react-icons-kit/icomoon/linkedin2';
const HeaderContainer = styled.header`
*{
  font-family: 'Kreon', serif;
  text-decoration: none;
}

.andenNav{
    background-color: #DAE0E8;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.kon {
    flex: 1;
    text-align: left;
    margin: 10px;
}
  
.kon1 {
  flex: 1;
  text-align: right;
  margin: 10px;
}
.div_right {
    color: #000;
    margin-right: 20px; 
}
.div_right a {
    color: #000;
 }
.div_left {
    margin-left:20px;
    color: #000;
}
.div_left a{
    color: #000;
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-img {
    width: 300px;
    margin-top:15px;
  }
.topnav {
  overflow: hidden;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topnav a {
  float: left;
  display: block;
  color: #B1D3E4;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
}



.topnav .icon {
  display: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 17px;    
  border: none;
  outline: none;
  color: #B1D3E4;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: #B1D3E4;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #fff;
  color: #47ABD2;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: #47ABD2;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
`;

export default function Header() {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    return (
        <>
            <HeaderContainer>
                <div className="andenNav">
                    <div className="kon">
                      <div className="div_left">Ring os på &nbsp; 
                      <a href="tel:+4596967557">60 96 75 57</a></div>
                    </div>
                    <div className="kon1">
                        <div className="div_right">Følge os på &nbsp; &nbsp;
                            <a href='https://www.linkedin.com/posts/boje-elteknik-aps_her-er-et-godt-eksempel-p%C3%A5-hvad-vi-kan-activity-7195138017290833921-WVbv/?originalSubdomain=dk'>
                               <Icon icon={linkedin2} size={20} /> 
                            </a>
                            
                            <a href='https://www.facebook.com/profile.php?id=61559475357666&locale=da_DK'>
                              <Icon icon={facebook} size={20} />
                            </a>
                        </div>
                    </div>
                </div>
       
                <div className="logo">
                    <a href="/" >
                       <img src={logo} alt="logo" className="logo-img"/>
                    </a>
                </div>
                <div className="topnav" id="myTopnav">
                    <a href="/" className="forside">Forside</a>
                    <div className="dropdown">
                        <button className="dropbtn"><a href="/ydelser">ydelser <Icon icon={arrow_down} size={20} /> </a></button>
                        <div className="dropdown-content">
                            <a href="/rådgivning">Rådgivning </a>
                            <a href="/udskiftning">Udskiftning af tavler</a>
                            <a href="/ombygning">Ombygning</a>
                            <a href="/tilbygning">Tilbygning</a>
                            <a href="/datainstallation">Data installation</a>
                            <a href="/byggestrøm">Byggestrøm</a>
                            <a href="/kontor">Kontor</a>
                            <a href="/renovering">Renovering</a>
                        </div>
                    </div> 
                    <a href="/cases">Cases</a>
                    <a href="/job">Job</a>
                    <a href="/omboje">Om Boje</a>
                    <a href="/kontakt">Kontakt</a>
                    <a href="javascript:void(0);" style={{ fontSize: "15px" }} className="icon" onClick={myFunction}>&#9776;</a>
                 </div>
            </HeaderContainer>
        </>
    );
}
