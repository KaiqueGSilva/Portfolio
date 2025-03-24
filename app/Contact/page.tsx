import Link from 'next/link';

export default function Contact() {
  return (
    <div className='min-h-screen p-4 bg-gray-100 text-gray-900'>
      <h1 className='text-4xl font-bold text-center mb-6'>Contato</h1>
      <form action='https://formspree.io/f/{YOUR_FORM_ID}' method='POST' className='max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6'>
        <label className='block mb-4'>
          Nome:
          <input type='text' name='name' className='w-full p-2 mt-1 border rounded-md' required />
        </label>
        <label className='block mb-4'>
          Email:
          <input type='email' name='email' className='w-full p-2 mt-1 border rounded-md' required />
        </label>
        <label className='block mb-4'>
          Mensagem:
          <textarea name='message' className='w-full p-2 mt-1 border rounded-md' rows={4} required></textarea>
        </label>
        <button className='w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Enviar</button>
      </form>
      <div className='flex justify-center mt-6 space-x-4'>
        <a href='#'><img src='/icons/facebook.svg' alt='Facebook' className='w-6 h-6' /></a>
        <a href='#'><img src='/icons/instagram.svg' alt='Instagram' className='w-6 h-6' /></a>
        <a href='#'><img src='/icons/linkedin.svg' alt='LinkedIn' className='w-6 h-6' /></a>
      </div>
    </div>
  );
}
