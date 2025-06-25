/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Card, Typography } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import '@fontsource/orbitron';
import '@fontsource/dm-sans';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Footer from "./components/Footer";
import { CardLeft, CardRight } from './components/Card';
import MyComponent from "./components/box";



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
  margin-bottom: 5rem;

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
  padding: 0.3rem;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 0.25rem; /* Reduced margin-bottom */
  
  @media (min-width: 768px) {
    padding: 0.75rem;
    margin-bottom: 0.3rem; /* Slightly increased for larger screens */
  }
`;
const StyledTypography2 = styled(Typography)`
  text-align: center;
  font-size: clamp(2.65rem, 5vw, 2.5rem);
  color: white;
  padding: 0.1rem;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 0.10rem; /* Reduced margin-bottom */
  
  @media (min-width: 768px) {
    padding: 0.45rem;
    margin-bottom: 0.3rem; /* Slightly increased for larger screens */
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
//;;

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

const circularImage = styled(Image)`
  
  border-radius: 50%;
`
const StyledCard2 = styled(Card)`
  width: 80%;
  font-family: 'DM Sans', sans-serif;
  background: transparent; /* Removes background */
  backdrop-filter: blur(5px); /* Slight blur effect */
  -webkit-backdrop-filter: blur(5px);
  border: none;
  padding: clamp(1.25rem, 4vw, 3rem);
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;

  /* Center align using flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5rem auto; /* Centers horizontally */

  /* Left align on smaller screens */
  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: auto;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
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
  const router = useRouter();
    
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
        <StyledButton onClick={() => router.push('/contactus')}>Contact Us</StyledButton>
      </StyledCard>
      <MyComponent />
      <StyledCard2>
      <StyledTypography2 >
          Meet Nakhastra
        </StyledTypography2>
        <StyledSubTypography>
        The backbone of your geospatial ecosystem, enabling seamless scalability from single site to enterprise-wide operations. With top-tier security, real-time insights, and effortless integrations, we transform spatial data into actionable intelligence—boosting safety, efficiency, and decision-making.
        </StyledSubTypography>
      </StyledCard2>
      
      <CardLeft imageUrl="/DALL·E 2025-03-28 06.38.36 - A sleek, black-and-white digital illustration of a futuristic drone scanning and mapping terrain. The drone has a streamlined, high-tech design with m.webp" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <CardRight imageUrl="/DALL·E 2025-03-28 06.41.40 - A sleek, professional black-and-white version of a 3D isometric city map displayed on a smartphone screen. The city has detailed buildings, roads, and.webp" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <CardLeft imageUrl="/geospatial intillegence.webp" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <CardRight imageUrl="/mapped smarter.webp" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <Footer />


    </div>
  );
};
 
export default Home;