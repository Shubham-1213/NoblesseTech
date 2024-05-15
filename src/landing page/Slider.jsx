import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import styled, { keyframes } from 'styled-components';

function Slider() {
  return (
    <Wrapper>
      <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={3000}>
        <div>
          <img src="../src/assets/carousel/boxing3.jpg" alt="Boxing 3" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../src/assets/carousel/boxing2.jpg" alt="Boxing 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../src/assets/carousel/gym1.jpg" alt="Gym 1" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="../src/assets/carousel/gym2.jpg" alt="Gym 2" />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    </Wrapper>
  );
}

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  20% { opacity: 1; transform: translateY(0); }
  80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const Wrapper = styled.div`
  width: 100%;
  .legend {
    animation: ${fadeInOut} 3s ease-in-out forwards;
    position: absolute;
    top: 50%;  /* Position vertically centered */
    left: 50%;  /* Position horizontally centered */
    transform: translate(-50%, -50%);  /* Center the element */
    background-color: rgba(0, 0, 0, 0.5);  /* Transparent background */
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;  /* Center align the text */
  }
`;

export default Slider;

