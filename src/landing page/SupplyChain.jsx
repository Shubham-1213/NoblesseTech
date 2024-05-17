import React from 'react'
import styled from 'styled-components'

function SupplyChain() {
  const data = [
    {detail:'PHARMACY',url:'../src/assets/supply-chain/supply1.png'},
    {detail:'CLINICAL MATERIALS',url:'../src/assets/supply-chain/supply2.png'},
    {detail:'SUPPORT SERVICES',url:'../src/assets/supply-chain/supply3.png'},
    {detail:'CAPITAL EQIPMENTS',url:'../src/assets/supply-chain/supply4.png'},
  ];

  return (
    <Wrapper>
      <h1>PROCUREMENT AND SUPPLY CHAIN</h1>
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
    color: #F5E8C7;
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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-img {
    height: 90px;
    width: 90px;
    margin-bottom: 10px;
  }

  .card-detail {
    color: #2D9596;
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
    }

    .card {
      width: 100%;
      max-width: 300px;
      padding: 10px;
      margin-bottom: 20px;
    }
    h1{
        font-size: 5vw;
    }
  }
`;

export default SupplyChain;
