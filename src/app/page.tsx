import AboutScreen from '@/components/About';
import FooterScreen from '@/components/Footer';
import HeaderScreen from '@/components/Header';
import LyricsScreen from '@/components/Lyrics';
import ProjectsScreen from '@/components/Projects';
import Head from 'next/head';
import YouTubePlayer from '@/components/YouTubePlayer'; // Novo componente de YouTube
import ReleasesScreen from '@/components/Releases/indext';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Meu Portfólio Musical</title>
        <meta name="description" content="Portfólio de música com lançamentos, história e projetos." />
      </Head>

      <HeaderScreen />

      <main className="w-full px-6 lg:px-24 mt-10">
        <AboutScreen />
        
        {/* Secção de Lançamentos */}
        <ReleasesScreen />
        
        {/* Secção de Projetos */}
        <ProjectsScreen />
        
        {/* Secção de Letras */}
        <LyricsScreen />

        {/* Player de Vídeo do YouTube */}
        <YouTubePlayer videoId="zjdHZDvCseQ" title="Entrevista Lio Croons" /> {/* Video de Lançamento */}
        <YouTubePlayer videoId="tAzfm_Ng7ko" title="Última Entrevista" /> {/* Última Entrevista */}
      </main>

      <FooterScreen />
    </div>
  );
}
