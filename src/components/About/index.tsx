"use client";

import { motion } from "framer-motion";
import { ImageContainer, TextContainer, PlayerContainer } from "./styles";
import profileImage from '../../app/img/Profile.jpg'; // Imagem do perfil
import '@fontsource/dancing-script'; // Fonte manuscrita
import '@fontsource/playfair-display'; // Fonte elegante

const AboutScreen = () => {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-12 flex flex-col lg:flex-row">
      {/* Container da imagem */}
      <ImageContainer>
        <motion.img
          src={profileImage.src}
          alt="Foto de Lio Croons"
          className="rounded-full w-48 h-48 object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </ImageContainer>

      {/* Container do texto */}
      <TextContainer>
        <motion.h2
          className="text-4xl font-bold mb-4"
          style={{
            fontFamily: 'Dancing Script, cursive',
            background: 'linear-gradient(90deg, #0fb3d6, #e8ea94)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mim
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: '#333',
            background: 'linear-gradient(90deg, #e8ea94, #0fb3d6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Eu sou músico e produtor, apaixonado por criar sons que inspiram e emocionam.
          Trabalhei em diversos projetos e colaboro com artistas nacionais e internacionais.
        </motion.p>
      </TextContainer>

      {/* Container dos players do Spotify e Apple Music */}
      <PlayerContainer className="flex flex-col items-center lg:flex-row lg:justify-between mt-8">
        {/* Player do Spotify */}
        <div className="spotify-card mb-4 lg:mb-0">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3CYndpls75p3Gz2oppMnEQ?utm_source=generator&theme=0"
            width="300"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* Player do Apple Music */}
        <div className="apple-music-card">
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="175"
            style={{ width: '100%', maxWidth: '300px', overflow: 'hidden', borderRadius: '12px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/brilho/1769527911?i=1769527913"
          ></iframe>
        </div>
      </PlayerContainer>
    </section>
  );
};

export default AboutScreen;
