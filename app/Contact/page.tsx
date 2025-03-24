export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <form action="https://formsubmit.co/seu-email@gmail.com" method="POST" className="flex flex-col gap-2 max-w-md">
        <input type="text" name="name" placeholder="Nome" required className="p-2 border" />
        <input type="email" name="email" placeholder="Email" required className="p-2 border" />
        <textarea name="message" placeholder="Mensagem" required className="p-2 border"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
      </form>
      <div className="mt-4 flex gap-4">
        <a href="https://linkedin.com/in/seuperfil" target="_blank">LinkedIn</a>
        <a href="https://github.com/seuperfil" target="_blank">GitHub</a>
      </div>
    </div>
  );
}
