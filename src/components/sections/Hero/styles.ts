import styled from "styled-components";

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #764ba2 0%, #1f2937 100%);
  padding: 2rem;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
  color: white;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #1f2937, #a855f7);
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-size: 1rem;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;
