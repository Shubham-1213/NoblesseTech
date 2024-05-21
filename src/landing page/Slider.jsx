import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import styled, { keyframes } from 'styled-components';

function Slider() {
  return (
    <Wrapper>
      <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true} >
        <div className='carousel-item'>
          <img src="../src/assets/carousel/boxing3.jpg" alt="Boxing 3" />
          <p className="legend">SMART HEALTHCARE SOLUTIONS </p>
        </div>
        <div className='carousel-item'>
          <img src="../src/assets/carousel/boxing2.jpg" alt="Boxing 2" />
          <p className="legend">ITS ALL ABOUT EXCELLENCE</p>
        </div>
        <div>
          <img src="../src/assets/carousel/gym1.jpg" alt="Gym 1" />
          <p className="legend">BEST AMONG THE BEST</p>
        </div>
        <div>
          <img src="../src/assets/carousel/gym2.jpg" alt="Gym 2" />
          <p className="legend">EFFICIENT. COMMITTED. TRUSTED</p>
        </div>
      </Carousel>
    </Wrapper>
  );
}

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  20% { opacity: 1; transform: translateY(0); }
  80% { opacity: 0; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const Wrapper = styled.div`
  width: 100%;
  .legend {
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent !important;
    color: #F6B17A !important;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 50px !important; 
    text-align: center;
    animation: ${fadeInOut} 3s ease-in-out infinite;
    opacity: 1; /* Initial opacity 0 to trigger animation */
  }

  .carousel-item {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the container */
  }
  
  @media (max-width: 768px) {
    width: 100%;
    .legend {
      font-size: 30px !important;
    }
  }
`;


export default Slider;

