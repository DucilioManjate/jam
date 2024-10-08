const HeaderScreen = () => {
    return (
        <header className="w-full flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">Lio Croons</h1>
            <nav className="flex gap-4">
                <a href="#about" className="text-lg">Sobre Mim</a>
                <a href="#releases" className="text-lg">Lançamentos</a>
                <a href="#projects" className="text-lg">Projetos</a>
                <a href="#lyrics" className="text-lg">Letras</a>
            </nav>
        </header>
    );
};

export default HeaderScreen;
