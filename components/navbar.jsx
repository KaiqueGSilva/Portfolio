import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link href="/">Pagina Inicial</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/skills">Habilidades</Link>
      <Link href="/contact">Contato</Link>
    </nav>
  );
}
