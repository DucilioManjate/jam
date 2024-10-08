"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faSpotify,
  faYoutube,
  faDeezer,
  faSoundcloud,
  faAmazon,
  faInstagram,
  faTwitter,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  FooterContainer,
  FooterSection,
  ArtistBio,
  SocialIcons,
  MusicPlatforms,
  ContactForm,
  Input,
  Button,
  FooterLinks,
  CopyRight,
} from "./styles";

const FooterScreen = () => {
  return (
    <FooterContainer>
      {/* Sobre o Artista */}
      <FooterSection>
        <ArtistBio>
          <h3>Lio Croons</h3>
          <p>
            Cantor, compositor e produtor musical. Mistura gêneros e inspirações
            para criar um som único e moderno. Siga para não perder os próximos
            lançamentos!
          </p>
        </ArtistBio>
      </FooterSection>

      {/* Redes Sociais */}
      <FooterSection>
        <h4>Redes Sociais</h4>
        <SocialIcons>
          <a href="https://instagram-link">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://twitter-link">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://linkedin-link">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://tiktok-link">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </SocialIcons>
      </FooterSection>

      {/* Plataformas de Música */}
      <FooterSection>
        <h4>Ouça minha música</h4>
        <MusicPlatforms>
          <a href="https://spotify-link">
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
          <a href="https://apple-music-link">
            <FontAwesomeIcon icon={faApple} size="2x" />
          </a>
          <a href="https://youtube-link">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://deezer-link">
            <FontAwesomeIcon icon={faDeezer} size="2x" />
          </a>
          <a href="https://soundcloud-link">
            <FontAwesomeIcon icon={faSoundcloud} size="2x" />
          </a>
          <a href="https://amazon-music-link">
            <FontAwesomeIcon icon={faAmazon} size="2x" />
          </a>
        </MusicPlatforms>
      </FooterSection>

      {/* Contato e Newsletter */}
      <FooterSection>
        <h4>Entre em contato</h4>
        <ContactForm>
          <Input type="email" placeholder="Seu e-mail" />
          <Button>Inscrever-se</Button>
        </ContactForm>
      </FooterSection>

      {/* Links Importantes */}
      <FooterSection>
        <FooterLinks>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </FooterLinks>
      </FooterSection>

      {/* Copyright */}
      <CopyRight>
        <FontAwesomeIcon icon={faCopyright} />
        2024 Lio Croons. Todos os direitos reservados.
      </CopyRight>
    </FooterContainer>
  );
};

export default FooterScreen;
