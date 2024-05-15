import React from 'react'
import Slider from './Slider'
import Vision from './VIsion'
import styled from 'styled-components'
import Services from './Services'
import Consulting from './Consulting'

function Home() {
  return (
    <Wrapper>
        <Slider/>
        <Vision/>
        <Services/>
        <Consulting/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:column;

`
export default Home