import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import {
  BackToTop,
  BottomSection,
  Content,
  Copyright,
  CopyrightText,
  Description,
  Divider,
  FooterContainer,
  Logo,
  MadeWithLove,
  QuickLink,
  QuickLinks,
  Section,
  SectionTitle,
  SocialLink,
  SocialLinks,
  Wrapper,
} from "./styles";

// Componente Footer com debug
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/juliaamazonas",
      className: "github",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/julia-amazonas",
      className: "linkedin",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:seu@email.com",
      className: "email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <Wrapper>
        {/* Conteúdo Principal */}
        <Content>
          {/* Seção Esquerda - Logo/Nome */}
          <Section>
            <Logo>Julia Amazonas</Logo>
            <Description>Back-End Jr. | Front-End Jr.</Description>
          </Section>

          {/* Seção Central - Links Rápidos */}
          <Section>
            <SectionTitle>Links Rápidos</SectionTitle>
            <QuickLinks>
              <QuickLink href="#home">Início</QuickLink>
              <QuickLink href="#about">Sobre</QuickLink>
              <QuickLink href="#frontend">Frontend</QuickLink>
              <QuickLink href="#backend">Backend</QuickLink>
              <QuickLink href="#contact">Contato</QuickLink>
            </QuickLinks>
          </Section>

          {/* Seção Direita - Redes Sociais */}
          <Section>
            <SectionTitle>Conecte-se</SectionTitle>
            <SocialLinks>
              {socialLinks.map(({ name, icon: Icon, url, className }) => (
                <SocialLink
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  aria-label={name}
                >
                  <Icon size={20} />
                </SocialLink>
              ))}
            </SocialLinks>
          </Section>
        </Content>

        {/* Divisor */}
        <Divider />

        {/* Rodapé Inferior */}
        <BottomSection>
          <Copyright>
            <CopyrightText>
              © {currentYear} Julia Amazonas. Todos os direitos reservados.
            </CopyrightText>
            <MadeWithLove>Feito usando React & TypeScript</MadeWithLove>
          </Copyright>
          <BackToTop onClick={scrollToTop} aria-label="Voltar ao topo">
            <ArrowUp size={20} />
          </BackToTop>
        </BottomSection>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
