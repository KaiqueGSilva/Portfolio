export default function ProjectCard({ title, description, link, image }) {
    return (
      <div className="bg-gray-800 rounded-lg p-2 shadow-md max-w-[150px] mx-auto">
        <img
          src={image}
          alt={title}
          className="w-8 h-8 mb-2 mx-auto"
        />
        <h2 className="text-sm font-bold text-cyan-400 mb-1 text-center">{title}</h2>
        <p className="text-xs text-gray-300 text-center mb-2">{description}</p>
        <a
          href={link}
          className="text-cyan-400 hover:underline text-center block text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Projeto
        </a>
      </div>
    );
  }  