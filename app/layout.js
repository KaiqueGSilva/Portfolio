import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de [Seu Nome]',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
