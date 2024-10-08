const ProjectsScreen = () => {
    return (
        <section id="projects" className="w-full flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-bold mb-4">Projetos Recentes</h2>
            <ul className="list-disc pl-5">
                <li className="mb-2">Aparição no programa de TV XYZ, 2023</li>
                <li className="mb-2">Entrevista na rádio ABC sobre meu último álbum</li>
                <li className="mb-2">Parceria musical com o artista Z para um novo single</li>
            </ul>
        </section>
    );
};

export default ProjectsScreen;
