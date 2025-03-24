import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-cyan-400 mb-10">
          Projetos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Pokedex"
            description="Um site estático dedicado ao Pokémon"
            link="https://github.com/KaiqueGSilva/pokedex"
            image="https://github.com/KaiqueGSilva/pokedex/blob/master/src/images/pokedex.jpg?raw=true"
          />
          <ProjectCard
            title="Biografia Neymar JR"
            description="Um site estático dedicado ao Neymar JR"
            link="https://github.com/KaiqueGSilva/NeymarJR"
            image="https://github.com/KaiqueGSilva/NeymarJR/blob/master/images/ney.png?raw=true"
          />
        </div>
      </div>
    </div>
  );
}
