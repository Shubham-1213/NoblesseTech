import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper isScrolled={isScrolled}>
      <div className='navbar'>
        <div className='title'>
          <NavLink to='/'>
            <h1 className='h1'>Medical Equipment</h1>
          </NavLink>
        </div> 
        <div className='menu'onClick={handleOnClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={isOpen ? "links-open" : "links"}>
          <NavLink to='/cryptonews'>Home</NavLink>
          <NavLink to='/forexnews'>About Us</NavLink>
          <NavLink to='/worldnews'>Services</NavLink>
          <NavLink to='/profile'>Our Product Portfolio</NavLink>
          <NavLink to='/signup'>Contact</NavLink>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .navbar {
    z-index: 2;
    top: 0;
    position: fixed;
    width: 100%;
    justify-content: space-around;
    background-color: ${(props) => (props.isScrolled ? '#F5E8C7' : 'transparent')};
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    color: white;
    transition: background-color 0.3s ease-in-out;
    border: none;
  }

  .title .h1 {
    margin: 0;
    color: ${(props) => (props.isScrolled ? '#333' : '#f2f2f2')};
    transition: color 0.3s ease-in-out;
  }

  .links a {
    margin-left: 15px;
    text-decoration: none;
    color: ${(props) => (props.isScrolled ? '#333' : 'white')};
    transition: color 0.3s ease-in-out;
  }

  .links a:hover {
    text-decoration: underline;
  }

  .links{
    margin-right:80px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    gap:20px;
    font-size:20px;
  }

  .menu{
    position: absolute;
    top: 15px;
    right: 60px;
    flex-direction: column;
    justify-content: space-between;
    width: 2.25rem;
    height: 1.8rem;
  }

  .menu span{
    height: 0.4rem;
    width: 100%;
    background-color: black;
    border-radius: 0.2rem;
  }

  @media (max-width: 768px) {
     .title .h1{
      font-size: 8vw;
      color: black;
    }
    .navbar {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: #F5E8C7;
      color: black;
    }
    .links {
      display: none;
    }
    .menu{
      display: flex;
    }
    .links-open{
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      color: black;
      justify-content: space-around;
    }

    .links-open a{
      color: black;
    }
    .links a{
      color: black;
    }

    .navbar .menu{
      display: flex;
    }


    
  }
`;
