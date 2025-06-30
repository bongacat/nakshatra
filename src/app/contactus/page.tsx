"use client";
import React from "react";
import styled from "styled-components";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { supabase } from "@/utils/supabaseClient"; // adjust path accordingly
import RotatingWords from "../components/RotatingWords";
import { useState } from 'react';
import { keyframes } from 'styled-components';




const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  padding: 40px 20px;
  min-height: 100vh;
  background: linear-gradient(120deg, #0d0d0d 0%, #1c1c1c 100%);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftWrapper = styled.div`
  flex: 1;
  padding: clamp(1rem, 3vw, 2rem);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  width: clamp(280px, calc(40vw + 2rem), 500px); /* Dynamic width */
  min-width: 280px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;




const FormWrapper = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 32px;
  background: rgba(15, 15, 15, 0.75);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 24px rgba(0, 255, 150, 0.07);
  font-family: 'DM Sans', sans-serif;
  color: white;
`;

const StyledHeading = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Orbitron', sans-serif;
  color: #7adc40;
  font-size: 28px;
  letter-spacing: 1.5px;
  text-shadow: 0 0 10px rgba(122, 220, 64, 0.3);
`;

const StyledInput = styled(Input)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.9));
  border: none;
  padding: 14px;
  border-radius: 10px;
  color: #000;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);

  &::placeholder {
    color: #666;
  }

  &:focus, &:hover {
    background: #fff;
    box-shadow: 0 0 12px rgba(122, 220, 64, 0.4);
    outline: none;
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.9));
  border: none;
  padding: 14px;
  border-radius: 10px;
  color: #000;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);

  &::placeholder {
    color: #666;
  }

  &:focus, &:hover {
    background: #fff;
    box-shadow: 0 0 12px rgba(122, 220, 64, 0.4);
    outline: none;
  }
`;

const GreenButton = styled(Button)`
  background: linear-gradient(135deg, #28a745, #21bf45) !important;
  border: none !important;
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  padding: 14px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #21bf45, #1e7e34) !important;
    box-shadow: 0 0 14px rgba(40, 167, 69, 0.6);
  }
`;

const StyledFormItem = styled(Form.Item)`
  width: 100%;
  label {
    color: white !important;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const StyledSelect = styled(Select)`
  width: 100% !important;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  border: none;
  color: #fff !important;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);

  .ant-select-selector {
    background: transparent !important;
    color: #fff !important;
    border: none !important;
    padding: 14px !important;
    border-radius: 10px !important;
    display: flex !important;
    align-items: center !important;
    font-weight: 500;
  }

  .ant-select-arrow {
    color: #7adc40 !important;
  }

  &:focus, &:hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 12px rgba(122, 220, 64, 0.4);
    outline: none;
  }
`;



const slideIn = keyframes`
  from {
    transform: translateX(-120%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Toast = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
  padding: 16px 24px;
  background: ${({ type }) => (type === 'success' ? '#28a745' : '#dc3545')};
  color: white;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
  animation: ${slideIn} 0.4s ease-out;
  font-family: 'DM Sans', sans-serif;
`;

export default function Contact() {
  
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
const [form] = Form.useForm();

const showToast = (type: 'success' | 'error', message: string) => {
  setToast({ type, message });
  setTimeout(() => setToast(null), 3000);
};


  return (
    <>
    {toast && <Toast type={toast.type}>{toast.message}</Toast>}

      <Header />
      <Container>
         <LeftWrapper>
    <RotatingWords />
  </LeftWrapper>
        <FormWrapper>
          <StyledHeading>Contact Us</StyledHeading>
          <Form
  layout="vertical"
  onFinish={async (values) => {
    const { firstName, lastName, email, phone, message, ["How did you find us?"]: hdha } = values;

    const { data, error } = await supabase.from('contactform').insert([{
      f_name: firstName,
      l_name: lastName,
      email: email,
      p_num: phone || null,
      hdha: hdha || '',
      message: message
    }]);

  if (error) {
  console.error(error);
  showToast('error', 'Failed to send message. Please try again.');
} else {
  showToast('success', 'Message sent successfully!');
  setTimeout(() => {
    form.resetFields();
  }, 500);
}

  }}
  form={form} 
>

  <Row gutter={16}>
    <Col span={12}>
      <StyledFormItem
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: 'Please enter your first name' }]}
      >





        <StyledInput prefix={<UserOutlined />} placeholder="First Name" />
      </StyledFormItem>
    </Col>
    <Col span={12}>
      <StyledFormItem
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: 'Please enter your last name' }]}
      >
        <StyledInput prefix={<UserOutlined />} placeholder="Last Name" />
      </StyledFormItem>
    </Col>
  </Row>

  <StyledFormItem
    name="email"
    label="Email"
    rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
  >
    <StyledInput prefix={<MailOutlined />} placeholder="Email Address" />
  </StyledFormItem>

  <StyledFormItem
    name="phone"
    label="Phone Number (Optional)"
    rules={[{ pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number' }]}
  >
    <StyledInput prefix={<PhoneOutlined />} placeholder="Phone Number" />
  </StyledFormItem>

  <StyledFormItem name="How did you find us?" label="How did you hear about us">
    <StyledTextArea rows={4} placeholder="How did you hear about us" />
  </StyledFormItem>

  <StyledFormItem
    name="message"
    label="Message"
    rules={[{ required: true, min: 10, message: 'Message must be at least 10 characters long' }]}
  >
    <StyledTextArea rows={4} placeholder="Write your message here..." />
  </StyledFormItem>

  <StyledFormItem>
    <GreenButton type="primary" htmlType="submit" icon={<MessageOutlined />} block>
      Send Message
    </GreenButton>
  </StyledFormItem>
</Form>

        </FormWrapper>
      </Container>
      <Footer />
    </>
  );
}
