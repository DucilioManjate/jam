const ReleasesScreen = () => {
  return (
    <section id="releases" className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Lançamentos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="/path-to-album-cover1.jpg" // Substitua pela URL da capa do álbum
            alt="Capa do Álbum 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">Nome do Álbum 1</h3>
            <p className="text-gray-600">Data de Lançamento: 2024</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="/path-to-album-cover2.jpg"
            alt="Capa do Álbum 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">Nome do Álbum 2</h3>
            <p className="text-gray-600">Data de Lançamento: 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReleasesScreen;
