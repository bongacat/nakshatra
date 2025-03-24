"use client";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';


const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #000000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'DM Sans', sans-serif;
`;

const StyledHeading = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  font-family: 'Orbitron', sans-serif;
`;

const StyledInput = styled(Input)`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  &:focus, &:hover {
    opacity: 1;
    background: #f0f0f0;
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  &:focus, &:hover {
    opacity: 1;
    background: #f0f0f0;
  }
`;

const GreenButton = styled(Button)`
  background-color: #28a745 !important;
  border-color: #28a745 !important;
  font-family: 'DM Sans', sans-serif;
  &:hover {
    background-color: #218838 !important;
    border-color: #1e7e34 !important;
  }

`;

export default  function Contact (){
    return (
        <>
        <Header />
        <Container>
            
          <FormWrapper>
            <StyledHeading>Contact Us</StyledHeading>
            <Form 
             
              layout="vertical" 
              
            >
              <Form.Item 
                name="name" 
                rules={[{ 
                  required: true, 
                  message: 'Please enter your full name' 
                }]}
              >
                <StyledInput 
                  prefix={<UserOutlined />} 
                  placeholder="Full Name" 
                />
              </Form.Item>
    
              <Form.Item 
                name="email" 
                rules={[{ 
                  required: true, 
                  type: 'email', 
                  message: 'Please enter a valid email address' 
                }]}
              >
                <StyledInput 
                  prefix={<MailOutlined />} 
                  placeholder="Email Address" 
                />
              </Form.Item>
    
              <Form.Item 
                name="phone" 
                rules={[{ 
                  pattern: /^[0-9]{10}$/, 
                  message: 'Please enter a valid 10-digit phone number' 
                }]}
              >
                <StyledInput 
                  prefix={<PhoneOutlined />} 
                  placeholder="Phone Number (Optional)" 
                />
              </Form.Item>
    
              <Form.Item 
                name="message" 
                rules={[{ 
                  required: true, 
                  min: 10, 
                  message: 'Message must be at least 10 characters long' 
                }]}
              >
                <StyledTextArea 
                  placeholder="Your Message" 
                  rows={4} 
                />
              </Form.Item>
    
              <Form.Item>
                <GreenButton 
                  type="primary" 
                  htmlType="submit" 
                  icon={<MessageOutlined />} 
                  block
                >
                  Send Message
                </GreenButton>
              </Form.Item>
            </Form>
          </FormWrapper>
        </Container>
        <Footer />
        </>
      );
}
