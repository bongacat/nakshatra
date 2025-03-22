"use client";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "about", label: "About Us" },
  { key: "products", label: "Products" },
  { key: "pricing", label: "Pricing" },
  { key: "testimonials", label: "Testimonials" },
  { key: "contact", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("");

  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "linear-gradient(to right, #000000, #232323)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0, color: "#7adc40" }}>logo</h2>

      {/* Mobile Menu Button */}
      <Button
        type="text"
        icon={
          menuOpen ? (
            <CloseOutlined style={{ color: "#7adc40", fontSize: "28px" }} />
          ) : (
            <MenuOutlined style={{ color: "#7adc40", fontSize: "28px" }} />
          )
        }
        style={{
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            width: "100%",
            height: "100%",
            background: "#232323",
            padding: "10px",
            zIndex: 1001, // Ensure the menu is above other content
            borderBottomLeftRadius: "30px", // Rounded corners at the bottom-left
            borderBottomRightRadius: "30px", // Rounded corners at the bottom-right
        
          }}
        >
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
    fontSize: "1.5rem", // Increase font size
     // Add padding around menu items
  }}
 
/>

        </div>
      )}
    </nav>
  );
}