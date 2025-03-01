import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import type { Metadata } from 'next'
import MaintenancePage from './maintenance/page'

export const metadata: Metadata = {
  title: {
    template: '%s | Blog',
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
  const isInMaintenanceMode =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

  if (isInMaintenanceMode) {
    return (
      <html lang="pt-BR">
        <body className="bg-gray-900 text-white antialiased">
          <div className="min-h-dvh flex justify-center gap-16 flex-col">
            <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
              <MaintenancePage />
            </main>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white antialiased">
        <div className="min-h-dvh flex justify-center gap-16 flex-col">
          <Header />
          <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
