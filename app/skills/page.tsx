export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 flex items-center justify-center">
      <div className="card bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-cyan-400 mb-10">
          Minhas Habilidades
        </h1>
        <ul className="space-y-6 text-lg text-gray-300">
          <li><strong>HTML & CSS:</strong> Estruturação de páginas e estilização responsiva.</li>
          <li><strong>JavaScript & React:</strong> Desenvolvimento de interfaces dinâmicas.</li>
          <li><strong>Node.js & Express:</strong> Criação de APIs e back-end.</li>
          <li><strong>SQL Server:</strong> Banco de dados SQL.</li>
          <li><strong>Next.js:</strong> Criação de aplicações otimizadas com SSR.</li>
        </ul>
      </div>
    </div>
  );
}
