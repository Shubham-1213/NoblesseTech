import React from 'react'
import styled from 'styled-components'

function Consulting() {
  const data = [
    {detail:'STRATEGY AND OPERATIONS',url:'../src/assets/consulting/analysis.png'},
    {detail:'INSIGHTS AND ANALYTICS',url:'../src/assets/consulting/data-analytics.png'},
    {detail:'DIGITAL HEALTH',url:'../src/assets/consulting/telecommunication.png'},
    {detail:'CARE SYSTEM AND REDESIGN',url:'../src/assets/consulting/classroom.png'},
  ];

  return (
    <Wrapper>
      <h1>MANAGEMENT CONSULTING</h1>
      <div className="card-container">
        {
          data.map((item, index) => {
            const { detail, url } = item;
            return (
              <div key={index} className='card'>
                <img src={url} alt={detail} className='card-img' />
                <p className='card-detail'>{detail}</p>
              </div>
            )
          })
        }
      </div>     
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  h1 {
    color: green;
    margin-bottom: 30px;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  .card {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    box-shadow: 0 4px 8px rgba(155, 110, 210, 0.2); 
    padding: 20px; 
    text-align: center; 
    background: white;  
    border-radius: 8px;
  }

  .card-img {
    height: 90px;
    width: 90px;
    margin-bottom: 10px;
  }

  .card-detail {
    color: green;
  }
`;

export default Consulting;
