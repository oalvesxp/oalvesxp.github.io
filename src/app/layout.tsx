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
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
