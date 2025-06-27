import React from "react";
import { Server, Github } from "lucide-react";
import {
  BackendContainer,
  BackendContent,
  Title,
  Subtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectHeader,
  IconContainer,
  ProjectTitle,
  ProjectDescription,
  TechnologiesContainer,
  TechTag,
  FeaturesSection,
  FeaturesTitle,
  FeaturesList,
  FeatureItem,
  FeatureBullet,
  FeatureText,
  GitHubButton,
  ButtonIcon,
  ButtonText,
} from "./styles";

interface BackendProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
}

const BackendProjects: React.FC = () => {
  const backendProjects: BackendProject[] = [
    {
      id: 1,
      title: "Sistema Web de Cadastro - JSF",
      description:
        "Aplicação web completa para cadastro de usuários com arquitetura em camadas e interface JSF",
      technologies: [
        "Java",
        "JSF",
        "JPA/Hibernate",
        "PostgreSQL",
        "Maven",
        "PrimeFaces",
      ],
      features: [
        "Interface web responsiva com JSF e PrimeFaces",
        "Arquitetura em camadas (Controller, Service, Repository)",
        "Mapeamento objeto-relacional com JPA/Hibernate",
        "Validação de regras de negócio no Service Layer",
        "Persistência em banco PostgreSQL relacional",
        "Injeção de dependência com CDI",
        "Tratamento de exceções personalizado",
        "Validação de dados com Bean Validation",
      ],
      githubUrl: "https://github.com/julia-amazonasdev/sistema-cadastro-jsf",
    },
  ];

  return (
    <BackendContainer id="backend">
      <BackendContent>
        <Title>Projetos Backend</Title>
        <Subtitle>APIs robustas e escaláveis</Subtitle>

        <ProjectsGrid>
          {backendProjects.map((project: BackendProject) => (
            <ProjectCard key={project.id}>
              <ProjectHeader>
                <IconContainer>
                  <Server size={24} />
                </IconContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectHeader>

              <ProjectDescription>{project.description}</ProjectDescription>

              <TechnologiesContainer>
                {project.technologies.map((tech: string) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechnologiesContainer>

              <FeaturesSection>
                <FeaturesTitle>Principais Features:</FeaturesTitle>
                <FeaturesList>
                  {project.features.map((feature: string, index: number) => (
                    <FeatureItem key={index}>
                      <FeatureBullet />
                      <FeatureText>{feature}</FeatureText>
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </FeaturesSection>

              <GitHubButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonIcon>
                  <Github size={16} />
                </ButtonIcon>
                <ButtonText>Ver no GitHub</ButtonText>
              </GitHubButton>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </BackendContent>
    </BackendContainer>
  );
};

export default BackendProjects;
