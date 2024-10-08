const LyricsScreen = () => {
    return (
        <section id="lyrics" className="w-full flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-bold mb-4">Letras das Músicas</h2>
            <div className="w-full bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Título da Música</h3>
                <p>
                    Verso 1: Lorem ipsum dolor sit amet... <br />
                    Refrão: Sed ut perspiciatis unde omnis iste...
                </p>
            </div>
        </section>
    );
};

export default LyricsScreen;
