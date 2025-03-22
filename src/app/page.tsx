"use client";
import React, { useState, useEffect } from 'react';
import { Button, Card, Typography } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';

const Home = () => {
  const words = ["Apple", "Banana", "Mango"];
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
      <Card
        style={{
          width: "100%",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          background: "linear-gradient(to bottom, #3c3b3b, #4a4a4a)",
          border: "none",
        }}
      >
        <Typography style={{ textAlign: "center", fontSize: "25px", color: "white", padding: "10px" }}>
          The only Solution your premise needs for
        </Typography>
        <div style={{ height: "35px", overflow: "hidden", display: "flex", justifyContent: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ position: "absolute", fontSize: "25px", color: "#93e145"}}
            >
              {words[currentWord]}
            </motion.div>
          </AnimatePresence>
        </div>
        <Typography style={{ textAlign: "center", fontSize: "15px", color: "white", padding: "20px"}}>
          Nakshatra transforms spaces with 3D mapping, AR/VR based indoor navigation, and real-time event tracking - making navigation easy, emergency evacuation smarter, and events seamless.
        </Typography>
        <Button
  type="primary"
  style={{
    width: "150px",
    height: "48px",
    fontSize: "16px",
    backgroundColor: "#93e145",
    borderRadius: "30px",
    border: "none",
    display: "block",
    margin: "20px auto",
  }}
>
  Contact Us
</Button>

      </Card>
      
    </div>
  );
};

export default Home;