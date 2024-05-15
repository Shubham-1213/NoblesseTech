import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


export default function NavBar() {
  return (
    <Wrapper>
   <div className='navbar'>
   <div className='title'>
    <NavLink to='/'>

        <h1 className='h1 '>Medical Equipment</h1>
    </NavLink>
    </div>
    
    <div className='links'>
      <NavLink style={{color:'#f2f2f2'}}  to='/cryptonews'>Home </NavLink>
      <NavLink style={{color:'#f2f2f2'}} to='/forexnews'>About Us </NavLink>
      <NavLink style={{color:'#f2f2f2'}} to='/worldnews'>Services </NavLink>
      <NavLink style={{color:'#f2f2f2'}} to='/profile'>Our Product Portfolio</NavLink>
      <NavLink style={{color:'#f2f2f2'}} to='/signup'>Contact </NavLink>

    </div>
   </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .navbar {
    z-index: 2;
    top: 0;
    position: fixed; 
    width: 100%;
    justify-content: space-between;
    background-color: transparent; 
    display: flex;
    flex-direction: row;
    padding: 10px 20px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .title .h1 {
    margin: 0;
    color:#f2f2f2;
  }

  .links a {
    margin-left: 15px;
    text-decoration: none;
    color: black;
  }

  .links a:hover {
    text-decoration: underline;
  }
  .links{
    margin-right:80px;
    
  }
`;