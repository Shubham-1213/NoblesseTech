import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import Vision from './VIsion';
import Services from './Services';
import Consulting from './Consulting';
import Investment from './Investment';
import Program from './Program';
import SupplyChain from './SupplyChain';
import ProductProfile from './ProductProfile';
import Footer from './Footer';

// Styled component for the scroll reveal effect
const ScrollReveal = styled.div`
  opacity: 1;
  // transform: translateY(20px);
  // transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    // transform: translateY(0);
  }
`;

// Custom hook to handle scroll reveal logic
const useScrollReveal = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (observer) {
        revealRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return addToRefs;
};

// Main Home component
const Home = () => {
  const addToRefs = useScrollReveal();

  return (
    <Wrapper>
      <ScrollReveal ref={addToRefs}>
        <Slider />
      </ScrollReveal>
      <ScrollReveal ref={addToRefs}>
        <Vision />
      </ScrollReveal>
      <ScrollReveal ref={addToRefs}>
        <Services />
      </ScrollReveal>
      <ScrollReveal ref={addToRefs}>
        <Consulting />
      </ScrollReveal>
      <ScrollReveal ref={addToRefs}>
        <Investment />
      </ScrollReveal>
      <ScrollReveal ref={addToRefs}>
        <Program />
      </ScrollReveal>
      <ScrollReveal ref={addToRefs}>
        <SupplyChain />
      </ScrollReveal>
      <ScrollReveal ref={addToRefs}>
        <ProductProfile />
      </ScrollReveal>
      <Footer />
    </Wrapper>
  );
};

// Styled component for the main wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export default Home;
