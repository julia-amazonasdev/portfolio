import React from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  FrontendContainer,
  FrontendContent,
  Title,
  Subtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechnologiesContainer,
  TechTag,
  ButtonsContainer,
  LiveButton,
  CodeButton,
  ButtonIcon,
  ButtonText,
} from "./styles";

import ecomerce from "../../../assets/images/efood.png";
import landingpage from "../../../assets/images/landingpage.png";
import tatto from "../../../assets/images/tatto.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const FrontendProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Efood - E-commerce React",
      description:
        "Loja virtual completa com carrinho, pagamento e autenticação",
      image: ecomerce,
      technologies: [
        "React",
        "Redux",
        "TypeScript",
        "CSS",
        "Context API",
        "Layout responsivo",
      ],
      liveUrl: "https://projeto-final-1-imq9.vercel.app/",
      githubUrl: "https://github.com/julia-amazonasdev/efood_loja",
    },
    {
      id: 2,
      title: "Projeto Desfem - Landing Page",
      description: "Landing Page divido em seções com lojinha virtual",
      image: landingpage,
      technologies: ["HTML", "SCSS", "Layout responsivo"],
      liveUrl: "https://projeto-landingpage-nine.vercel.app/",
      githubUrl: "https://github.com/julia-amazonasdev/projeto_desfem",
    },
    {
      id: 3,
      title: "Landing Page para tatuadora",
      description: "Landing Page sobre tatuadora, divido em seçõees",
      image: tatto,
      technologies: ["HTML", "SCSS", "BootStrap", "Layout responsivo"],
      liveUrl: "https://vitoriavasconcelos.vercel.app/",
      githubUrl: "https://github.com/julia-amazonasdev/tatto_vitoria",
    },
  ];

  return (
    <FrontendContainer id="frontend">
      <FrontendContent>
        <Title>Projetos Frontend</Title>
        <Subtitle>Interfaces modernas e responsivas</Subtitle>

        <ProjectsGrid>
          {projects.map((project: Project) => (
            <ProjectCard key={project.id}>
              <ProjectImage
                src={project.image}
                alt={project.title}
                $imageId={project.id}
              />

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechnologiesContainer>
                  {project.technologies.map((tech: string) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechnologiesContainer>

                <ButtonsContainer>
                  <LiveButton
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonIcon>
                      <ExternalLink size={16} />
                    </ButtonIcon>
                    <ButtonText>Ver Projeto</ButtonText>
                  </LiveButton>

                  <CodeButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonIcon>
                      <Github size={16} />
                    </ButtonIcon>
                    <ButtonText>Código</ButtonText>
                  </CodeButton>
                </ButtonsContainer>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </FrontendContent>
    </FrontendContainer>
  );
};

export default FrontendProjects;
