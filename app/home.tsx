// app/home.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-white'>
      <nav className='flex justify-center space-x-8 py-4 bg-black/50 sticky top-0'>
        <Link href='/about' className='hover:underline'>About</Link>
        <Link href='/projects' className='hover:underline'>Projects</Link>
        <Link href='/skills' className='hover:underline'>Skills</Link>
        <Link href='/contact' className='hover:underline'>Contact</Link>
      </nav>

      <div className='container mx-auto mt-10 px-4'>
        <h1 className='text-5xl font-bold text-center'>Kaique's Portfolio</h1>
        <p className='mt-4 text-center text-lg max-w-lg mx-auto'>Bem-vindo! Este é o meu portfólio profissional. Explore para conhecer meus projetos, habilidades e como entrar em contato comigo.</p>
      </div>
    </div>
  );
}
