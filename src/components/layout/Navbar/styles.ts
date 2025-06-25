import React, { useState } from "react";
import styled from "styled-components";
import { User, Code, Server, Phone, Home } from "lucide-react";
import { NavItem, NavbarProps, SectionId } from "../../../types";

// Styled Components
export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
`;

export const Wrapper = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(90deg, #c084fc, #f472b6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: scale(1);
  line-height: 1.2;
  margin: 0;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MenuDesktop = styled.div`
  display: none;
  gap: 32px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MenuItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transform: scale(1);
  border: 1px solid
    ${(props) => (props.$isActive ? "rgba(147, 51, 234, 0.2)" : "transparent")};
  background-color: ${(props) =>
    props.$isActive ? "rgba(147, 51, 234, 0.2)" : "transparent"};
  color: ${(props) => (props.$isActive ? "#ddb3ff" : "#d1d5db")};
  box-shadow: ${(props) =>
    props.$isActive ? "0 10px 25px rgba(147, 51, 234, 0.1)" : "none"};

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "rgba(147, 51, 234, 0.2)" : "rgba(255, 255, 255, 0.1)"};
    color: ${(props) => (props.$isActive ? "#ddb3ff" : "#ffffff")};
    transform: ${(props) => (props.$isActive ? "scale(1)" : "scale(1.05)")};
  }
`;

export const MenuMobile = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileToggle = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  gap: 4px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const HamburgerLine = styled.span<{
  $isOpen: boolean;
  $lineIndex: number;
}>`
  width: 24px;
  height: 2px;
  background-color: #ffffff;
  transition: all 0.3s ease;
  border-radius: 1px;
  transform: ${(props) => {
    if (!props.$isOpen) return "none";
    if (props.$lineIndex === 0) return "rotate(45deg) translate(5px, 5px)";
    if (props.$lineIndex === 1) return "scale(0)";
    if (props.$lineIndex === 2) return "rotate(-45deg) translate(7px, -6px)";
  }};
  opacity: ${(props) => (props.$isOpen && props.$lineIndex === 1 ? 0 : 1)};
`;

export const MobileMenuExpanded = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
`;

export const MobileMenuItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid
    ${(props) => (props.$isActive ? "rgba(147, 51, 234, 0.2)" : "transparent")};
  background-color: ${(props) =>
    props.$isActive ? "rgba(147, 51, 234, 0.2)" : "transparent"};
  color: ${(props) => (props.$isActive ? "#ddb3ff" : "#d1d5db")};

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "rgba(147, 51, 234, 0.2)" : "rgba(255, 255, 255, 0.1)"};
    color: ${(props) => (props.$isActive ? "#ddb3ff" : "#ffffff")};
  }
`;
