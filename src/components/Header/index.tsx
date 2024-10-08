const HeaderScreen = () => {
  return (
    <header className="w-full py-8 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-20">
        <h1 className="text-4xl font-bold">Lio Croons</h1>
        <nav className="flex gap-8">
          <a href="#about" className="text-lg font-semibold hover:text-gray-600 transition-colors">Sobre Mim</a>
          <a href="#releases" className="text-lg font-semibold hover:text-gray-600 transition-colors">Lançamentos</a>
          <a href="#projects" className="text-lg font-semibold hover:text-gray-600 transition-colors">Projetos</a>
          <a href="#lyrics" className="text-lg font-semibold hover:text-gray-600 transition-colors">Letras</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderScreen;
