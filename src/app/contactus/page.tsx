"use client";
import React from "react";
import styled from "styled-components";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Form, Input, Button, Select } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';

const { Option } = Select;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background: #000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'DM Sans', sans-serif;
  color: white;
`;

const StyledHeading = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  font-family: 'Orbitron', sans-serif;
  color: #7adc40;
`;

const StyledInput = styled(Input)`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  &:focus, &:hover {
    opacity: 1;
    background: #4c4c4c;
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  &:focus, &:hover {
    opacity: 1;
    background: #4c4c4c;
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

const StyledFormItem = styled(Form.Item)`
  width: 100%;
  label {
    color: white !important;
  }
`;

export default function Contact() {
  return (
    <>
      <Header />
      <Container>
        <FormWrapper>
          <StyledHeading>Contact Us</StyledHeading>
          <Form layout="vertical">
            <StyledFormItem
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: 'Please enter your first name' }]}
            >
              <StyledInput prefix={<UserOutlined />} placeholder="First Name" />
            </StyledFormItem>

            <StyledFormItem
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: 'Please enter your last name' }]}
            >
              <StyledInput prefix={<UserOutlined />} placeholder="Last Name" />
            </StyledFormItem>

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

            <StyledFormItem name="country" label="Country">
              <Select placeholder="Select your country" prefix={<GlobalOutlined />}>
                <Option value="India">India</Option>
                <Option value="USA">USA</Option>
                <Option value="UK">UK</Option>
                <Option value="Canada">Canada</Option>
                <Option value="Australia">Australia</Option>
                <Option value="Other">Other</Option>
              </Select>
            </StyledFormItem>

            <StyledFormItem
              name="How did you find us?"
              label="How did you heart about us"
            >
              <StyledTextArea rows={4} placeholder="How did you heart about us" />
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
