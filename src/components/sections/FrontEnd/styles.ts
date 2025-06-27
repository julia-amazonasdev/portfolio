import styled from "styled-components";

interface ProjectImageProps {
  $imageId?: number;
}

export const FrontendContainer = styled.section`
  padding: 5rem 1rem;
  background: #839cb5;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const FrontendContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  background-clip: text;
  color: #f2e4f9;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #f2e4f9;
  margin-bottom: 3rem;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ProjectImage = styled.img<ProjectImageProps>`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;

  object-position: ${(props) => {
    switch (props.$imageId) {
      case 2:
        return "center top";
      case 3:
        return "top";
      default:
        return "center center";
    }
  }};
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`;

export const ProjectDescription = styled.p`
  color: #f2e4f9;
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
  background: rgba(96, 165, 250, 0.2);
  color: #f2e4f9;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const LiveButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CodeButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
`;

export const ButtonText = styled.span`
  font-size: 0.875rem;
`;
