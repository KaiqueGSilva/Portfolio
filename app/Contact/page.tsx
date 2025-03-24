export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6">Contato</h1>
      {/* Formulário */}
      <form
        action="https://formsubmit.co/seu-email@gmail.com"
        method="POST"
        className="flex flex-col gap-4 max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
          className="p-3 border-2 border-gray-600 rounded-md bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 border-2 border-gray-600 rounded-md bg-gray-800 text-white"
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          required
          className="p-3 border-2 border-gray-600 rounded-md bg-gray-800 text-white"
        ></textarea>
        <button
          type="submit"
          className="p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md font-bold"
        >
          Enviar
        </button>
      </form>

      {/* Separação da div com os botões */}
      <div className="mt-8 flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/kaiquegsilva/"
          target="_blank"
          className="btn-linkedin"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/KaiqueGSilva"
          target="_blank"
          className="btn-github"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
