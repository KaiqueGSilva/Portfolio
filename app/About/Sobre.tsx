import Link from 'next/link';

export default function About() {
  return (
    <div className='min-h-screen p-4 bg-white text-gray-900'>
      <h1 className='text-4xl font-bold text-center mb-6'>Sobre Mim</h1>
      <p className='text-lg text-center max-w-2xl mx-auto'>Sou Kaique, estudante de Tecnologia da Informação e desenvolvedor...</p>
      <div className='mt-8 text-center'>
        <Link href='/' className='text-blue-500 hover:underline'>Voltar para Home</Link>
      </div>
    </div>
  );
}