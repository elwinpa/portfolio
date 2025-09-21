export const metadata = {
  title: 'Elwin Paulson',
  description: 'Designed and developed by Elwin Paulson',
   icons: {
    icon: '/icon.png',
    apple: './icon.png'
   }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
