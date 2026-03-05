export const metadata = {
  title: 'QuantHire AI',
  description: 'AI-powered hiring analytics for quant, AI & fintech talent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
