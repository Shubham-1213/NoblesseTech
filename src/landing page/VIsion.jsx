import React from "react";
import styled from "styled-components";

function Vision() {
  return (
    <Wrapper>
      <div>
        <div className="service">
          <div className="image-container">
            <img
            style={{width:'450px'}}
              src="../src/assets/home/servicebg.jpg"
              alt="Service Background"
            />
            <img
              src="../src/assets/home/edit.png"
              alt="Edit Icon"
              className="edit-icon"
            />
          </div>
          <div className="text-container">
            <h4>OUR VISION</h4>
            <h2 style={{color:'#60f542'}}>INTELLIGENCE DRIVEN HEALTHCARE</h2>
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
        </div>
        <div className="product">
          <div className="image-container">
            <img
              src="../src/assets/home/servicebg.jpg"
              alt="Service Background"
            />
            <img
              src="../src/assets/home/wifi.png"
              alt="Wifi Icon"
              className="edit-icon"
            />
          </div>
        </div>
      </div>
      <div>{/* Other content can go here */}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .service {
    height: 400px;
    width: 100%;
    position: relative;
    display:flex;
    flex-direction:row;
    gap:20px;
  }

  .image-container {
    position: relative; /* This is the relatively positioned parent */
    height: 100%;
    width: 100%;
  }

  .image-container img:first-child {
    height: 100%;
    width: 100%;
    display: block;
  }

  .edit-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center the icon */
    height: 50px; /* Adjust as needed */
    width: 50px; /* Adjust as needed */
    filter: invert(1); /* Change icon color to white */
  }
  .product {
    margin-top: 10px;
    height: 400px;
    width: 450px;
    position: relative;
  }
  .product img {
    height: 100px; /* Adjust as needed */
    width: 100px; /* Adjust as needed */
  }
`;

export default Vision;
