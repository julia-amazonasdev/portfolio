import React, { useState } from "react";
import { User, Code, Server, Phone, Home } from "lucide-react";
import { NavItem, NavbarProps, SectionId } from "../../../types";
import {
  Content,
  HamburgerLine,
  Logo,
  MenuDesktop,
  MenuItem,
  MenuMobile,
  MobileMenuExpanded,
  MobileMenuItem,
  MobileToggle,
  NavContainer,
  Wrapper,
} from "./styles";

// Componente Navbar
const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: "home", label: "Início", icon: Home },
    { id: "about", label: "Sobre", icon: User },
    { id: "frontend", label: "Frontend", icon: Code },
    { id: "backend", label: "Backend", icon: Server },
    { id: "contact", label: "Contato", icon: Phone },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (sectionId: SectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Fecha o menu mobile após clicar
  };

  return (
    <NavContainer>
      <Wrapper>
        <Content>
          {/* Logo/Nome */}
          <Logo>Julia Amazonas</Logo>

          {/* Menu Desktop */}
          <MenuDesktop>
            {navItems.map(({ id, label, icon: Icon }) => (
              <MenuItem
                key={id}
                $isActive={activeSection === id}
                onClick={() => scrollToSection(id as SectionId)}
              >
                <Icon size={16} />
                <span>{label}</span>
              </MenuItem>
            ))}
          </MenuDesktop>

          {/* Menu Mobile - Hamburger */}
          <MenuMobile>
            <MobileToggle
              $isOpen={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
            >
              <HamburgerLine $isOpen={isMobileMenuOpen} $lineIndex={0} />
              <HamburgerLine $isOpen={isMobileMenuOpen} $lineIndex={1} />
              <HamburgerLine $isOpen={isMobileMenuOpen} $lineIndex={2} />
            </MobileToggle>
          </MenuMobile>
        </Content>

        {/* Menu Mobile Expandido */}
        <MobileMenuExpanded $isOpen={isMobileMenuOpen}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <MobileMenuItem
              key={id}
              $isActive={activeSection === id}
              onClick={() => handleMenuItemClick(id as SectionId)}
            >
              <Icon size={16} />
              <span>{label}</span>
            </MobileMenuItem>
          ))}
        </MobileMenuExpanded>
      </Wrapper>
    </NavContainer>
  );
};

export default Navbar;
