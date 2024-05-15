import React from 'react'
import styled from 'styled-components'

function Services() {
  const data = [{detail:'MANAGEMENT CONSULTING',url:'../src/assets/services/consultation.png'},
                {detail:'INVESTMENT ADVISORY',url:'../src/assets/services/auditor.png'},
                {detail:'PROGRAM MANAGEMENT',url:'../src/assets/services/programmer.png'},
                {detail:'PROCUREMENT AND SUPPLY CHAIN',url:'../src/assets/services/trolley.png'},
]
  return (
    <Wrapper>
      {
        data.map((item,index)=>{
          const {detail,url} = item;
          return(
            <div key={index} className='card' >
               <img src={url} alt={detail} style={{height:'90px',width:'90px'}} />
                <p style={{color:'green'}}>{detail}</p>

            </div>
          )
        })
      }       
    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-items:space-between;
.card {
  width:200px;
  height:400px;
  justify-items:center;
  align-items:center;'
  margin:auto;
}
`
export default Services