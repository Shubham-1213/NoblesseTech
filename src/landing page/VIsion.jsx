import React from "react";
import styled from "styled-components";

function Vision() {
  return (
    <Wrapper>
      <div className="service">
        <div className="image-container">
          <img
            src="../src/assets/home/servicebg.jpg"
            alt="Service Background"
            className="hover-image"
          />
          <div className="overlay"></div>
          <div className="service-text">SERVICE OFFERING</div>
        </div>
        <div className="text-container">
          <h4>OUR VISION</h4>
          <h2 style={{ color: "#2D9596" }}>INTELLIGENCE DRIVEN HEALTHCARE</h2>
          <p>
            is a healthcare solutions firm focused on providing global support
            that facilitates the governments and organizations in providing
            the best quality health at the most affordable cost. At Intellio,
            we bring together a global team that harbors a passion for health
            access and innovation. The experience and outreach of our teams is
            the core success driver of our underlying philosophy of providing
            the best services at the most affordable costs. We have identified
            and developed the relationships with our partners that we leverage
            for our clients to serve their needs in a timely and consistent
            manner
          </p>
        </div>
        <div className="image-container">
          <img
            src="../src/assets/home/servicebg.jpg"
            alt="Service Background"
            className="hover-image"
          />
          <div className="overlay"></div>
          <div className="service-text">PRODUCT PORTFOLIO</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .service {
    margin-top: 30px;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .text-container {
    width: 60%;
  }
  .service-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    color: white;
    z-index: 3;
    /* Place text above overlay */
  }

  .image-container {
    position: relative;
    height: 100%;
    width: 25%;
    overflow: hidden;
    /* Ensure child image doesn't overflow */
  }

  .image-container img{
    filter: blur(2px);
  }

  .hover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Ensure the image covers the container */
    transition: filter 0.3s ease;
    /* Transition for the filter property */
    z-index: 2;
    /* Ensure image is above overlay */
    
  }

  .overlay {
    position: absolute;
    top: 100%; /* Start the overlay offscreen below the image */
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(245, 232, 199, 0.8);
    /* Overlay color with reduced opacity */
    transition: top 0.5s ease, opacity 0.5s ease;
    /* Transitions for top position and opacity */
    opacity: 0;
    /* Initially transparent */
    z-index: 1;
    /* Place overlay below image */
  }

  .image-container:hover .overlay {
    top: 0; /* Slide the overlay up on hover */
    opacity: 1; /* Make overlay fully visible on hover */
  }

  .image-container:hover .hover-image {
    filter: blur(2px);
    /* Apply blur effect on image when hovering */
    
  }

  .image-container:hover .service-text {
    color: black;

  }

  @media (max-width: 768px) {
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .text-container {
      width: 90%;
      padding: 10px;
      text-align: center;
    }

    .image-container {
      width: 90%;
      height: 100px;
    }
    .overlay{
      display: none;
    }
  }
`;

export default Vision;
