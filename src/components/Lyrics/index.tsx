const LyricsScreen = () => {
  return (
    <section id="lyrics" className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Letras das Músicas</h2>
      <div className="flex justify-center space-x-6">
        {/* Música 1 */}
        <div className="flex flex-col items-center">
          <i className="fas fa-music text-3xl text-blue-600 mb-2"></i> {/* Ícone de música */}
          <h3 className="text-lg font-semibold">Música 1</h3>
        </div>

        {/* Música 2 */}
        <div className="flex flex-col items-center">
          <i className="fas fa-music text-3xl text-blue-600 mb-2"></i>
          <h3 className="text-lg font-semibold">Música 2</h3>
        </div>

        {/* Música 3 */}
        <div className="flex flex-col items-center">
          <i className="fas fa-music text-3xl text-blue-600 mb-2"></i>
          <h3 className="text-lg font-semibold">Música 3</h3>
        </div>
      </div>
    </section>
  );
};

export default LyricsScreen;
