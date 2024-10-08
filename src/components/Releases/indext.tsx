const ReleasesScreen = () => {
    return (
        <section id="releases" className="w-full flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-bold mb-4">Lançamentos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Exemplo de lançamento */}
                <div className="flex flex-col items-center sm:items-start">
                    <img src="/path-to-album-cover.jpg" alt="Capa do Álbum" className="w-64 h-64 mb-4" />
                    <h3 className="text-xl">Nome do Álbum</h3>
                    <p>Data de Lançamento: 2024</p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://spotify-link" className="text-blue-500">Spotify</a>
                        <a href="https://apple-music-link" className="text-blue-500">Apple Music</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReleasesScreen;
