import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 5rem 1rem;
  background-color: #111827;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #a855f7, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Imagem = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5%;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

export const TextSection = styled.div`
  color: #d1d5db;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #d1d5db;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #c084fc;
  text-transform: capitalize;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(168, 85, 247, 0.2);
  color: #c084fc;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(168, 85, 247, 0.3);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(168, 85, 247, 0.3);
    transform: translateY(-1px);
  }
`;
