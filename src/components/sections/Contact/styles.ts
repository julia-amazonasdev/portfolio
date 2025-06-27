import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 5rem 1rem;
  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, #1f2937, #1f2937)
  background-clip: text;
  `;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgb(255, 255, 255);
  margin-bottom: 2rem;
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const EmailLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #8b5cf6, #1f2937);
  border-radius: 0.5rem;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
