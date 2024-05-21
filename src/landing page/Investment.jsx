import React from 'react'
import styled from 'styled-components'

function Investment() {
  const data = [
    {detail:'GOVERNMENT AID',url:'../src/assets/investment/government-aid.png'},
    {detail:'CAPITAL INVESTMENT',url:'../src/assets/investment/capital-investment.png'},
    {detail:'GLOBAL JOINT VENTURES',url:'../src/assets/investment/joint-global-ventures.png'},
    {detail:'BUSINESS CASE DEVELOPMENT',url:'../src/assets/investment/business-case-development.png'},
  ];

  return (
    <Wrapper>
      <h1>INVESTMENT ADVISORY</h1>
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
    color: #F6B17A;
    margin-bottom: 30px;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
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
    background: #7077A1;  
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-img {
    height: 90px;
    width: 90px;
    margin-bottom: 10px;
  }

  .card-detail {
    color: #31363F;
    font-size: 20px;
  }
  .card:hover {
    transform: translateY(-10px); /* Move card up */
    box-shadow: 0 4px 8px rgba(255, 225, 255, 1); /* Apply box shadow */
  }

  @media (max-width: 768px) {
    .card-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .card {
      width: 90%;
      max-width: 300px;
      margin-bottom: 20px;
    }

    h1{
        font-size: 5vw;
    }
  }
`;

export default Investment;
