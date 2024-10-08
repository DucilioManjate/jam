const ProjectsScreen = () => {
  return (
    <section id="projects" className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="/path-to-project-image1.jpg" // Substitua pela URL da imagem do projeto
            alt="Projeto 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">Projeto 1</h3>
            <p className="text-gray-600">Descrição breve do projeto...</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="/path-to-project-image2.jpg"
            alt="Projeto 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">Projeto 2</h3>
            <p className="text-gray-600">Descrição breve do projeto...</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="/path-to-project-image3.jpg"
            alt="Projeto 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">Projeto 3</h3>
            <p className="text-gray-600">Descrição breve do projeto...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsScreen;
