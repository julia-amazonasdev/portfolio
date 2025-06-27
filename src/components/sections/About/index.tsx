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
              Sou graduada em Enfermagem com Pós-Graduação em Saúde da Mulher e
              atualmente em transição de carreira para a área de tecnologia.
              Recém-formada em um curso de Full Stack Java, tenho me dedicado
              intensamente ao desenvolvimento de aplicações web, do front ao
              backend.
            </Description>

            <Description>
              Minha formação anterior me proporcionou habilidades valiosas em
              empatia, escuta ativa e comunicação, as quais aplico no
              desenvolvimento de soluções centradas no usuário. Também possuo
              experiência profissional com atendimento ao cliente, o que
              fortalece minha visão de produto e experiência do usuário. Estou
              pronta para novos desafios e oportunidades como desenvolvedora
              júnior, com vontade de aprender, crescer e colaborar em projetos
              reais.
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
