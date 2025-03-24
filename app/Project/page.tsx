import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard title="Projeto 1" description="Descrição do projeto 1" link="https://github.com/seuuser/projeto1" />
        <ProjectCard title="Projeto 2" description="Descrição do projeto 2" link="https://github.com/seuuser/projeto2" />
      </div>
    </div>
  );
}