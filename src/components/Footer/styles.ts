import styled from "styled-components";

// Footer principal
export const FooterContainer = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

// Seções do footer
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// Biografia do artista
export const ArtistBio = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 300px;
  }
`;

// Ícones das redes sociais
export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #1db954; /* Cor verde do Spotify */
  }
`;

// Plataformas de música
export const MusicPlatforms = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    transition: transform 0.3s ease-in-out;
  }

  a:hover {
    transform: scale(1.2);
  }
`;

// Formulário de contato (newsletter)
export const ContactForm = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  flex: 1;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1aa34a;
  }
`;

// Links de políticas
export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1db954;
    }
  }
`;

// Direitos autorais
export const CopyRight = styled.p`
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 10px;
  grid-column: span 2;
  justify-self: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-column: 1;
  }
`;
