import Link from 'next/link';

export default function Skills() {
  return (
    <div className='min-h-screen p-4 bg-white text-gray-900'>
      <h1 className='text-4xl font-bold text-center mb-6'>Minhas Habilidades</h1>
      <ul className='max-w-xl mx-auto space-y-4 text-lg'>
        <li><strong>HTML & CSS:</strong> Estruturação de páginas e estilização responsiva.</li>
        <li><strong>JavaScript & React:</strong> Desenvolvimento de interfaces dinâmicas.</li>
        <li><strong>Node.js & Express:</strong> Criação de APIs e back-end.</li>
        <li><strong>MongoDB:</strong> Banco de dados NoSQL.</li>
        <li><strong>Next.js:</strong> Criação de aplicações otimizadas com SSR.</li>
      </ul>
      <div className='mt-8 text-center'>
        <Link href='/' className='text-blue-500 hover:underline'>Voltar para Home</Link>
      </div>
    </div>
  );
}
