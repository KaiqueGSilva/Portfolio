export default function ProjectCard({ title, description, link }) {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" className="text-blue-500 underline mt-2 block">Ver Projeto</a>
        </div>
    );
}
