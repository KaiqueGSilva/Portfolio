import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-center space-x-8 py-4 bg-black/50 sticky top-0'>
        <Link href='/' className='hover:underline'>Home</Link>
        <Link href='/about' className='hover:underline'>About</Link>
        <Link href='/projects' className='hover:underline'>Projects</Link>
        <Link href='/skills' className='hover:underline'>Skills</Link>
        <Link href='/contact' className='hover:underline'>Contact</Link>
      </nav>
  );
}
