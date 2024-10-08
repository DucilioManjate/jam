import AboutScreen from "@/components/About";
import FooterScreen from "@/components/Footer";
import HeaderScreen from "@/components/Header";
import LyricsScreen from "@/components/Lyrics";
import ProjectsScreen from "@/components/Projects";
import ReleasesScreen from "@/components/Releases/indext";
import Head from "next/head";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Head>
        <title>Meu Portfólio Musical</title>
        <meta name="description" content="Portfólio de música com lançamentos, história e projetos." />
      </Head>

      <HeaderScreen />

      <main className="flex flex-col gap-16 items-center sm:items-start w-full">
        <AboutScreen />
        <ReleasesScreen />
        <ProjectsScreen />
        <LyricsScreen />
      </main>

      <FooterScreen />
    </div>
  );
}
