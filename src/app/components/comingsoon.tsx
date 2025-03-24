"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const Text = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  color: #7adc40;
  font-family: 'Orbitron', sans-serif;
  
  text-transform: uppercase;
  border-right: 3px solid #7adc40;
  white-space: nowrap;
  overflow: hidden;
`;

const ComingSoon = () => {
  const text = "COMING SOON...";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting effect
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 100 : 150); // Speed of deleting and typing

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <Container>
      <Text
        animate={{ borderRightColor: ["transparent", "white"] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {displayedText}
      </Text>
    </Container>
  );
};

export default ComingSoon;
