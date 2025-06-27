import styled from "styled-components";

export const BackendContainer = styled.section`
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const BackendContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #68d391, #38b2ac);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #a0aec0;
  margin-bottom: 3rem;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    min-width: 0;
  }
`;

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
  color: #68d391;
  display: flex;
  align-items: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
`;

export const ProjectDescription = styled.p`
  color: #a0aec0;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TechTag = styled.span`
  padding: 0.25rem 0.5rem;
  background: rgba(104, 211, 145, 0.2);
  color: #68d391;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(104, 211, 145, 0.3);
`;

export const FeaturesSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const FeaturesTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #68d391;
  font-size: 0.875rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const FeatureBullet = styled.div`
  width: 6px;
  height: 6px;
  background: #68d391;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const FeatureText = styled.span`
  font-size: 0.875rem;
  color: #a0aec0;
  line-height: 1.4;
`;

export const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #48bb78, #38b2ac);
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: transform 0.2s ease;
  width: fit-content;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
`;

export const ButtonText = styled.span`
  font-size: 0.875rem;
`;
