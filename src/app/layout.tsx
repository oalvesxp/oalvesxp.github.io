import type { Metadata } from 'next'

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
  const header = (
    <header>
      <div>
        <h1>Osvaldo A' Blog </h1>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by oalvesxp</h3>
      </div>
    </footer>
  )

  return (
    <html lang="pt">
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
