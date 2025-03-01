import Footer from '../components/footer'
import Header from '../components/header'
import Maintenance from '../components/maintenance'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Blog | @oalvesxp',
  },
  description:
    'Compartilhando conhecimento sobre DevOps e desenvolvimento backend para quem está começando na área.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isInMaintenanceMode = false

  return (
    <html lang="pt-BR">
      <body className="bg-gray-600 text-white antialiased">
        <div className="min-h-dvh flex justify-center gap-16 flex-col">
          <Header />
          <main className="flex flex-col items-center mx-auto px-5 py-8 md:py-0">
            {isInMaintenanceMode ? <Maintenance /> : children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
