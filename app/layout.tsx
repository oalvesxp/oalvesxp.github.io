import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
