import React from "react";
import {
  AboutContainer,
  AboutContent,
  Title,
  ContentGrid,
  TextSection,
  Description,
  SkillsSection,
  SkillCategory,
  CategoryTitle,
  SkillsContainer,
  SkillTag,
} from "./styles";

interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

const About: React.FC = () => {
  const skills: Skills = {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Styled Components",
    ],
    backend: ["Java", "Spring Boot", "Node.js"],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: [
      "Git",
      "Docker",
      "Maven",
      "IntelliJ IDEA",
      "VS Code",
      "Postman",
      "Figma",
      "Adobe Photoshop",
    ],
  };

  const getCategoryName = (category: string): string => {
    const categoryNames: { [key: string]: string } = {
      frontend: "Frontend",
      backend: "Backend",
      database: "Banco de Dados",
      tools: "Ferramentas",
    };
    return categoryNames[category] || category;
  };

  return (
    <AboutContainer id="about">
      <AboutContent>
        <Title>Sobre Mim</Title>

        <ContentGrid>
          <TextSection>
            <Description>
              Sou um desenvolvedor Full Stack especializado em Java, apaixonado
              por criar aplicações web robustas e escaláveis. Recém-formado em
              desenvolvimento Full Stack, busco sempre aprender novas
              tecnologias e aplicar as melhores práticas.
            </Description>

            <Description>
              Minha experiência abrange desde a criação de interfaces modernas e
              responsivas até o desenvolvimento de APIs REST seguras e
              eficientes.
            </Description>
          </TextSection>

          <SkillsSection>
            {Object.entries(skills).map(([category, techs]) => (
              <SkillCategory key={category}>
                <CategoryTitle>{getCategoryName(category)}</CategoryTitle>

                <SkillsContainer>
                  {techs.map((tech: string) => (
                    <SkillTag key={tech}>{tech}</SkillTag>
                  ))}
                </SkillsContainer>
              </SkillCategory>
            ))}
          </SkillsSection>
        </ContentGrid>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
