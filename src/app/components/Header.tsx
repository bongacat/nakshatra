// Header.js
"use client";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import type { MenuProps } from "antd";
import styled from "styled-components";
import '@fontsource/orbitron';

// Define menu items
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "about", label: "About Us" },
  { key: "products", label: "Solutions" },
  { key: "our-maps", label: "Our Maps" },
  { key: "resources", label: "Resources" },
  { key: "contact", label: "Contact Us" },
];

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(to right, #000000, #232323);
  position: fixed; /* Change from sticky to fixed */
  top: 0;
  left: 0; /* Add this to ensure full-width positioning */
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 50px;
  }
`;

const DesktopMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  
  li {
    display: inline;
    font-family: 'Orbitron', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: #7adc40;
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #232323;
  padding: 10px;
  z-index: 1001;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;




export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <Navbar>
      {/* Logo */}
      <img src="/logo.png" alt="Logo" width={150} height={65} />
      
      {/* Desktop Menu */}
      <DesktopMenu>
        <li><a href="#">Home</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Our Maps</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">About Us</a></li>
      </DesktopMenu>
      
      {/* Mobile Menu Button */}
      <MobileMenuButton
        type="text"
        icon={
          menuOpen ? (
            <CloseOutlined style={{ color: "#7adc40", fontSize: "28px" }} />
          ) : (
            <MenuOutlined style={{ color: "#7adc40", fontSize: "28px" }} />
          )
        }
        onClick={() => setMenuOpen(!menuOpen)}
      />
      
      {/* Mobile Menu */}
      <MobileMenu $isOpen={menuOpen}>
        <Menu
          mode="vertical"
          theme="dark"
          items={items}
          style={{
            background: "transparent",
            color: "#ffffff",
            borderRight: "none",
            textAlign: "center",
            fontFamily: "DM Sans",
            fontSize: "1.5rem",
          }}
        />
      </MobileMenu>
    </Navbar>
  );
}