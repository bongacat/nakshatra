"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Card, Typography } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import '@fontsource/orbitron';
import '@fontsource/dm-sans';


import Footer from "./components/Footer";

const StyledCard = styled(Card)`
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  border-radius: 0 0 4rem 4rem;
  background: rgb(0,0,0);
  background: linear-gradient(99deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 50%, rgba(0,0,0,1) 100%);
  border: none;
  padding: clamp(1.25rem, 4vw, 3rem);
  position: relative;
  overflow: hidden;

  /* Grid background pattern */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-size: 45px 45px;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    
    /* Fade effect using a mask */
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
    
    z-index: 0;
    pointer-events: none;
  }
`;


const StyledTypography = styled(Typography)`
  text-align: center;
  font-size: clamp(1.65rem, 4vw, 1.75rem);
  color: white;
  padding: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 0.25rem; /* Reduced margin-bottom */
  
  @media (min-width: 768px) {
    padding: 0.75rem;
    margin-bottom: 0.5rem; /* Slightly increased for larger screens */
  }
`;

const WordContainer = styled.div`
  height: 6rem;
  overflow: visible;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0.25rem 0; /* Adjusted margin */
  
  @media (min-width: 768px) {
    height: 5.5rem;
    margin: 0.5rem 0; /* Adjusted margin for larger screens */
  }
  
  @media (min-width: 1200px) {
    height: 5rem;
    margin: 0.75rem 0; /* Adjusted margin for larger screens */
  }
`;

const StyledSubTypography = styled(Typography)`
  text-align: center;
  font-size: clamp(1.2rem, 3vw, 1.125rem);
  color: white;
  padding: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  margin-top: 2rem; /* Increased margin-top for smaller screens */
  
  @media (min-width: 768px) {
    padding: 0.75rem;
    margin-top: 1.5rem; /* Adjusted margin for larger screens */
  }
  
  @media (min-width: 1200px) {
    padding: 1rem;
    margin-top: 1.75rem; /* Adjusted margin for larger screens */
  }
`;

const StyledMotionDiv = styled(motion.div)`
  position: absolute;
  color: #7adc40;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: clamp(1.4rem, 4.6vw, 2.6rem);
  line-height: 1.2;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: clamp(8rem, 15vw, 11.25rem);
  height: clamp(2.5rem, 6vh, 3.5rem);
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-family: 'DM Sans', sans-serif;
  background-color: #7adc40;
  border-radius: 1.875rem;
  border: none;
  display: block;
  margin: clamp(1.5rem, 3vw, 2rem) auto;
  &:hover {
    background-color: #6ac536;
    transform: scale(1.05);
    background-color: #11a5e9 !important;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Home = () => {
  const words = [
    "Interactive Mapping",
    "Indoor Navigation",
    "Event Tracking",
    "Smarter Emergency Evacuations"
  ];
  const [currentWord, setCurrentWord] = useState(0);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);
    
  return (
    <div className="App">
      <Header />
      <StyledCard>
        <StyledTypography>
          The only Solution your premise needs for
        </StyledTypography>
        <WordContainer>
          <AnimatePresence mode="wait">
            <StyledMotionDiv
              key={currentWord}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {words[currentWord]}
            </StyledMotionDiv>
          </AnimatePresence>
        </WordContainer>
        <StyledSubTypography>
          Nakshatra transforms spaces with 3D mapping, AR/VR based indoor
          navigation, and real-time event tracking - making navigation easy,
          emergency evacuation smarter, and events seamless.
        </StyledSubTypography>
        <StyledButton type="primary">Contact Us</StyledButton>
      </StyledCard>
      <Footer />
      


    </div>
  );
};
 
export default Home;