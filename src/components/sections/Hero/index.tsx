import React from "react";
import {
  HeroContainer,
  HeroContent,
  Title,
  Subtitle,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
} from "./styles";

interface HeroProps {
  onViewProjects?: () => void;
  onContact?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewProjects, onContact }) => {
  return (
    <HeroContainer>
      <HeroContent>
        <Title>
          Frontend Jr. <br />
          Backend Jr. <br /> Full Stack Java Developer <br />
        </Title>

        <Subtitle>
          Conectando empatia e lógica para desenvolver aplicações que fazem a
          diferença.
        </Subtitle>

        <ButtonContainer>
          <PrimaryButton onClick={onViewProjects}>Ver Projetos</PrimaryButton>

          <SecondaryButton onClick={onContact}>
            Entre em Contato
          </SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
