import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import tak from './Tak.png'


const TakContainer = styled.div`
.tak{
    margin: 30px;
    border: 25px solid #DAE0E8;
    align-items: center;
    justify-content: center;
  }
  .tak img {
    width: 100%;
    height: 75vh;
  }
`
export default function Tak() {
  return (
    <>
       <Header/>
       <TakContainer>
            <section className="tak">
               <img src={tak}/>
            </section>
       </TakContainer>
    </>
  )
}
