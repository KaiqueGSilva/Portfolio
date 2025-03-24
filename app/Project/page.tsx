import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}


export default function Projects() {
  return (
    <div className='min-h-screen p-4 bg-gray-100 text-gray-900'>
      <h1 className='text-4xl font-bold text-center mb-6'>Meus Projetos</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <ProjectCard
          title='Projeto de API de Lanchonete'
          description='API completa para gerenciar pedidos e produtos de uma lanchonete...'
          imageUrl='/lanchonete-project.png'
          link='#'
        />
        <ProjectCard
          title='Portfolio de Academia'
          description='Plataforma que exibe academias e seus serviços...'
          imageUrl='/academia-project.png'
          link='#'
        />
        <ProjectCard
          title='Sistema de Biblioteca de Jogos'
          description='Projeto com CRUD completo em MongoDB...'
          imageUrl='/biblioteca-project.png'
          link='#'
        />
      </div>
      <div className='mt-8 text-center'>
        <Link href='/' className='text-blue-500 hover:underline'>Voltar para Home</Link>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      {/* Continue com o restante do seu código */}
    </div>
  );
}