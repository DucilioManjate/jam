const FooterScreen = () => {
    return (
        <footer className="w-full flex flex-col items-center gap-4">
            <p>&copy; 2024 Lio Croons. Todos os direitos reservados.</p>
            <div className="flex gap-4">
                <a href="https://spotify-link" className="text-blue-500">Spotify</a>
                <a href="https://apple-music-link" className="text-blue-500">Apple Music</a>
                <a href="https://youtube-link" className="text-blue-500">YouTube</a>
            </div>
        </footer>
    );
};

export default FooterScreen;
