import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-white'>
      <div className='container mx-auto mt-10 px-4'>
        <h1 className='text-5xl font-bold text-center'>Kaique's Portfolio</h1>
        <p className='mt-4 text-center text-lg max-w-lg mx-auto'>Bem-vindo ao meu portfólio profissional! Explore meus projetos, conheça minhas habilidades e descubra como podemos entrar em contato.</p>
      </div>
    </div>
  );
}
