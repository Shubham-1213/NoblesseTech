import React from 'react'
import styled from 'styled-components'

function ProductProfile() {
  const data = [
    {detail:'Medical & Surgical Equipment',url:'../src/assets/portfolio/portfolio1.jpg'},
    {detail:'Medical Consumables',url:'../src/assets/portfolio/portfolio2.jpg'},
    {detail:'Laboratory Solutions',url:'../src/assets/portfolio/portfolio3.jpg'},
  ];

  return (
    <Wrapper>
      <h1>OUR PRODUCT PROFILE</h1>
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
    gap: 50px;
  }

  .card {
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 20px; 
    text-align: center;  
  }

  .card-img {
    height: 250px;
    width: 250x;
    margin-bottom: 10px;
  }

  .card-detail {
    color: #2D9596;
    font-size: 23px;
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
      margin-bottom: 20px;
    }

    h1{
        font-size: 5vw;
    }
  }

`;

export default ProductProfile;
