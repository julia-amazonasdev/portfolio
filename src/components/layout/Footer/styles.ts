import styled from "styled-components";

// Styled Components
export const FooterContainer = styled.footer`
  background-color: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 80px;
  position: relative;
`;

export const Wrapper = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 16px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Logo = styled.h3`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(90deg, #c084fc, #f472b6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1.2;
  margin: 0;
`;

export const Description = styled.p`
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.6;
  max-width: 320px;
  margin: 0;
`;

export const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
`;

export const QuickLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const QuickLink = styled.a`
  color: #d1d5db;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  transform: translateX(0);

  &:hover {
    color: #c084fc;
    transform: translateX(4px);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #d1d5db;
  transition: all 0.3s ease;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    &.github {
      color: #9ca3af;
    }

    &.linkedin {
      color: #60a5fa;
    }

    &.email {
      color: #c084fc;
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  border: none;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// COMPONENTES PROBLEMÁTICOS - VERSÃO CORRIGIDA
export const CopyrightText = styled.p`
  && {
    color: #d1d5db;
    font-size: 14px;
    margin: 0;
    line-height: 1.4;
    display: block;
  }
`;

export const MadeWithLove = styled.p`
  && {
    color: #9ca3af;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 0;
    line-height: 1.4;
  }

  @media (min-width: 768px) {
    && {
      justify-content: flex-start;
    }
  }
`;

export const BackToTop = styled.button`
  padding: 12px;
  border-radius: 50%;
  background-color: rgba(147, 51, 234, 0.2);
  border: 1px solid rgba(147, 51, 234, 0.2);
  color: #c084fc;
  transition: all 0.3s ease;
  transform: scale(1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(147, 51, 234, 0.3);
    color: #ddb3ff;
    transform: scale(1.1);
    box-shadow: 0 10px 25px rgba(147, 51, 234, 0.2);
  }

  &:focus {
    outline: 2px solid #c084fc;
    outline-offset: 2px;
  }
`;
