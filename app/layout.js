import './globals.css'
import { AuthProvider } from '../context/AuthContext'; // Importa o AuthProvider
import FacebookPixelProvider from '../lib/fbpixel/FacebookPixelProvider'; // Importa o FacebookPixelProvider
import Footer from '@/components/footer'; // Importa o Footer
import { ThemeProvider } from 'next-themes'

export const metadata = {
  generator: 'v0.dev'
};

function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider> {/* Envolve o conteúdo com o AuthProvider */}
            <FacebookPixelProvider> {/* Adiciona o Facebook Pixel */}
              {children}
              <Footer /> {/* Adiciona o rodapé em todas as páginas */}
            </FacebookPixelProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout



// Imports e metadata movidos para o topo
