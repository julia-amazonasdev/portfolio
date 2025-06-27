import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import * as S from "./styles";

const Contact: React.FC = () => {
  return (
    <S.ContactSection id="contact">
      <S.Container>
        <S.Title>
          <S.GradientText>Vamos Trabalhar Juntos?</S.GradientText>
        </S.Title>

        <S.Subtitle>
          Estou disponível para novas oportunidades e desafios
        </S.Subtitle>

        <S.ContactLinks>
          <S.EmailLink href="mailto:seu.email@exemplo.com">
            <Mail size={20} />
            <span>julia.amazonasdev@gmail.com</span>
          </S.EmailLink>

          <S.SocialLink
            href="https://linkedin.com/in/julia-amazonas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </S.SocialLink>

          <S.SocialLink
            href="https://github.com/julia-amazonasdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
            <span>GitHub</span>
          </S.SocialLink>
        </S.ContactLinks>
      </S.Container>
    </S.ContactSection>
  );
};

export default Contact;
