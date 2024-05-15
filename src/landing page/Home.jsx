import React from 'react'
import Slider from './Slider'
import Vision from './VIsion'
import styled from 'styled-components'
import Services from './Services'

function Home() {
  return (
    <Wrapper>
        <Slider/>
        <Vision/>
        <Services/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:column;

`
export default Home