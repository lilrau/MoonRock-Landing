import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MoonRock Soluções',
  description: 'Uma plataforma completa e personalizada de gerenciamento de negócios que ajuda equipes a colaborar, monitorar o progresso e entregar resultados mais rapidamente.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
