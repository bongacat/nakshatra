"use client";
import { List } from "antd";
import '@fontsource/orbitron';
import styled from "styled-components";
import { DM_Sans } from "next/font/google";


const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #121212;
    padding: 20px;
    gap: 20px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const StyledList = styled(List)`
    width: 100%;
    max-width: 250px;
    border: none !important;

    @media (max-width: 768px) {
        max-width: 100%;
    }

    .ant-list-bordered {
        border: none !important;
    }

    .ant-list-header {
        color: #7adc40 !important;
        font-family: "Orbitron", sans-serif;
        font-weight: 600;
        font-size: 1rem;
        text-align: left;
        border: none !important;
    }

    .ant-list-item {
        border: none !important;
    }
`;


const ListItemLink = styled.a`
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
    font-family: 'DM Sans', sans-serif;

    &:hover {
        color: #7adc40;
        text-decoration: underline;
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <StyledList size="small" bordered header="COMPANY">
                <List.Item><ListItemLink href="#">About Us</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Careers</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Contact</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Privacy</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Terms</ListItemLink></List.Item>
            </StyledList>

            <StyledList size="small" bordered header="SOLUTIONS">
                <List.Item><ListItemLink href="#">Foo</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Lorem ipsum</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Voluptate velit</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Labore et dolore</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Dolor sit amet</ListItemLink></List.Item>
            </StyledList>

            <StyledList size="small" bordered header="OUR MAPS">
                <List.Item><ListItemLink href="#">Xyntrax Sector 9</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Beta-Zone Alpha</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Neon Grid-42</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Delta Echo Ridge</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Zeta Prime Junction</ListItemLink></List.Item>
            </StyledList>

            <StyledList size="small" bordered header="RESOURCES">
                <List.Item><ListItemLink href="#">Graviton Docs</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Quasarkit API</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Epsilon Handbook</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Hyperdrive Logs</ListItemLink></List.Item>
                <List.Item><ListItemLink href="#">Nebula Guide</ListItemLink></List.Item>
            </StyledList>
        </FooterContainer>
    );
}
